"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Users,
  Scale,
  BookOpen,
  Download,
  ExternalLink,
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronRight,
  Gavel,
  Shield,
  Building,
} from "lucide-react"

const policies = [
  { 
    name: "VASP Constitution", 
    icon: Scale, 
    status: "Active",
    progress: 100,
    lastUpdated: "Jan 15, 2026"
  },
  { 
    name: "Board & Committees", 
    icon: Users, 
    status: "Active",
    progress: 100,
    lastUpdated: "Dec 20, 2025"
  },
  { 
    name: "Code of Conduct", 
    icon: Gavel, 
    status: "Under Review",
    progress: 75,
    lastUpdated: "Jan 10, 2026"
  },
  { 
    name: "Reports & Guidelines", 
    icon: BookOpen, 
    status: "Active",
    progress: 100,
    lastUpdated: "Jan 05, 2026"
  },
]

const documents = [
  { name: "AML/CFT Policy Framework", type: "PDF", size: "2.4 MB", date: "Jan 2026" },
  { name: "Member Registration Guidelines", type: "PDF", size: "1.8 MB", date: "Dec 2025" },
  { name: "Compliance Reporting Template", type: "DOCX", size: "456 KB", date: "Jan 2026" },
  { name: "Risk Assessment Framework", type: "PDF", size: "3.1 MB", date: "Nov 2025" },
  { name: "Annual Audit Requirements", type: "PDF", size: "1.2 MB", date: "Jan 2026" },
]

const committees = [
  { name: "Executive Board", members: 5, nextMeeting: "Jan 28, 2026", status: "Active" },
  { name: "Compliance Committee", members: 8, nextMeeting: "Feb 05, 2026", status: "Active" },
  { name: "Risk Management", members: 6, nextMeeting: "Jan 30, 2026", status: "Active" },
  { name: "Technical Standards", members: 4, nextMeeting: "Feb 10, 2026", status: "Forming" },
]

const recentUpdates = [
  { title: "Updated AML Guidelines", date: "Jan 20, 2026", type: "Policy Update" },
  { title: "New Member Onboarding Process", date: "Jan 18, 2026", type: "Procedure" },
  { title: "Q4 2025 Compliance Report", date: "Jan 15, 2026", type: "Report" },
  { title: "Risk Assessment Framework v2.0", date: "Jan 10, 2026", type: "Framework" },
]

export default function GovernancePage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f]">Governance & Policies</h1>
          <p className="text-muted-foreground">Regulatory framework and compliance documentation</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="text-muted-foreground text-sm">Proposals</Button>
          <Button variant="ghost" className="text-muted-foreground text-sm">Requests</Button>
          <Badge className="bg-[#1e3a5f] text-white">
            <CheckCircle className="h-3 w-3 mr-1" />
            Agree to Continue
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Policy Cards */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-[#1e3a5f]">Core Policies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {policies.map((policy) => (
                <div key={policy.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center">
                      <policy.icon className="h-5 w-5 text-[#1e3a5f]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#1e3a5f]">{policy.name}</p>
                      <p className="text-xs text-muted-foreground">Last updated: {policy.lastUpdated}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Progress bar */}
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${policy.progress === 100 ? 'bg-green-500' : 'bg-amber-500'}`}
                        style={{ width: `${policy.progress}%` }}
                      />
                    </div>
                    <Badge className={policy.status === "Active" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}>
                      {policy.status}
                    </Badge>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Documents Library */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-[#1e3a5f]">Document Library</CardTitle>
                <Button size="sm" variant="outline" className="text-[#1e3a5f] border-[#1e3a5f] bg-transparent">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-3 font-medium text-muted-foreground">Document Name</th>
                    <th className="pb-3 font-medium text-muted-foreground">Type</th>
                    <th className="pb-3 font-medium text-muted-foreground">Size</th>
                    <th className="pb-3 font-medium text-muted-foreground">Date</th>
                    <th className="pb-3 font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr key={doc.name} className="border-b last:border-0">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-[#1e3a5f]" />
                          <span className="font-medium">{doc.name}</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <Badge variant="outline" className="text-xs">{doc.type}</Badge>
                      </td>
                      <td className="py-3 text-muted-foreground">{doc.size}</td>
                      <td className="py-3 text-muted-foreground">{doc.date}</td>
                      <td className="py-3">
                        <Button size="sm" variant="ghost" className="text-[#1e3a5f]">
                          <Download className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Committees */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-[#1e3a5f]">Committees & Boards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {committees.map((committee) => (
                  <div key={committee.name} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
                          <Users className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium text-[#1e3a5f]">{committee.name}</span>
                      </div>
                      <Badge className={committee.status === "Active" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}>
                        {committee.status}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Members:</span>
                        <span className="font-medium">{committee.members}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Next Meeting:</span>
                        <span className="font-medium">{committee.nextMeeting}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Quick Links */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-[#1e3a5f]">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-between text-[#1e3a5f] bg-transparent">
                <span className="flex items-center gap-2">
                  <Scale className="h-4 w-4" />
                  VASP Constitution
                </span>
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between text-[#1e3a5f] bg-transparent">
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Compliance Framework
                </span>
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between text-[#1e3a5f] bg-transparent">
                <span className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Bank of Ghana Guidelines
                </span>
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full justify-between text-[#1e3a5f] bg-transparent">
                <span className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  SEC Regulations
                </span>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Recent Updates */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-[#1e3a5f]">Recent Updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentUpdates.map((update, index) => (
                <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                  <div className="w-2 h-2 rounded-full bg-[#25d366] mt-2" />
                  <div>
                    <p className="font-medium text-sm text-[#1e3a5f]">{update.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">{update.type}</Badge>
                      <span className="text-xs text-muted-foreground">{update.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Compliance Status */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-[#1e3a5f]">Compliance Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">AML/CFT Compliance</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[95%]" />
                    </div>
                    <span className="text-sm font-medium text-green-600">95%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">KYC Requirements</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[88%]" />
                    </div>
                    <span className="text-sm font-medium text-green-600">88%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Reporting Standards</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 w-[72%]" />
                    </div>
                    <span className="text-sm font-medium text-amber-600">72%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Risk Assessment</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[91%]" />
                    </div>
                    <span className="text-sm font-medium text-green-600">91%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card className="bg-[#1e3a5f] text-white">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <AlertCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Need Assistance?</p>
                  <p className="text-xs text-white/70">Contact the compliance team</p>
                </div>
              </div>
              <Button className="w-full bg-white text-[#1e3a5f] hover:bg-white/90">
                Get Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
