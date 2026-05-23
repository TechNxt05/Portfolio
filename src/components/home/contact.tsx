"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, Check, Copy, Link as LinkIcon, Cpu, Shield, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ContactTab = "GET_SOCIALS" | "POST_MESSAGE" | "SSH_TELEMETRY";

export function Contact() {
  const [activeTab, setActiveTab] = useState<ContactTab>("GET_SOCIALS");
  const [copied, setCopied] = useState(false);
  
  // POST Message form fields
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitOutput, setSubmitOutput] = useState<string | null>(null);

  const emailAddress = "amritanshuy0503@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setIsSubmitting(true);
    setSubmitOutput(null);

    // Simulate stdout stream delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitOutput(`HTTP/1.1 202 Accepted
Content-Type: application/json
Inference-Latency: 12.4ms
System-Token: safe_attested_loop_ack

{
  "status": "MESSAGE_QUEUED",
  "data": {
    "name": "${name}",
    "company": "${company || "N/A"}",
    "email": "${email}"
  },
  "pipeline_ack": "Standard SRE callback request logged.",
  "action": "Initializing direct secure callback to ${email}..."
}`);
    }, 1500);
  };

  const socials = [
    { name: "GitHub", url: "https://github.com/TechNxt05", handle: "@TechNxt05", color: "text-cyan-400" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/amritanshu-yadav-6480662a8/", handle: "amritanshu-yadav", color: "text-purple-400" },
    { name: "Google Scholar", url: "https://scholar.google.com/citations?user=ZPF9seYAAAAJ&hl=en", handle: "Amritanshu Yadav", color: "text-emerald-400" },
    { name: "Email Client", url: `mailto:${emailAddress}`, handle: "amritanshuy0503@gmail.com", color: "text-pink-400" }
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden border-t border-white/5 dot-matrix-fine">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Secure Endpoint Connection
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-sans">
            Initialize <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">API Connection</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            Query social directories, broadcast a secure message to my backend queue, or audit live system telemetries.
          </p>
        </div>

        {/* Console Container */}
        <div className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col min-h-[460px]">
          
          {/* Console Header Bar */}
          <div className="bg-white/2 border-b border-white/5 px-4 py-3 flex items-center justify-between font-mono text-[10px] text-gray-500">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="ml-2 font-bold tracking-wider">AMRITANSHU_GATEWAY_TERMINAL</span>
            </div>
            <div className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>TLS_SECURED</span>
            </div>
          </div>

          {/* Console Tab Links */}
          <div className="grid grid-cols-3 border-b border-white/5 font-mono text-xs select-none">
            <button
              onClick={() => setActiveTab("GET_SOCIALS")}
              className={`py-3 border-r border-white/5 text-center cursor-pointer transition-all ${
                activeTab === "GET_SOCIALS" ? "bg-white/5 text-white font-bold" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              curl GET /socials
            </button>
            <button
              onClick={() => setActiveTab("POST_MESSAGE")}
              className={`py-3 border-r border-white/5 text-center cursor-pointer transition-all ${
                activeTab === "POST_MESSAGE" ? "bg-white/5 text-white font-bold" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              curl POST /message
            </button>
            <button
              onClick={() => setActiveTab("SSH_TELEMETRY")}
              className={`py-3 text-center cursor-pointer transition-all ${
                activeTab === "SSH_TELEMETRY" ? "bg-white/5 text-white font-bold" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              ssh core_server
            </button>
          </div>

          {/* Tab Content Sandbox */}
          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeTab === "GET_SOCIALS" && (
                <motion.div
                  key="socials"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6 text-left"
                >
                  <div className="font-mono text-xs text-gray-500">
                    <span className="text-blue-400">guest@amritanshu-gateway:~$</span> curl -X GET https://api.amritanshu.dev/v1/socials
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socials.map((soc) => (
                      <a
                        key={soc.name}
                        href={soc.url}
                        target="_blank"
                        className="bg-white/2 border border-white/5 hover:border-white/15 rounded-2xl p-4 flex items-center justify-between group transition-all hover:bg-white/3"
                      >
                        <div className="flex items-center gap-3">
                          <Globe size={18} className={`${soc.color} shrink-0`} />
                          <div>
                            <span className="text-xs text-gray-500 block font-mono">dir://{soc.name.toLowerCase()}</span>
                            <span className="text-sm font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                              {soc.handle}
                            </span>
                          </div>
                        </div>
                        <LinkIcon size={14} className="text-gray-600 group-hover:text-cyan-400 transition-colors shrink-0" />
                      </a>
                    ))}
                  </div>

                  <div className="bg-black/40 border border-white/5 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs mt-6">
                    <div className="flex items-center gap-2">
                      <Cpu size={16} className="text-cyan-400 animate-spin-slow shrink-0" />
                      <div>
                        <span className="block text-white font-bold">Direct Email Pipeline</span>
                        <span className="text-[10px] text-gray-500">Bypasses client filters: amritanshuy0503@gmail.com</span>
                      </div>
                    </div>
                    <Button
                      onClick={handleCopyEmail}
                      size="sm"
                      className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs rounded-lg px-4"
                    >
                      {copied ? (
                        <>
                          <Check size={12} className="mr-1" /> COPIED_DIR
                        </>
                      ) : (
                        "COPY EMAIL"
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}

              {activeTab === "POST_MESSAGE" && (
                <motion.div
                  key="post-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6 text-left flex-1 flex flex-col justify-between"
                >
                  <div className="font-mono text-xs text-gray-500">
                    <span className="text-blue-400">guest@amritanshu-gateway:~$</span> curl -X POST https://api.amritanshu.dev/v1/message -d @payload.json
                  </div>

                  {submitOutput ? (
                    <div className="bg-black border border-white/5 rounded-2xl p-4 font-mono text-[11px] text-gray-400 shadow-inner flex-1 flex flex-col justify-between overflow-x-auto whitespace-pre leading-relaxed">
                      <div>{submitOutput}</div>
                      <Button
                        onClick={() => {
                          setSubmitOutput(null);
                          setName("");
                          setCompany("");
                          setEmail("");
                          setMessage("");
                        }}
                        size="sm"
                        variant="outline"
                        className="border-white/10 hover:bg-white/5 rounded-lg text-xs font-mono w-fit mt-4 bg-transparent text-gray-400 hover:text-white"
                      >
                        RESET_CONNECTION
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4 flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1.5">
                          <label className="block font-mono text-[10px] text-gray-500 uppercase">recruiter_name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/2 border border-white/5 rounded-xl px-4 py-2 text-sm text-white font-mono focus:border-cyan-500/50 focus:outline-none transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="block font-mono text-[10px] text-gray-500 uppercase">enterprise_org</label>
                          <input
                            type="text"
                            placeholder="OpenAI / Stripe"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full bg-white/2 border border-white/5 rounded-xl px-4 py-2 text-sm text-white font-mono focus:border-cyan-500/50 focus:outline-none transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="block font-mono text-[10px] text-gray-500 uppercase">callback_address *</label>
                          <input
                            type="email"
                            required
                            placeholder="hr@enterprise.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/2 border border-white/5 rounded-xl px-4 py-2 text-sm text-white font-mono focus:border-cyan-500/50 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] text-gray-500 uppercase">raw_payload_message *</label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Type your message description here. Discuss projects, architectures, or coordinate interview schedules..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-white/2 border border-white/5 rounded-xl px-4 py-2 text-sm text-white font-mono focus:border-cyan-500/50 focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs font-mono rounded-xl h-10 px-5 flex items-center gap-1.5 w-fit"
                      >
                        {isSubmitting ? (
                          "BROADCASTING PAYLOAD..."
                        ) : (
                          <>
                            <Send size={12} /> BROADCAST_SECURE_PAYLOAD
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </motion.div>
              )}

              {activeTab === "SSH_TELEMETRY" && (
                <motion.div
                  key="ssh"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6 text-left font-mono text-xs leading-relaxed"
                >
                  <div>
                    <span className="text-blue-400">guest@amritanshu-gateway:~$</span> ssh amritanshu@core.iiitnr.edu
                  </div>
                  
                  <div className="text-cyan-400 font-bold border-b border-white/5 pb-2 mb-2">
                    AMRITANSHU_YADAV_SYSTEM_TELEMETRY v3.2.14
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400">
                    <div className="space-y-1">
                      <div><span className="text-white">Active Internships:</span> 2 (DRDO, XelronAI)</div>
                      <div><span className="text-white">IEEE Conf. Papers:</span> 3 (Tokyo, Dubai, Japan)</div>
                      <div><span className="text-white">NPM Registry:</span> aegis-agent (Safety Layer)</div>
                      <div><span className="text-white">System ELO:</span> 1450+ Chess / Dhoni Execution (Cricket)</div>
                    </div>
                    <div className="space-y-1">
                      <div><span className="text-white">Availability:</span> Open to Opportunities</div>
                      <div><span className="text-white">Timezone:</span> UTC+05:30 (India/Lucknow)</div>
                      <div><span className="text-white">Safety Index:</span> 99.8% (Deterministic)</div>
                      <div><span className="text-white">Platform Stack:</span> Next.js 15, FastAPI, pgvector</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[10px] text-gray-500 font-bold">
                    <Award size={12} className="text-yellow-400" />
                    <span>SECURE CONCURRENCY PARSER ACTIVE &bull; NO DETECTED LEAKS</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
