"use client"

import React from "react"
import { Shield, Lock, Globe, Zap, ArrowRight, Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ComingSoon() {
    return (
        <div className="fixed inset-0 z-[100] bg-[#0a192f] text-white overflow-hidden flex flex-col items-center justify-center p-6 w-full">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#25d366]/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#3b82f6]/10 blur-[120px] rounded-full" />

                {/* Animated grid effect */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="z-10 max-w-4xl w-full text-center space-y-12">
                {/* Logo Section */}
                <div className="flex flex-col items-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#25d366] to-[#3b82f6] p-[2px] shadow-2xl shadow-[#3b82f6]/20">
                        <div className="w-full h-full bg-[#0a192f] rounded-[14px] flex items-center justify-center">
                            <Shield className="w-10 h-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-outfit">
                        VASP <span className="text-[#25d366]">GHANA</span>
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent rounded-full" />
                </div>

                {/* Content Section */}
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 fill-mode-both">
                    <h2 className="text-2xl md:text-3xl font-light text-blue-100/80">
                        The Digital Frontier of <span className="font-semibold text-white">Trust and Regulation</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-blue-100/60 leading-relaxed">
                        We're building the most advanced regulatory framework and registry for Virtual Asset Service Providers in Ghana. A new standard for the digital economy is coming.
                    </p>
                </div>

                {/* Status Counter / Badges */}
                <div className="flex flex-wrap justify-center gap-4 py-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
                    {[
                        { icon: Lock, label: "Secure Protocol" },
                        { icon: Globe, label: "Global Standards" },
                        { icon: Zap, label: "Compliance" }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 backdrop-blur-md"
                        >
                            <item.icon className="w-4 h-4 text-[#25d366]" />
                            <span className="text-sm font-medium text-blue-100/90">{item.label}</span>
                        </div>
                    ))}
                </div>



                {/* Footer / Socials */}
                <div className="absolute bottom-8 w-full px-6 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm gap-4">
                    <p>© 2025 VASP Ghana. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                    <Twitter className="w-5 h-5 cursor-pointer hover:text-[#3b82f6] transition-colors" />
                    <Linkedin className="w-5 h-5 cursor-pointer hover:text-[#3b82f6] transition-colors" />
                    <Github className="w-5 h-5 cursor-pointer hover:text-[#3b82f6] transition-colors" />
                </div>
                <div className="flex items-center gap-4">
                    <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Contact Us</span>
                </div>
            </div>
        </div>
    )
}
