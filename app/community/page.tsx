"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  MoreHorizontal,
  Users,
  Building2,
  MessageSquare,
  Send,
  FileText,
  User,
  CheckCircle,
} from "lucide-react"

const communities = [
  { name: "Crypto Exchanges", members: 42, risk: "Medium", riskColor: "bg-amber-500", admin: "Secretariat" },
  { name: "Stablecoin Issuers", members: 18, risk: "Low", riskColor: "bg-green-500", admin: "Compliance" },
  { name: "OTC Dealers", members: 9, risk: "High", riskColor: "bg-red-500", admin: "Risk Team" },
]

const recentMessages = [
  { sender: "Admin", message: "Reminder: Compliance documents due.", time: "(10:15 AM)", avatar: "A", isAdmin: true },
  { sender: "User", message: "Understood, will submit soon.", time: "(10:20 AM)", avatar: "U", isAdmin: false },
  { sender: "Admin", message: "Please ensure mat utility. Please clarify.", time: "(Yesterday)", avatar: "A", isAdmin: true },
]

const communityMembers = [
  { name: "ABC Exchange", status: "Active", type: "Exchange", lastActivity: "2 hours ago" },
  { name: "CryptoTrade Ltd", status: "Pending", type: "Exchange", lastActivity: "1 day ago" },
  { name: "StableCoin Ghana", status: "Active", type: "Stablecoin", lastActivity: "30 min ago" },
  { name: "PayToken Africa", status: "Suspended", type: "Payment", lastActivity: "3 days ago" },
]

export default function CommunityPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f]">Community Monitor</h1>
          <p className="text-muted-foreground">Monitor and manage VASP community communications</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-[#1e3a5f]">
            <Users className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#1e3a5f]">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#1e3a5f]">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Left 2/3 */}
        <div className="lg:col-span-2 space-y-6">
          {/* Community Table */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-[#1e3a5f]">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-3 font-medium text-muted-foreground">Community</th>
                    <th className="pb-3 font-medium text-muted-foreground">Members</th>
                    <th className="pb-3 font-medium text-muted-foreground">Risk Level</th>
                    <th className="pb-3 font-medium text-muted-foreground">Admin</th>
                  </tr>
                </thead>
                <tbody>
                  {communities.map((community) => (
                    <tr key={community.name} className="border-b last:border-0">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-[#1e3a5f] rounded flex items-center justify-center">
                            <Building2 className="h-3 w-3 text-white" />
                          </div>
                          {community.name}
                        </div>
                      </td>
                      <td className="py-3">{community.members}</td>
                      <td className="py-3">
                        <span className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${community.riskColor}`} />
                          {community.risk}
                        </span>
                      </td>
                      <td className="py-3 text-muted-foreground">{community.admin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Recent Messages */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-[#1e3a5f]">Recent Messages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentMessages.map((msg, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                    msg.isAdmin ? "bg-[#1e3a5f]" : "bg-gray-400"
                  }`}>
                    {msg.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{msg.sender}</span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{msg.message}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Community Members Table */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-[#1e3a5f]">Community Members</CardTitle>
                <Button size="sm" className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white">
                  <Users className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-3 font-medium text-muted-foreground">Member</th>
                    <th className="pb-3 font-medium text-muted-foreground">Type</th>
                    <th className="pb-3 font-medium text-muted-foreground">Status</th>
                    <th className="pb-3 font-medium text-muted-foreground">Last Activity</th>
                    <th className="pb-3 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {communityMembers.map((member) => (
                    <tr key={member.name} className="border-b last:border-0">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                            <Building2 className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-medium">{member.name}</span>
                        </div>
                      </td>
                      <td className="py-3 text-muted-foreground">{member.type}</td>
                      <td className="py-3">
                        <Badge className={
                          member.status === "Active" ? "bg-green-100 text-green-700" :
                          member.status === "Pending" ? "bg-amber-100 text-amber-700" :
                          "bg-red-100 text-red-700"
                        }>
                          {member.status}
                        </Badge>
                      </td>
                      <td className="py-3 text-muted-foreground text-xs">{member.lastActivity}</td>
                      <td className="py-3">
                        <Button size="sm" variant="outline" className="text-xs bg-transparent">
                          View
                        </Button>
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
          {/* Group Actions */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-[#1e3a5f]">Group Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white justify-start">
                <Users className="h-4 w-4 mr-2" />
                View Member List
              </Button>
              <Button className="w-full bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white justify-start">
                <MessageSquare className="h-4 w-4 mr-2" />
                View Recent Messages
              </Button>
              <Button className="w-full bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Send Notice
              </Button>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-[#1e3a5f]">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total Communities</span>
                <span className="font-bold text-[#1e3a5f]">15</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Active Members</span>
                <span className="font-bold text-[#1e3a5f]">69</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Messages Today</span>
                <span className="font-bold text-[#1e3a5f]">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Pending Reviews</span>
                <span className="font-bold text-amber-600">7</span>
              </div>
            </CardContent>
          </Card>

          {/* Community Leaders */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-[#1e3a5f]">Community Admins</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25d366] flex items-center justify-center text-white font-medium">
                  S
                </div>
                <div>
                  <p className="font-medium text-sm">Secretariat</p>
                  <p className="text-xs text-muted-foreground">Exchanges Admin</p>
                </div>
                <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center text-white font-medium">
                  C
                </div>
                <div>
                  <p className="font-medium text-sm">Compliance</p>
                  <p className="text-xs text-muted-foreground">Stablecoins Admin</p>
                </div>
                <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f59e0b] flex items-center justify-center text-white font-medium">
                  R
                </div>
                <div>
                  <p className="font-medium text-sm">Risk Team</p>
                  <p className="text-xs text-muted-foreground">OTC Dealers Admin</p>
                </div>
                <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
              </div>
            </CardContent>
          </Card>

          {/* Send Message */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-[#1e3a5f]">Quick Message</CardTitle>
            </CardHeader>
            <CardContent>
              <textarea 
                placeholder="Type your message to community..."
                className="w-full h-24 p-3 border rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]"
              />
              <Button className="w-full mt-3 bg-[#25d366] hover:bg-[#20bd5a] text-white">
                <Send className="h-4 w-4 mr-2" />
                Send to All
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
