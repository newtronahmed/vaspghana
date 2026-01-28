"use client"

import { Users, Bell, MoreHorizontal, MessageSquare, FileText, LayoutGrid, Shield } from "lucide-react"

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
    <div className="institutional-card bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-[#1e3a5f] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
            <LayoutGrid className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-serif uppercase tracking-tight leading-tight">Community Monitor</h2>
            <p className="text-[9px] text-white/40 uppercase tracking-widest">Real-time VASP Network Oversight</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="h-10 w-10 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
            <Users className="w-4 h-4 text-white/60" />
          </button>
          <button className="h-10 w-10 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
            <Bell className="w-4 h-4 text-white/60" />
          </button>
          <button className="h-10 w-10 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10">
            <MoreHorizontal className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Communities */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1e3a5f]/40 flex items-center gap-2">
                <span className="w-1 h-3 bg-amber-500" /> Member Segments
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-[#1e3a5f] bg-[#1e3a5f05]">
                      <th className="p-4 text-[9px] font-bold uppercase tracking-widest text-[#1e3a5f60]">Classification</th>
                      <th className="p-4 text-[9px] font-bold uppercase tracking-widest text-[#1e3a5f60]">Units</th>
                      <th className="p-4 text-[9px] font-bold uppercase tracking-widest text-[#1e3a5f60]">Risk Assessment</th>
                      <th className="p-4 text-[9px] font-bold uppercase tracking-widest text-[#1e3a5f60]">Authority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1e3a5f10]">
                    {communities.map((community) => (
                      <tr key={community.name} className="hover:bg-[#1e3a5f02] transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 border border-[#1e3a5f15] bg-[#1e3a5f03] flex items-center justify-center">
                              <span className="text-[10px] font-black text-[#1e3a5f]">
                                {community.icon === "crypto" ? "C-01" : community.icon === "stablecoin" ? "S-02" : "O-03"}
                              </span>
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-tight text-[#1e3a5f]">{community.name}</span>
                          </div>
                        </td>
                        <td className="p-4 font-mono text-[11px] text-[#1e3a5f]">{community.members.toString().padStart(2, '0')}</td>
                        <td className="p-4">
                          <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                            <span className={`w-1.5 h-1.5 rounded-none ${community.riskColor} ring-2 ring-offset-2 ${community.riskColor === 'bg-red-500' ? 'ring-red-100' : community.riskColor === 'bg-amber-500' ? 'ring-amber-100' : 'ring-green-100'}`}></span>
                            {community.risk}
                          </span>
                        </td>
                        <td className="p-4 text-[10px] font-bold text-[#1e3a5f60] uppercase tracking-tighter">{community.admin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Messages */}
            <div className="space-y-4 pt-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1e3a5f]/40 flex items-center gap-2">
                <span className="w-1 h-3 bg-[#1e3a5f]" /> Communication Log
              </h3>
              <div className="space-y-2">
                {messages.map((msg, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border border-[#1e3a5f08] bg-[#1e3a5f02] group hover:border-[#1e3a5f15] transition-colors">
                    <div className="mt-1">
                      {msg.type === "admin" ?
                        <Shield className="h-3 w-3 text-amber-600" /> :
                        <Users className="h-3 w-3 text-[#1e3a5f40]" />
                      }
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#1e3a5f]">{msg.sender}</span>
                        <span className="text-[9px] text-[#1e3a5f40] font-mono">{msg.time}</span>
                      </div>
                      <p className="text-[11px] text-[#1e3a5f80] leading-relaxed italic border-l-2 border-[#1e3a5f10] pl-3">
                        "{msg.message}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Group Actions */}
          <div className="space-y-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1e3a5f]/40 flex items-center gap-2">
              <span className="w-1 h-3 bg-amber-500" /> Protocols
            </h3>
            <div className="space-y-3">
              <button className="w-full h-14 bg-[#1e3a5f] text-white px-6 border-b-4 border-black/30 text-[11px] font-bold uppercase tracking-[0.15em] flex items-center justify-between group hover:translate-y-0.5 hover:border-b-2 transition-all">
                <span className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-amber-500" /> Directory
                </span>
                <MoreHorizontal className="w-4 h-4 opacity-20 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="w-full h-14 bg-[#1e3a5f] text-white px-6 border-b-4 border-black/30 text-[11px] font-bold uppercase tracking-[0.15em] flex items-center justify-between group hover:translate-y-0.5 hover:border-b-2 transition-all">
                <span className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-amber-500" /> Archive
                </span>
                <MoreHorizontal className="w-4 h-4 opacity-20 group-hover:opacity-100 transition-opacity" />
              </button>
              <button className="w-full h-14 bg-amber-600 text-white px-6 border-b-4 border-black/30 text-[11px] font-bold uppercase tracking-[0.15em] flex items-center justify-between group hover:translate-y-0.5 hover:border-b-2 transition-all">
                <span className="flex items-center gap-3">
                  <FileText className="w-4 h-4" /> Issue Directive
                </span>
                <MoreHorizontal className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            <div className="p-6 border-2 border-dashed border-[#1e3a5f10] bg-[#1e3a5f02]">
              <p className="text-[9px] font-bold text-[#1e3a5f40] uppercase tracking-[0.2em] mb-4">Compliance Warning</p>
              <p className="text-[10px] text-[#1e3a5f60] uppercase leading-relaxed font-medium">
                All communications are logged and timestamped as per the VASP Regulatory Act Section 4-B. Ensure data integrity when issuing directives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
