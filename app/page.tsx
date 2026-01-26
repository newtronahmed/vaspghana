"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, FileText, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a365d]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/logo-3.png"
              alt="VASP Ghana Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/location" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Location</Link>
            <Link href="/community" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Community</Link>
            <Link href="/registry" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Registry</Link>
            <Link href="/blogs" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Blogs</Link>
            <Button className="bg-[#25d366] hover:bg-[#20bd5c] text-white rounded-full px-6">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a365d] via-[#102a43] to-[#1a365d]">
          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Ghana's Official Digital Asset Industry Portal
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl">
            Working in partnership with <span className="text-white font-semibold">Bank of Ghana & SEC</span>
          </p>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-20">
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 pr-8">
              <div className="w-16 h-16 relative">
                <Image
                  src="/assets/images/bog.png"
                  alt="Bank of Ghana"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <p className="text-white font-bold leading-tight">Bank of Ghana</p>
                <p className="text-white/60 text-xs">Bank Beta</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 pr-8">
              <div className="w-16 h-16 relative">
                <Image
                  src="/assets/images/sec.png"
                  alt="SEC"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-xl leading-none">SEC</p>
              </div>
            </div>
          </div>

          {/* Feature Cards Floating Over Hero */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl -mb-48 md:-mb-24">
            <div className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4 text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#1a365d]">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d]">Licensed & Trusted</h3>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4 text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#1a365d]">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d]">Compliance Standards</h3>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4 text-center group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#1a365d]">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d]">Industry News</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for floating cards */}
      <div className="h-48 md:h-32 bg-white" />

      {/* Additional Sections could go here */}
    </div>
  )
}
