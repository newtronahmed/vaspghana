"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  Building2,
  Shield,
  FileText,
  Scale,
  Search,
  Settings,
  LogOut,
  Bell,
  MessageSquare,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  /* { name: "Members", href: "/members", icon: Users },
  { name: "Community", href: "/community", icon: Building2 },
  { name: "Regulator", href: "/regulator", icon: Shield }, */
  { name: "VASP Registry", href: "/registry", icon: Search },
  /* { name: "Member Portal", href: "/portal", icon: FileText }, */
  { name: "Governance", href: "/governance", icon: Scale },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-[#1e3a5f] min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-[#2d4a6f]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-white text-lg">VASP Ghana</h1>
            <p className="text-xs text-gray-300">Admin Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[#25d366] text-white"
                      : "text-gray-300 hover:bg-[#2d4a6f] hover:text-white"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-[#2d4a6f]">
        <div className="flex items-center gap-2 mb-4">
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#2d4a6f] text-white rounded-lg text-sm hover:bg-[#3d5a7f] transition-colors">
            <Bell className="w-4 h-4" />
            <span>Alerts</span>
            <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">7</span>
          </button>
        </div>
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
            <Users className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-medium">Admin User</p>
            <p className="text-gray-400 text-xs">Secretariat</p>
          </div>
          <button className="p-1 text-gray-400 hover:text-white">
            <Settings className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-400 hover:text-white">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}
