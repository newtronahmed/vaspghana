"use client"

import { Bell, Settings, Plus, PlayCircle, Flag, BarChart3, MessageSquare } from "lucide-react"

export function AdminDashboard() {
  const stats = [
    { label: "Total Members", value: "312" },
    { label: "Verified VASPs", value: "201" },
    { label: "Active Alerts", value: "7" },
    { label: "Suspended", value: "4", highlight: true },
  ]

  const communities = [
    { icon: "exchange", name: "Exchanges", members: 42, risk: "Medium", riskColor: "bg-amber-500", admin: "Secretariat" },
    { icon: "stablecoin", name: "Stablecoins", members: 18, risk: "Low", riskColor: "bg-green-500", admin: "Compliance" },
    { icon: "otc", name: "OTC Dealers", members: 9, risk: "High", riskColor: "bg-red-500", admin: "Risk Team" },
  ]

  const alerts = [
    { name: "XYZ Exchange", issue: "Large Withdrawals", severity: "high" },
    { name: "CryptoTrade Ltd", issue: "PEP Exposure", severity: "medium" },
    { name: "StableCoin Ghana", issue: "Rapid Inflow", severity: "medium" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#1e3a5f] text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#25d366] flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <span className="font-semibold text-lg">VASP Ghana <span className="font-normal">Admin Dashboard</span></span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-[#2d4a6f] rounded">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-[#2d4a6f] rounded">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-gray-200 rounded-lg p-3 text-center"
            >
              <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
              <div className={`text-2xl font-bold ${stat.highlight ? "text-red-500" : "text-[#1e3a5f]"}`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <button className="bg-[#1e3a5f] text-white px-3 py-2 rounded text-sm font-medium flex items-center justify-center gap-1">
            <Plus className="w-4 h-4" /> Add Member
          </button>
          <button className="bg-[#1e3a5f] text-white px-3 py-2 rounded text-sm font-medium flex items-center justify-center gap-1">
            <PlayCircle className="w-4 h-4" /> Verify VASP
          </button>
          <button className="bg-red-500 text-white px-3 py-2 rounded text-sm font-medium flex items-center justify-center gap-1">
            <Flag className="w-4 h-4" /> Flag Member
          </button>
          <button className="border border-[#1e3a5f] text-[#1e3a5f] px-3 py-2 rounded text-sm font-medium flex items-center justify-center gap-1 bg-transparent">
            <BarChart3 className="w-4 h-4" /> View Compliance
          </button>
        </div>

        {/* Community Overview and Active Alerts */}
        <div className="grid grid-cols-2 gap-4">
          {/* Community Overview */}
          <div>
            <h3 className="font-semibold text-[#1e3a5f] mb-3">Community Overview</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 text-left">
                  <th className="pb-2 font-medium">Community</th>
                  <th className="pb-2 font-medium">Members</th>
                  <th className="pb-2 font-medium">Risk Level</th>
                  <th className="pb-2 font-medium">Admin</th>
                </tr>
              </thead>
              <tbody>
                {communities.map((community) => (
                  <tr key={community.name} className="border-t border-gray-100">
                    <td className="py-2 flex items-center gap-2">
                      <div className="w-5 h-5 bg-[#1e3a5f] rounded flex items-center justify-center">
                        <span className="text-white text-xs">
                          {community.icon === "exchange" ? "E" : community.icon === "stablecoin" ? "S" : "O"}
                        </span>
                      </div>
                      {community.name}
                    </td>
                    <td className="py-2">{community.members}</td>
                    <td className="py-2">
                      <span className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${community.riskColor}`}></span>
                        {community.risk}
                      </span>
                    </td>
                    <td className="py-2 text-gray-600">{community.admin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Active Alerts */}
          <div>
            <h3 className="font-semibold text-[#1e3a5f] mb-3">Active Alerts</h3>
            <div className="space-y-2">
              {alerts.map((alert) => (
                <div key={alert.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">•</span>
                    <div>
                      <span className="font-medium text-[#1e3a5f]">{alert.name}</span>
                      <div className="text-gray-500 text-xs">{alert.issue}</div>
                    </div>
                  </div>
                  <span className={`w-3 h-3 rounded-full ${alert.severity === "high" ? "bg-red-500" : "bg-amber-500"}`}></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
