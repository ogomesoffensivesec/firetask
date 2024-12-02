'use client'
import { useForm, Controller } from 'react-hook-form'
import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"
import { Button } from "../../ui/button"
import GoogleSVGIcon from "@/assets/icons/google"
import MicrosoftSVGIcon from "@/assets/icons/microsoft"
import Link from "next/link"

interface FormData {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  setor: string;
}

export function SignInForm() {
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
  };

  return (
    <main className="w-full h-screen flex justify-center items-center bg-zinc-900">
      <div className="w-3/5 h-/5 bg-zinc-950 shadow-md rounded-lg flex p-6">
        <div className="w-1/2 bg-gradient-to-br from-zinc-900 to-purple-950 rounded-lg border-0 outline-none">
          {/* Conteúdo adicional, se necessário */}
        </div>
        <div className="w-1/2 px-12 py-4">
          <div className="">
            <span className="text-3xl font-bold text-white">
              Crie sua conta
            </span>
          </div>
          <div className="divide-y-[0.5px] divide-zinc-800 ">
            <form className="text-white py-4 space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-1">
                <Label>
                  Nome completo
                </Label>
                <Input
                  type="text"
                  placeholder="Digite seu nome completo"
                  {...register('nome', { required: 'Nome é obrigatório' })}
                  className="border-zinc-800 p-4 m-0"
                />
                {errors.nome && <p className="text-red-500 text-xs">{errors.nome.message}</p>}
              </div>
              <div className="space-y-1">
                <Label>
                  Seu melhor email
                </Label>
                <Input
                  type="email"
                  placeholder="Digite seu email"
                  {...register('email', { required: 'Email é obrigatório' })}
                  className="border-zinc-800 p-4 m-0"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label>
                    Senha
                  </Label>
                  <Input
                    type="password"
                    placeholder="Digite sua senha"
                    {...register('senha', { required: 'Senha é obrigatória' })}
                    className="border-zinc-800 p-4 m-0"
                  />
                  {errors.senha && <p className="text-red-500 text-xs">{errors.senha.message}</p>}
                </div>
                <div className="space-y-1">
                  <Label>
                    Confirmar Senha
                  </Label>
                  <Input
                    type="password"
                    placeholder="Confirme a senha"
                    {...register('confirmarSenha', {
                      required: 'Confirmação de senha é obrigatória',
                      validate: (value) =>
                        value === watch('senha') || 'As senhas não coincidem',
                    })}
                    className="border-zinc-800 p-4 m-0"
                  />
                  {errors.confirmarSenha && <p className="text-red-500 text-xs">{errors.confirmarSenha.message}</p>}
                </div>
              </div>
              <div className="space-y-1">
                <Label>
                  Setor
                </Label>
                <Controller
                  name="setor"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Setor é obrigatório' }}
                  render={({ field }) => (
                    <>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger className="border-zinc-800">
                          <SelectValue placeholder="Selecione o setor" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-200 ">
                          <SelectItem className="hover:bg-zinc-700" value="financeiro">Financeiro</SelectItem>
                          <SelectItem className="hover:bg-zinc-700" value="contabilidade">Contabilidade</SelectItem>
                          <SelectItem className="hover:bg-zinc-700" value="recursos-humanos">Recursos Humanos</SelectItem>
                          <SelectItem className="hover:bg-zinc-700" value="compras">
                            Compras
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.setor && <p className="text-red-500 text-xs">{errors.setor.message}</p>}
                    </>
                  )}
                />
              </div>
              <Button type="submit" className="w-full">
                Cadastrar
              </Button>
            </form>
            <div className="w-full text-white py-3.5 flex gap-2 justify-center">
              <Button type="button" className="gap-2">
                <GoogleSVGIcon />
                Entrar com Google
              </Button>
              <Button type="button" className="gap-2">
                <MicrosoftSVGIcon />
                Entrar com Microsoft
              </Button>
            </div>
            <div className="w-full text-white py-2.5 text-center text-xs">
              <Link href='/sign-up' className="hover:text-purple-800 duration-500 transition-all cursor-pointer">
                Entrar com uma conta existente
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
