"use client"

import {
  Bell,
  Settings,
  Plus,
  PlayCircle,
  Flag,
  BarChart3,
  Search,
  Menu,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Loading from "./loading"

export default function DashboardPage() {
  const stats = [
    { label: "Total Members", value: "312", color: "bg-[#1e3a5f]" },
    { label: "Verified VASPs", value: "201", color: "bg-[#2563eb]" },
    { label: "Communities", value: "15", color: "bg-[#1e3a5f]" },
    { label: "Active Alerts", value: "7", color: "bg-amber-500" },
    { label: "Suspended Members", value: "4", color: "bg-red-500" },
  ]

  const communities = [
    { name: "Exchanges", members: 42, risk: "Medium", riskColor: "bg-amber-500", admin: "Secretariat" },
    { name: "Stablecoins", members: 18, risk: "Low", riskColor: "bg-green-500", admin: "Compliance Team" },
    { name: "OTC Dealers", members: 9, risk: "High", riskColor: "bg-red-500", admin: "Risk Team" },
  ]

  const alerts = [
    { alert: "Suspicious Withdrawals", community: "Exchanges", risk: "High", riskColor: "text-red-500", status: "Investigating" },
    { alert: "PEP Activity", community: "OTC Dealers", risk: "Medium", riskColor: "text-amber-500", status: "Pending" },
    { alert: "AML Policy Missing", community: "Stablecoins", risk: "High", riskColor: "text-red-500", status: "Escalated" },
  ]

  return (
    <Suspense fallback={<Loading />}>
      <div className="p-6">
        {/* Header */}
        <div className="bg-[#1e3a5f] text-white rounded-t-xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-amber-600 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-10 h-10">
                <circle cx="50" cy="50" r="45" fill="#fbbf24" />
                <path d="M50 20 L60 45 L85 45 L65 60 L75 85 L50 70 L25 85 L35 60 L15 45 L40 45 Z" fill="#15803d" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">VASP Ghana <span className="font-normal">Admin Dashboard</span></h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-[#2d4a6f] rounded-lg">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-[#2d4a6f] rounded-lg">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-[#2d4a6f] rounded-lg">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-b-xl shadow-sm p-6">
          {/* Master Control Panel */}
          <h2 className="text-lg font-semibold text-[#1e3a5f] mb-4">Master Control Panel</h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-5 gap-3 mb-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`${stat.color} text-white rounded-lg p-4 text-center`}
              >
                <div className="text-xs opacity-90 mb-1">{stat.label}</div>
                <div className="text-3xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-8">
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-[#1e3a5f] hover:bg-gray-50 bg-transparent">
              <Plus className="w-4 h-4" /> Add Member
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-[#1e3a5f] hover:bg-gray-50 bg-transparent">
              <Search className="w-4 h-4" /> Verify VASP
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-[#1e3a5f] hover:bg-gray-50 bg-transparent">
              <AlertTriangle className="w-4 h-4" /> Flag Member
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-[#1e3a5f] hover:bg-gray-50 bg-transparent">
              <BarChart3 className="w-4 h-4" /> View Compliance
            </button>
          </div>

          {/* Alerts Overview */}
          <h2 className="text-lg font-semibold text-[#1e3a5f] mb-4">Alerts Overview</h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Alert</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Community</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Risk</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {alerts.map((alert, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-4 py-3 text-sm text-[#1e3a5f]">{alert.alert}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{alert.community}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`flex items-center gap-1.5 ${alert.riskColor}`}>
                        <span className={`w-2 h-2 rounded-full ${alert.risk === "High" ? "bg-red-500" : "bg-amber-500"}`}></span>
                        {alert.risk}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-[#1e3a5f]">{alert.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Community Monitor Card */}
        <div className="mt-6 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-[#1e3a5f] text-white px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Community Monitor</h2>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-[#2d4a6f] rounded-lg">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[#2d4a6f] rounded-lg">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-[#2d4a6f] rounded-lg">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Community</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Members</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Risk</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Admin</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
                  </tr>
                </thead>
                <tbody>
                  {communities.map((community) => (
                    <tr key={community.name} className="border-t border-gray-100">
                      <td className="px-4 py-3 text-sm font-medium text-[#1e3a5f]">{community.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{community.members}</td>
                      <td className="px-4 py-3 text-sm">
                        <span className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${community.riskColor}`}></span>
                          <span className={community.risk === "High" ? "text-red-500" : community.risk === "Medium" ? "text-amber-500" : "text-green-500"}>
                            {community.risk}
                          </span>
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{community.admin}</td>
                      <td className="px-4 py-3">
                        <Link
                          href="/community"
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#1e3a5f] text-white text-xs font-medium rounded hover:bg-[#2d4a6f]"
                        >
                          <Search className="w-3 h-3" />
                          {community.name === "Stablecoins" ? "View Messages" : "View Members"}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
