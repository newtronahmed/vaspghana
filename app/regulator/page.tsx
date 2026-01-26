"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Building2,
  AlertTriangle,
  TrendingUp,
  ChevronRight,
  BarChart3,
  FileText,
  Shield,
  Eye,
  DollarSign,
  Coins,
  CheckCircle,
} from "lucide-react"
import { Suspense } from "react"
import Loading from "./loading"

const stats = [
  { label: "Total VASPs", value: "128", icon: Building2, trend: "+12" },
  { label: "High Risk Alerts", value: "5", icon: AlertTriangle, highlight: true },
  { label: "Market Volume", value: "$320M", icon: DollarSign, trend: "" },
]

const flaggedVasps = [
  { name: "XYZ Exchange", action: "Unverify" },
  { name: "CryptoTrade Ltd", action: "Unverify" },
  { name: "DigitalCoin Payment", action: "Unverify" },
]

const amlMonitoring = [
  { name: "Monitoring", icon: Eye },
  { name: "Transaction Reports", icon: FileText },
  { name: "Risk Level", icon: AlertTriangle },
  { name: "AML/CTF Guidelines", icon: Shield },
]

const companyList = [
  { company: "ABC Exchange", vaspId: "VGN-GH-023", status: "Verified", statusColor: "text-green-600", risk: "Medium", riskBg: "bg-amber-500" },
  { company: "CryptoTrade Ltd", vaspId: "VGN-GH-112", status: "Under Review", statusColor: "text-red-600", risk: "High", riskBg: "bg-red-500" },
  { company: "PayToken Ghana", vaspId: "VGN-GH-078", status: "Suspended", statusColor: "text-red-600", risk: "High", riskBg: "bg-red-500" },
]

const highRiskAlerts = [
  { name: "XYZ Exchange", issue: "Large Withdrawals", severity: "high" },
  { name: "CryptoTrade Ltd", issue: "PEP Exposure", severity: "medium" },
  { name: "StableCoin Ghana", issue: "Rapid Inflow", severity: "medium" },
]

const vaspOverview = [
  { name: "CryptoWallet Ltd", status: "Verified", statusColor: "text-green-600", icon: "wallet" },
  { name: "Gh Coins Exchange", status: "Under Review", statusColor: "text-amber-600", icon: "exchange" },
  { name: "PayToken Africa", status: "Suspended", statusColor: "text-red-600", icon: "token" },
]

