"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Building2,
  Users,
  Shield,
  MessageSquare,
  FileText,
  Settings,
  Bell,
  Menu,
  X,
  Search,
} from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    title: "Admin Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "VASP Registry",
    href: "/registry",
    icon: Building2,
  },
  {
    title: "Member Portal",
    href: "/member-portal",
    icon: Users,
  },
  {
    title: "Regulator Portal",
    href: "/regulator",
    icon: Shield,
  },
  {
    title: "Community Monitor",
    href: "/community",
    icon: MessageSquare,
  },
  {
    title: "Governance & Policies",
    href: "/governance",
    icon: FileText,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#1e3a5f] z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.78.47 3.45 1.29 4.89L2 22l5.11-1.29C8.55 21.53 10.22 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.62 0-3.14-.45-4.44-1.22l-.32-.19-3.03.77.79-2.95-.21-.33A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <span className="text-white font-semibold text-lg">VASP Ghana</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-[#2d4a6f]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40 pt-16"
          onClick={() => setMobileOpen(false)}
        >
          <nav
            className="bg-[#1e3a5f] w-64 h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-sm transition-colors",
                    pathname === item.href
                      ? "bg-[#25d366] text-white"
                      : "text-white/80 hover:bg-[#2d4a6f] hover:text-white"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#1e3a5f] min-h-screen fixed left-0 top-0">
        {/* Logo */}
        <div className="p-4 border-b border-[#2d4a6f]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.78.47 3.45 1.29 4.89L2 22l5.11-1.29C8.55 21.53 10.22 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.62 0-3.14-.45-4.44-1.22l-.32-.19-3.03.77.79-2.95-.21-.33A7.96 7.96 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">VASP Ghana</h1>
              <p className="text-white/60 text-xs">Admin Dashboard</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#2d4a6f] text-white placeholder:text-white/50 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#25d366]"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-2">
          <div className="px-4 py-2">
            <span className="text-white/40 text-xs uppercase tracking-wider">Main Menu</span>
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-sm transition-colors",
                pathname === item.href
                  ? "bg-[#25d366] text-white"
                  : "text-white/80 hover:bg-[#2d4a6f] hover:text-white"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#2d4a6f]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-[#2d4a6f]">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-[#2d4a6f]">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25d366] flex items-center justify-center text-white text-sm font-medium">
                A
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
