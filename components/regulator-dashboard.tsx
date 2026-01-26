"use client"

import { Bell, MoreHorizontal, MessageSquare, Check, ArrowUp } from "lucide-react"

export function RegulatorDashboard() {
  const stats = [
    { label: "Registered VASPs", value: "201" },
    { label: "Active Exchanges", value: "34" },
    { label: "Stablecoin Issuers", value: "12" },
    { label: "Stablecoin Issuers", value: null, icon: "check", arrow: true },
    { label: "High-Risk Alerts", value: "5", highlight: true },
  ]

  const alerts = [
    { name: "XYZ Exchange", issue: "Large Windrawals", severity: "high" },
    { name: "CryptoTrade Ltd", issue: "PEP Exposure", severity: "medium" },
    { name: "StableCoin Ghana", issue: "Rapid Inflow", severity: "medium" },
  ]

  const vaspOverview = [
    { name: "CryptoWallet Ltd", status: "Verified", statusColor: "text-green-500" },
    { name: "Gh Coins Exchange", status: "Under Review", statusColor: "text-amber-500" },
    { name: "PayToken Africa", status: "Suspended", statusColor: "text-red-500" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#1e3a5f] text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#25d366] flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <span className="font-semibold text-lg">Regulator Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-[#2d4a6f] rounded">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-[#2d4a6f] rounded">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Stats Row */}
        <div className="flex gap-2 mb-4 overflow-x-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex-1 min-w-[100px] border rounded-lg p-2 text-center ${
                stat.highlight ? "border-red-200 bg-red-50" : "border-gray-200"
              }`}
            >
              <div className="text-xs text-gray-500 mb-1 flex items-center justify-center gap-1">
                {stat.label}
                {stat.arrow && <ArrowUp className="w-3 h-3 text-green-500" />}
              </div>
              {stat.icon === "check" ? (
                <div className="flex justify-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
              ) : (
                <div className={`text-xl font-bold ${stat.highlight ? "text-red-500" : "text-[#1e3a5f]"}`}>
                  {stat.value}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column - Risk Heat Map */}
          <div>
            <h3 className="font-semibold text-[#1e3a5f] mb-3">Risk Heat Map</h3>
            <div className="relative bg-[#e8f4ea] rounded-lg p-2 h-48">
              {/* Ghana Map Placeholder */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Simplified Ghana outline */}
                <path
                  d="M60,20 L140,20 L150,60 L160,100 L150,140 L140,180 L60,180 L50,140 L40,100 L50,60 Z"
                  fill="#c8e6c9"
                  stroke="#4caf50"
                  strokeWidth="2"
                />
                {/* Risk indicators */}
                <circle cx="80" cy="50" r="12" fill="#f59e0b" />
                <circle cx="120" cy="60" r="12" fill="#22c55e" />
                <circle cx="100" cy="90" r="12" fill="#ef4444" />
                <circle cx="70" cy="110" r="12" fill="#22c55e" />
                <circle cx="130" cy="100" r="12" fill="#f59e0b" />
                <circle cx="90" cy="140" r="12" fill="#ef4444" />
                <circle cx="110" cy="150" r="12" fill="#22c55e" />
              </svg>
            </div>
            
            {/* Stats below map */}
            <div className="mt-3 space-y-1">
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="font-bold text-[#1e3a5f]">$320M</span>
                <span className="text-gray-500">Total Market Volume</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="font-bold text-[#1e3a5f]">$48M</span>
                <span className="text-gray-500">Foreign Inflows</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* High-Risk Alerts */}
            <h3 className="font-semibold text-[#1e3a5f] mb-3">High-Risk Alerts</h3>
            <div className="space-y-2 mb-4">
              {alerts.map((alert) => (
                <div key={alert.name} className="flex items-center justify-between text-sm bg-gray-50 rounded px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#1e3a5f] rounded flex items-center justify-center">
                      <span className="text-white text-xs">E</span>
                    </div>
                    <span className="font-medium text-[#1e3a5f]">{alert.name}</span>
                    <span className="text-gray-500 text-xs">{alert.issue}</span>
                  </div>
                  <span className={`w-3 h-3 rounded-full ${alert.severity === "high" ? "bg-red-500" : "bg-amber-500"}`}></span>
                </div>
              ))}
            </div>

            {/* VASP Overview */}
            <h3 className="font-semibold text-[#1e3a5f] mb-3">VASP Overview</h3>
            <div className="space-y-2">
              {vaspOverview.map((vasp) => (
                <div key={vasp.name} className="flex items-center justify-between text-sm bg-gray-50 rounded px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded flex items-center justify-center ${
                      vasp.status === "Verified" ? "bg-teal-500" : 
                      vasp.status === "Under Review" ? "bg-blue-500" : "bg-indigo-500"
                    }`}>
                      <span className="text-white text-xs">C</span>
                    </div>
                    <span className="font-medium text-[#1e3a5f]">{vasp.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${
                      vasp.status === "Verified" ? "bg-green-500" : 
                      vasp.status === "Under Review" ? "bg-amber-500" : "bg-red-500"
                    }`}></span>
                    <span className={`text-xs ${vasp.statusColor}`}>{vasp.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