export default function RegulatorPage() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">Regulator Portal</h1>
            <p className="text-muted-foreground">Welcome, Bank of Ghana</p>
          </div>
          <Button variant="outline" className="border-[#1e3a5f] text-[#1e3a5f] bg-transparent">
            <Search className="h-4 w-4 mr-2" />
            Easy market
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className={stat.highlight ? "border-amber-200 bg-amber-50" : ""}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                      {stat.trend && (
                        <Badge className="bg-green-100 text-green-700 text-xs">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {stat.trend}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className={`text-2xl font-bold ${stat.highlight ? "text-amber-600" : "text-[#1e3a5f]"}`}>
                        {stat.value}
                      </p>
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-green-500 rounded-lg flex items-center justify-center">
                        <Coins className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Flagged VASPs */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-[#1e3a5f] flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    Flagged VASPs
                  </CardTitle>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {flaggedVasps.map((vasp) => (
                  <div key={vasp.name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                      </div>
                      <span className="font-medium">{vasp.name}</span>
                    </div>
                    <Button size="sm" className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white text-xs">
                      {vasp.action}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AML Monitoring */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-[#1e3a5f] flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    AML Monitoring
                  </CardTitle>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {amlMonitoring.map((item) => (
                    <Button 
                      key={item.name} 
                      variant="outline" 
                      className="justify-start h-auto py-3 border-[#1e3a5f]/20 bg-transparent"
                    >
                      <item.icon className="h-4 w-4 mr-2 text-[#1e3a5f]" />
                      {item.name}
                      <ChevronRight className="h-4 w-4 ml-auto text-muted-foreground" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Regulator Oversight Table */}
            <Card>
              <CardHeader className="bg-[#1e3a5f] text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">Regulator Oversight</CardTitle>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10">
                      <Search className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-0 border-b">
                  <div className="p-4 text-center border-r bg-[#1e3a5f] text-white">
                    <p className="text-xs text-white/70">WhatsApp VASP Members</p>
                    <p className="text-3xl font-bold">312</p>
                  </div>
                  <div className="p-4 text-center border-r bg-amber-500 text-white">
                    <p className="text-xs text-white/90">High Risk Cases</p>
                    <p className="text-3xl font-bold">5</p>
                  </div>
                  <div className="p-4 text-center bg-red-500 text-white">
                    <p className="text-xs text-white/90">Suspended Firms</p>
                    <p className="text-3xl font-bold">4</p>
                  </div>
                </div>
                
                {/* Table */}
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="p-4 text-left font-medium text-muted-foreground">Company</th>
                      <th className="p-4 text-left font-medium text-muted-foreground">VASP ID</th>
                      <th className="p-4 text-left font-medium text-muted-foreground">Compliance Status</th>
                      <th className="p-4 text-left font-medium text-muted-foreground">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {companyList.map((company) => (
                      <tr key={company.vaspId} className="border-b last:border-0">
                        <td className="p-4 font-medium">{company.company}</td>
                        <td className="p-4 text-muted-foreground">{company.vaspId}</td>
                        <td className="p-4">
                          <span className={`flex items-center gap-1 ${company.statusColor}`}>
                            <span className={`w-2 h-2 rounded-full ${company.status === "Verified" ? "bg-green-500" : "bg-red-500"}`} />
                            {company.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <Badge className={`${company.riskBg} text-white`}>
                            {company.risk}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Ghana Risk Heat Map */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-[#1e3a5f]">Risk Heat Map</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Simplified Ghana Map */}
                <div className="relative bg-[#e8f4e8] rounded-lg p-4 h-48 mb-4">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Simplified Ghana outline */}
                    <path 
                      d="M60,20 L140,20 L150,60 L160,100 L150,140 L130,180 L70,180 L50,140 L40,100 L50,60 Z" 
                      fill="#c8e6c9" 
                      stroke="#4caf50" 
                      strokeWidth="2"
                    />
                    {/* Risk indicators */}
                    <circle cx="100" cy="50" r="12" fill="#f44336" opacity="0.8" />
                    <circle cx="70" cy="90" r="10" fill="#ff9800" opacity="0.8" />
                    <circle cx="130" cy="80" r="10" fill="#4caf50" opacity="0.8" />
                    <circle cx="90" cy="130" r="14" fill="#ff9800" opacity="0.8" />
                    <circle cx="120" cy="150" r="8" fill="#4caf50" opacity="0.8" />
                    <circle cx="80" cy="160" r="10" fill="#f44336" opacity="0.8" />
                  </svg>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="font-medium">$320M</span>
                    <span className="text-muted-foreground">Total Market Volume</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="font-medium">$48M</span>
                    <span className="text-muted-foreground">Foreign Inflows</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* High-Risk Alerts */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-[#1e3a5f]">High-Risk Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {highRiskAlerts.map((alert) => (
                  <div key={alert.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-sm">{alert.name}</p>
                        <p className="text-xs text-muted-foreground">{alert.issue}</p>
                      </div>
                    </div>
                    <span className={`w-3 h-3 rounded-full ${alert.severity === "high" ? "bg-red-500" : "bg-amber-500"}`} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* VASP Overview */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-[#1e3a5f]">VASP Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {vaspOverview.map((vasp) => (
                  <div key={vasp.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded flex items-center justify-center ${
                        vasp.status === "Verified" ? "bg-green-100" : 
                        vasp.status === "Under Review" ? "bg-blue-100" : "bg-red-100"
                      }`}>
                        <Building2 className={`h-3 w-3 ${
                          vasp.status === "Verified" ? "text-green-600" : 
                          vasp.status === "Under Review" ? "text-blue-600" : "text-red-600"
                        }`} />
                      </div>
                      <span className="text-sm font-medium">{vasp.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className={`w-2 h-2 rounded-full ${
                        vasp.status === "Verified" ? "bg-green-500" : 
                        vasp.status === "Under Review" ? "bg-amber-500" : "bg-red-500"
                      }`} />
                      <span className={`text-xs ${vasp.statusColor}`}>{vasp.status}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
