"use client"

import { User, Pencil, MoreHorizontal, FileText, AlertTriangle, Ban, Send } from "lucide-react"

export function MemberProfile() {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-[#1e3a5f] text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <span className="font-semibold text-lg">
            Member Profile: XYZ Exchange <span className="font-normal text-sm text-gray-300">(VGN-GH-045)</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-[#2d4a6f] rounded">
            <Pencil className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-[#2d4a6f] rounded">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column - Company Info */}
          <div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Company Info</h3>
              <div className="space-y-3">
                <div className="flex">
                  <span className="text-gray-600 w-24">Status:</span>
                  <span className="font-medium text-[#1e3a5f]">Verified</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-24">Category:</span>
                  <span className="font-medium text-[#1e3a5f]">Exchange</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-24">AML Risk:</span>
                  <span className="font-medium text-[#1e3a5f]">Medium</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-24">Complaints:</span>
                  <span className="font-medium text-[#1e3a5f]">2</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 space-y-2">
              <button className="w-full bg-[#1e3a5f] text-white px-4 py-2.5 rounded text-sm font-medium flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> Request Documents
              </button>
              <button className="w-full bg-[#1e3a5f] text-white px-4 py-2.5 rounded text-sm font-medium flex items-center justify-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Send Warning
              </button>
              <button className="w-full bg-red-500 text-white px-4 py-2.5 rounded text-sm font-medium flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Notify Regulator
              </button>
            </div>
          </div>

          {/* Right Column - Company Info Card */}
          <div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-[#1e3a5f] mb-4">Company Info</h3>
              <div className="space-y-3">
                <div className="flex border-b border-gray-100 pb-2">
                  <span className="text-gray-600 w-28">Status:</span>
                  <span className="font-medium text-[#1e3a5f]">Verified</span>
                </div>
                <div className="flex border-b border-gray-100 pb-2">
                  <span className="text-gray-600 w-28">Category:</span>
                  <span className="font-medium text-[#1e3a5f]">Exchange</span>
                </div>
                <div className="flex border-b border-gray-100 pb-2">
                  <span className="text-gray-600 w-28">AML Risk:</span>
                  <span className="font-medium text-[#1e3a5f]">Medium</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-28">Complaints:</span>
                  <span className="font-medium text-[#1e3a5f]">2</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 space-y-2">
              <button className="w-full bg-amber-500 text-white px-4 py-2.5 rounded text-sm font-medium flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Request Member
              </button>
              <button className="w-full bg-green-500 text-white px-4 py-2.5 rounded text-sm font-medium flex items-center justify-center gap-2">
                <Ban className="w-4 h-4" /> Suspend Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
