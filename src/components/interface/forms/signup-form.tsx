import BgImage from "@/assets/bg.jpg"
import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"
import { Button } from "../../ui/button"
import GoogleSVGIcon from "@/assets/icons/google"
import MicrosoftSVGIcon from "@/assets/icons/microsoft"
import Link from "next/link"

export function SignUpForm() {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-zinc-900">
      <div className="w-3/5 h-3/5 bg-zinc-950 shadow-md rounded-lg flex p-6">
        <div className="w-1/2 ">
          <img src={BgImage.src} alt="bg-image" className="h-full rounded-lg" />
        </div>
        <div className="w-1/2 px-12 py-4">
            <span className="text-3xl font-bold text-white">
              Bem-vindo de volta
            </span>
          <div className="divide-y-[0.5px] divide-zinc-800 ">
            <form className="text-white py-4 space-y-2" action="
          ">
              <div className="space-y-1">
                <Label>
               Email
                </Label>
                <Input type="email" placeholder="Digite seu email " className="border-zinc-800 p-4 m-0 " />
              </div>
              <div className="space-y-1">
                <div className="space-y-1">
                  <Label>
                    Senha
                  </Label>
                  <Input type="password" placeholder="Digite sua senha " className="border-zinc-800 p-4 m-0 " />
                </div>

              </div>
              <Button type="submit" className="w-full">
                Entrar na conta
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
            <div className="w-full text-white py-2.5 text-center text-xs  bottom-0">
              <Link href='/sign-in' className="hover:text-purple-800 duration-500 transition-all cursor-pointer">Cadastrar nova conta</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}