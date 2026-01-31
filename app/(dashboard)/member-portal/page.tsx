"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Upload,
  CreditCard,
  User,
  Building2,
  CheckCircle,
  AlertTriangle,
  Ban,
  Send,
  Shield,
  Clock,
  ChevronRight,
} from "lucide-react"

const memberProfile = {
  name: "XYZ Exchange",
  vaspId: "VGN-GH-045",
  status: "Verified",
  category: "Exchange",
  amlRisk: "Medium",
  complaints: 2,
}

const ownershipList = [
  { name: "Verified", status: "Verified", verified: true },
  { name: "CryptoTrade Ltd", status: "Verified", verified: true },
  { name: "DigitalCoin Payment", status: "Verified", verified: true },
]

const riskLevels = [
  { name: "PEP Match Flagged", percentage: 56, color: "bg-red-500" },
  { name: "Large Withdrawal Reviewed", percentage: 54, color: "bg-red-500" },
]

export default function MemberPortalPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f]">Member Portal</h1>
          <p className="text-muted-foreground">Status and analytics of the associated/connected VASP traders.</p>
        </div>
        <Button className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white text-sm">
          For Regulators
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Actions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-[#1e3a5f]">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-[#1e3a5f]" />
                  <span className="font-medium">Start Your Application</span>
                </div>
                <Button className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white">
                  Apply Now
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Upload className="h-5 w-5 text-[#1e3a5f]" />
                  <span className="font-medium">Upload Documents</span>
                </div>
                <Button className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white">
                  Upload KYC
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-[#1e3a5f]" />
                  <span className="font-medium">Pay Membership Fees</span>
                </div>
                <Button variant="outline" className="border-[#1e3a5f] text-[#1e3a5f] bg-transparent">
                  Pay Dues
                </Button>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <span className="text-sm text-muted-foreground">Application Status:</span>
                <Badge className="bg-amber-100 text-amber-700">
                  <Clock className="h-3 w-3 mr-1" />
                  Under Review
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Member Profile Detail Card */}
          <Card>
            <CardHeader className="border-b bg-[#1e3a5f] text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">ABC Exchange</CardTitle>
                    <p className="text-white/70 text-sm">Overview</p>
                  </div>
                </div>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                  Compliance Status
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center gap-6 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Compliance Score: <strong className="text-green-600">92%</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span>Last Audit: <strong>Jan 12, 2026</strong></span>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ownership */}
                <div>
                  <h3 className="font-semibold text-[#1e3a5f] mb-3">Ownership</h3>
                  <div className="space-y-2">
                    {ownershipList.map((item) => (
                      <div key={item.name} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{item.name}</span>
                        </div>
                        <Badge className={item.verified ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>
                          {item.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Risk Level */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-[#1e3a5f]">Risk Level</h3>
                    <button className="text-muted-foreground">&times;</button>
                  </div>
                  <div className="space-y-3">
                    {riskLevels.map((risk) => (
                      <div key={risk.name}>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            <span>{risk.name}</span>
                          </div>
                          <span className="font-medium">{risk.percentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${risk.color}`} 
                            style={{ width: `${risk.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Member Profile */}
        <div className="space-y-6">
          {/* Company Info Card */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-[#1e3a5f]">Company Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-muted-foreground">Status:</span>
                <span className="font-medium">Verified</span>
              </div>
              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-muted-foreground">Category:</span>
                <span className="font-medium">Exchange</span>
              </div>
              <div className="flex justify-between text-sm border-b pb-2">
                <span className="text-muted-foreground">AML Risk:</span>
                <span className="font-medium text-amber-600">Medium</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Complaints:</span>
                <span className="font-medium">2</span>
              </div>
            </CardContent>
          </Card>

          {/* Member Actions */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-[#1e3a5f]">Member Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white justify-start">
                <Send className="h-4 w-4 mr-2" />
                Request Member
              </Button>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-white justify-start">
                <Ban className="h-4 w-4 mr-2" />
                Suspend Member
              </Button>
            </CardContent>
          </Card>

          {/* Member Profile Card */}
          <Card>
            <CardHeader className="pb-3 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-base">Member Profile: {memberProfile.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">(VGN-GH-045)</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">VASP ID:</span>
                <span className="text-sm font-medium">{memberProfile.vaspId}</span>
                <Badge className="bg-green-100 text-green-700 ml-auto">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              </div>
              <div className="flex justify-between text-sm border-t pt-2">
                <span className="text-muted-foreground">Category:</span>
                <span>{memberProfile.category}</span>
              </div>
              <div className="flex justify-between text-sm border-t pt-2">
                <span className="text-muted-foreground">AML Risk:</span>
                <span className="text-amber-600">{memberProfile.amlRisk}</span>
              </div>
              <div className="flex justify-between text-sm border-t pt-2">
                <span className="text-muted-foreground">Complaints:</span>
                <span>{memberProfile.complaints}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 pt-4">
                <Button variant="outline" size="sm" className="text-xs bg-transparent">
                  <FileText className="h-3 w-3 mr-1" />
                  Request Documents
                </Button>
                <Button variant="outline" size="sm" className="text-xs border-amber-500 text-amber-600 bg-transparent">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Issue Warning
                </Button>
                <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white text-xs">
                  <Ban className="h-3 w-3 mr-1" />
                  Suspend Member
                </Button>
                <Button size="sm" className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white text-xs">
                  <Send className="h-3 w-3 mr-1" />
                  Notify Regulator
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
