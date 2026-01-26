"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  ChevronRight,
  Building2,
  Wallet,
  Coins,
} from "lucide-react"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Loading from "./loading"

const vasps = [
  {
    id: 1,
    name: "CryptoX Exchange",
    category: "Approved",
    status: "approved",
    compliance: "view",
    icon: Building2,
    iconBg: "bg-amber-500",
  },
  {
    id: 2,
    name: "GoldPesa Wallet",
    category: "Approved",
    status: "approved",
    compliance: "view",
    icon: Wallet,
    iconBg: "bg-amber-500",
  },
  {
    id: 3,
    name: "StableCoin Ghana",
    category: "Approved",
    status: "approved",
    compliance: "view",
    icon: Coins,
    iconBg: "bg-amber-500",
  },
]

const featuredVasps = [
  { name: "CryptoX Exchange", status: "Status update/compliance.", action: "Overview", color: "bg-green-500" },
  { name: "GoldPesa Wallet", status: "Payment option/enabled.", action: "Approve", color: "bg-green-500" },
  { name: "StableCoin Ghana", status: "Review update/compliance.", action: "Overview", color: "bg-green-500" },
]

export default function RegistryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const searchParams = useSearchParams()

  return (
    <Suspense fallback={<Loading />}>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.78.47 3.45 1.29 4.89L2 22l5.11-1.29C8.55 21.53 10.22 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#1e3a5f]">VASP Registry</h1>
                <p className="text-muted-foreground">Licensed Virtual Asset Service Providers</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="text-muted-foreground text-sm">Providers</Button>
            <Button variant="ghost" className="text-muted-foreground text-sm">Status</Button>
            <Button variant="ghost" className="text-muted-foreground text-sm">Report</Button>
            <Button className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white text-sm">
              Get Statistics
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Registry Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Enter VASP name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white">
                    Verify
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* VASP List */}
            <Card>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="p-4 text-left font-medium text-muted-foreground">VASP Name</th>
                      <th className="p-4 text-left font-medium text-muted-foreground">Category</th>
                      <th className="p-4 text-left font-medium text-muted-foreground">Status</th>
                      <th className="p-4 text-left font-medium text-muted-foreground">Compliance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vasps.map((vasp) => (
                      <tr key={vasp.id} className="border-b last:border-0 hover:bg-muted/20">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full ${vasp.iconBg} flex items-center justify-center`}>
                              <vasp.icon className="h-4 w-4 text-white" />
                            </div>
                            {vasp.name}
                          </div>
                        </td>
                        <td className="p-4">{vasp.category}</td>
                        <td className="p-4">
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            Approved
                          </Badge>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Button size="sm" className="bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs">
                              View
                            </Button>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Become a Licensed VASP Section */}
            <Card className="bg-[#1e3a5f] text-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-white/70">Payments</span>
                  <span className="text-sm text-white/70">Statistics</span>
                  <span className="text-sm text-white/70">Documents</span>
                  <Badge className="bg-white/20 text-white ml-auto">KYC Compliant</Badge>
                </div>
                <h2 className="text-xl font-bold mb-2">Become a Licensed VASP</h2>
                <p className="text-white/70 text-sm mb-4">
                  Simple steps of registration process for becoming the listed VASP members.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#2d4a6f] rounded-lg p-4 text-center">
                    <div className="w-10 h-10 bg-[#25d366] rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xs">Licensed & Trusted</p>
                  </div>
                  <div className="bg-[#2d4a6f] rounded-lg p-4 text-center">
                    <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-xs">Compliance Standards</p>
                  </div>
                  <div className="bg-[#2d4a6f] rounded-lg p-4 text-center">
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <p className="text-xs">Industry News</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {featuredVasps.map((item) => (
                    <div key={item.name} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${item.color} flex items-center justify-center`}>
                          <Building2 className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-white/60">{item.status}</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white text-xs">
                        {item.action}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - XYZ Exchange Detail */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">XYZ Exchange</CardTitle>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Approved</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Status:</p>
                    <p className="font-medium text-green-600">Approved</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Category:</p>
                    <p className="font-medium">Crypto Exchange</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Compliance Score:</p>
                    <p className="font-medium">94%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Audit:</p>
                    <p className="font-medium">Jan 20, 2025</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex gap-2 border-b">
                    <Button variant="ghost" className="text-[#1e3a5f] border-b-2 border-[#1e3a5f] rounded-none px-3 text-sm">
                      Company Details
                    </Button>
                    <Button variant="ghost" className="text-muted-foreground rounded-none px-3 text-sm">
                      Directors & Owners
                    </Button>
                    <Button variant="ghost" className="text-muted-foreground rounded-none px-3 text-sm">
                      Audit History
                    </Button>
                  </div>
                  <div className="pt-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Registered In: Accra, Ghana</span>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">View</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-sm">CEO: John Mensah</span>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs bg-transparent">View</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">Audit Review(s) Completed</span>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs text-green-600 border-green-600 bg-transparent">View</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
