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
      <div className="p-8 space-y-8 institutional-grid min-h-screen">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-[#1e3a5f] pb-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-serif text-[#1e3a5f] uppercase tracking-tight">
              Regulator <span className="text-amber-600">Portal</span>
            </h1>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-amber-600" />
              <p className="text-sm font-medium uppercase tracking-widest text-[#1e3a5f]/60">Bank of Ghana Oversight</p>
            </div>
          </div>
          <Button variant="outline" className="h-12 border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white rounded-none font-bold uppercase tracking-tighter transition-all">
            <Search className="h-4 w-4 mr-2" />
            Market Pulse
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className={`p-6 institutional-card flex flex-col justify-between h-32 ${stat.highlight ? "bg-amber-50 border-amber-200" : "bg-white"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#1e3a5f]/40">{stat.label}</span>
                    {stat.trend && (
                      <span className="flex items-center text-[10px] font-bold text-green-600">
                        <TrendingUp className="h-3 w-3 mr-0.5" />
                        {stat.trend}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className={`text-4xl font-serif font-bold ${stat.highlight ? "text-amber-600" : "text-[#1e3a5f]"}`}>
                      {stat.value}
                    </span>
                    <stat.icon className={`h-5 w-5 ${stat.highlight ? "text-amber-400" : "text-[#1e3a5f]/20"}`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Flagged VASPs */}
            <div className="institutional-card bg-white overflow-hidden">
              <div className="px-6 py-4 border-b border-[#1e3a5f10] flex items-center justify-between bg-[#1e3a5f03]">
                <h3 className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  Flagged Entities
                </h3>
                <ChevronRight className="h-4 w-4 text-[#1e3a5f20]" />
              </div>
              <div className="p-6 space-y-4">
                {flaggedVasps.map((vasp) => (
                  <div key={vasp.name} className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 border-2 border-amber-100 flex items-center justify-center bg-amber-50/50">
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-bold text-[#1e3a5f] uppercase text-xs tracking-tight">{vasp.name}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none">High Risk Action Required</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-[#1e3a5f] hover:bg-amber-600 text-white rounded-none border-b-4 border-black/20 text-[10px] font-bold uppercase px-4 h-8">
                      {vasp.action}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Regulator Oversight Table */}
            <div className="institutional-card bg-white overflow-hidden">
              <div className="bg-[#1e3a5f] text-white p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border-2 border-white/20 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <h2 className="text-xl font-serif uppercase tracking-tight">Oversight Dashboard</h2>
                      <p className="text-[10px] text-white/50 uppercase tracking-[0.2em]">Institutional Compliance Matrix</p>
                    </div>
                  </div>
                  <Search className="h-5 w-5 text-white/30" />
                </div>

                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Total Members</p>
                    <p className="text-3xl font-serif font-bold">312</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-amber-400 uppercase tracking-widest mb-1">High Risk</p>
                    <p className="text-3xl font-serif font-bold text-amber-500 underline decoration-2 underline-offset-4">05</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-red-400 uppercase tracking-widest mb-1">Suspended</p>
                    <p className="text-3xl font-serif font-bold text-red-500">04</p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-[#1e3a5f] bg-[#1e3a5f05]">
                      <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-[#1e3a5f60]">Entity</th>
                      <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-[#1e3a5f60]">Registry ID</th>
                      <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-[#1e3a5f60]">Status</th>
                      <th className="p-4 text-[10px] font-bold uppercase tracking-widest text-[#1e3a5f60]">Risk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e3a5f10]">
                    {companyList.map((company) => (
                      <tr key={company.vaspId} className="hover:bg-[#1e3a5f02] transition-colors">
                        <td className="p-4">
                          <p className="font-bold text-xs uppercase tracking-tight text-[#1e3a5f]">{company.company}</p>
                        </td>
                        <td className="p-4">
                          <code className="text-[10px] font-mono bg-[#1e3a5f08] px-2 py-1 text-[#1e3a5f80]">{company.vaspId}</code>
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest ${company.statusColor}`}>
                            <span className={`w-1.5 h-1.5 rounded-none ${company.status === "Verified" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]"}`} />
                            {company.status}
                          </span>
                        </td>
                        <td className="p-4">
                          <Badge className={`${company.riskBg} text-white rounded-none border-0 text-[9px] font-black uppercase tracking-tighter px-2`}>
                            {company.risk} Scale
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Risk Heat Map */}
            <div className="institutional-card bg-white p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-[#1e3a5f10] pb-2">Regional Risk Map</h3>
              <div className="relative bg-[#f8fafc] border border-[#1e3a5f08] rounded p-4 h-64 mb-6 group transition-all overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none institutional-grid" />
                <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-md">
                  <path
                    d="M60,20 L140,20 L150,60 L160,100 L150,140 L130,180 L70,180 L50,140 L40,100 L50,60 Z"
                    fill="white"
                    stroke="#1e3a5f"
                    strokeWidth="1.5"
                    className="group-hover:fill-[#1e3a5f03] transition-colors"
                  />
                  <circle cx="100" cy="50" r="10" fill="#f44336" className="animate-pulse" />
                  <circle cx="70" cy="90" r="8" fill="#ff9800" />
                  <circle cx="130" cy="80" r="8" fill="#4caf50" />
                  <circle cx="90" cy="130" r="12" fill="#ff9800" className="opacity-80" />
                  <circle cx="120" cy="150" r="6" fill="#4caf50" />
                  <circle cx="80" cy="160" r="8" fill="#f44336" className="animate-pulse" />
                </svg>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-l-2 border-green-500 pl-4 py-1">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest leading-none">Market Volume</p>
                    <p className="text-lg font-serif font-bold h-6">$320.00 M</p>
                  </div>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between border-l-2 border-blue-500 pl-4 py-1">
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest leading-none">Foreign Inflow</p>
                    <p className="text-lg font-serif font-bold h-6">$48.20 M</p>
                  </div>
                  <Coins className="h-4 w-4 text-blue-500" />
                </div>
              </div>
            </div>

            {/* High-Risk Alerts */}
            <div className="institutional-card bg-white p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-[#1e3a5f10] pb-2">Critical Alerts</h3>
              <div className="space-y-4">
                {highRiskAlerts.map((alert) => (
                  <div key={alert.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-1.5 h-8 ${alert.severity === "high" ? "bg-red-500" : "bg-amber-500"}`} />
                      <div>
                        <p className="font-bold text-[11px] uppercase tracking-tight text-[#1e3a5f]">{alert.name}</p>
                        <p className="text-[9px] text-muted-foreground uppercase tracking-widest">{alert.issue}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* VASP Overview List */}
            <div className="institutional-card bg-white overflow-hidden">
              <div className="p-6">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-[#1e3a5f10] pb-2">VASP Status</h3>
                <div className="space-y-4">
                  {vaspOverview.map((vasp) => (
                    <div key={vasp.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-none flex items-center justify-center border ${vasp.status === "Verified" ? "bg-green-50 border-green-100" :
                            vasp.status === "Under Review" ? "bg-amber-50 border-amber-100" : "bg-red-50 border-red-100"
                          }`}>
                          <Building2 className={`h-4 w-4 ${vasp.status === "Verified" ? "text-green-600" :
                              vasp.status === "Under Review" ? "text-amber-600" : "text-red-600"
                            }`} />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-tight text-[#1e3a5f]">{vasp.name}</span>
                      </div>
                      <span className={`text-[9px] font-black uppercase tracking-widest ${vasp.statusColor}`}>{vasp.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
