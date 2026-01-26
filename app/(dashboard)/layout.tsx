import React from "react"
import { AppSidebar } from "@/components/app-sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-[#e8eef4]">

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
