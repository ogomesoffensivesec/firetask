import { AppSidebar } from "@/components/interface/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider className="grid grid-cols-[16rem_1fr]">
      <AppSidebar/>
      <main>{children}</main>
    </SidebarProvider>
  )
}