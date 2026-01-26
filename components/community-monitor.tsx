"use client"

import { Users, Bell, MoreHorizontal, MessageSquare, FileText, LayoutGrid } from "lucide-react"

export function CommunityMonitor() {
  const communities = [
    { icon: "crypto", name: "Crypto Exchanges", members: 42, risk: "Medium", riskColor: "bg-amber-500", admin: "Secretariat" },
    { icon: "stablecoin", name: "Stablecoin Issuers", members: 18, risk: "Low", riskColor: "bg-green-500", admin: "Compliance" },
    { icon: "otc", name: "OTC Dealers", members: 9, risk: "High", riskColor: "bg-red-500", admin: "Risk Team" },
  ]

  const messages = [
    { sender: "Admin", type: "admin", message: "Reminder: Compliance documents due.", time: "(10:15 AM)" },
    { sender: "User", type: "user", message: "Understood, will submit soon.", time: "(10:20 AM)" },
    { sender: "Admin", type: "admin", message: "Please ensure mar udtley. Please clarify.", time: "(Yesterday)" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#1e3a5f] text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LayoutGrid className="w-6 h-6" />
          <span className="font-semibold text-lg">Community Monitor</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-[#2d4a6f] rounded">
            <Users className="w-5 h-5" />
          </button>
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
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div>
            <h3 className="font-semibold text-[#1e3a5f] mb-3">Community</h3>
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
                          {community.icon === "crypto" ? "C" : community.icon === "stablecoin" ? "S" : "O"}
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

            {/* Recent Messages */}
            <h3 className="font-semibold text-[#1e3a5f] mt-6 mb-3">Recent Messages</h3>
            <div className="space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400">•</span>
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-600">
                        {msg.type === "admin" ? "A" : "U"}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-[#1e3a5f]">{msg.sender}</span>
                    <span className="text-gray-600 ml-2">{msg.message}</span>
                    <span className="text-gray-400 ml-2 text-xs">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Group Actions */}
          <div>
            <h3 className="font-semibold text-[#1e3a5f] mb-3">Group Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-[#1e3a5f] text-white px-4 py-2.5 rounded text-sm font-medium flex items-center justify-center gap-2">
                <Users className="w-4 h-4" /> View Member List
              </button>
              <button className="w-full bg-[#1e3a5f] text-white px-4 py-2.5 rounded text-sm font-medium flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" /> View Recent Messages
              </button>
              <button className="w-full bg-[#1e3a5f] text-white px-4 py-2.5 rounded text-sm font-medium flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> Send Notice
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
