"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check, Copy, Link as LinkIcon, Cpu, Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

type ContactTab = "SOCIALS" | "CONTACT_FORM";

export function Contact() {
  const [activeTab, setActiveTab] = useState<ContactTab>("SOCIALS");
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

    // Simulate backend submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitOutput(`Request Processed.
Status: Success.
Your inquiry has been successfully added to the contact queue. 
I will respond to ${email} as soon as possible.`);
    }, 1500);
  };

  const socials = [
    { name: "GitHub", url: "https://github.com/TechNxt05", handle: "@TechNxt05" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/amritanshu-yadav-6480662a8/", handle: "amritanshu-yadav" },
    { name: "Google Scholar", url: "https://scholar.google.com/citations?user=ZPF9seYAAAAJ&hl=en", handle: "Amritanshu Yadav" },
    { name: "Email Client", url: `mailto:${emailAddress}`, handle: "amritanshuy0503@gmail.com" }
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Contact & Networking
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-sans">
            Connect <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">With Me</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-sans">
            Query social directories or broadcast a message to my backend queue.
          </p>
        </div>

        {/* Console Container */}
        <div className="rounded-3xl border border-white/5 bg-white/2 shadow-2xl backdrop-blur-sm overflow-hidden flex flex-col min-h-[460px]">
          
          <div className="grid grid-cols-2 border-b border-white/5 font-mono text-sm select-none">
            <button
              onClick={() => setActiveTab("SOCIALS")}
              className={`py-4 border-r border-white/5 text-center cursor-pointer transition-all ${
                activeTab === "SOCIALS" ? "bg-black/50 text-white font-bold" : "text-gray-500 hover:bg-white/5 hover:text-white"
              }`}
            >
              Socials & Links
            </button>
            <button
              onClick={() => setActiveTab("CONTACT_FORM")}
              className={`py-4 text-center cursor-pointer transition-all ${
                activeTab === "CONTACT_FORM" ? "bg-black/50 text-white font-bold" : "text-gray-500 hover:bg-white/5 hover:text-white"
              }`}
            >
              Contact Form
            </button>
          </div>

          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeTab === "SOCIALS" && (
                <motion.div
                  key="socials"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socials.map((soc) => (
                      <a
                        key={soc.name}
                        href={soc.url}
                        target="_blank"
                        className="bg-black/50 border border-white/5 hover:border-cyan-500/30 rounded-xl p-4 flex items-center justify-between group transition-all hover:bg-white/5"
                      >
                        <div className="flex items-center gap-3">
                          <Globe size={18} className="text-cyan-400 shrink-0" />
                          <div>
                            <span className="text-xs text-gray-500 block font-mono">{soc.name}</span>
                            <span className="text-sm font-bold text-white font-mono transition-colors group-hover:text-cyan-400">
                              {soc.handle}
                            </span>
                          </div>
                        </div>
                        <LinkIcon size={14} className="text-gray-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                      </a>
                    ))}
                  </div>

                  <div className="bg-black/50 border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs mt-6">
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-cyan-400 shrink-0" />
                      <div>
                        <span className="block text-white font-bold">Direct Email Pipeline</span>
                        <span className="text-[10px] text-gray-500">{emailAddress}</span>
                      </div>
                    </div>
                    <Button
                      onClick={handleCopyEmail}
                      size="sm"
                      className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs rounded-lg px-4"
                    >
                      {copied ? (
                        <>
                          <Check size={12} className="mr-1" /> COPIED
                        </>
                      ) : (
                        "COPY EMAIL"
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}

              {activeTab === "CONTACT_FORM" && (
                <motion.div
                  key="post-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6 text-left flex-1 flex flex-col justify-between"
                >
                  {submitOutput ? (
                    <div className="bg-black/50 border border-white/5 rounded-xl p-4 font-mono text-[11px] text-gray-400 flex-1 flex flex-col justify-between overflow-x-auto whitespace-pre leading-relaxed">
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
                        className="border-white/5 hover:bg-white/5 rounded-lg text-xs font-mono w-fit mt-4 bg-transparent text-white"
                      >
                        RESET_CONNECTION
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4 flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1.5">
                          <label className="block font-mono text-[10px] text-gray-500 uppercase">Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-black/50 border border-white/5 rounded-xl px-4 py-2 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="block font-mono text-[10px] text-gray-500 uppercase">Organization</label>
                          <input
                            type="text"
                            placeholder="Company Name"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full bg-black/50 border border-white/5 rounded-xl px-4 py-2 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="block font-mono text-[10px] text-gray-500 uppercase">Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-black/50 border border-white/5 rounded-xl px-4 py-2 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] text-gray-500 uppercase">Message *</label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Type your message description here..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-black/50 border border-white/5 rounded-xl px-4 py-2 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono rounded-xl h-10 px-5 flex items-center gap-1.5 w-fit"
                      >
                        {isSubmitting ? (
                          "BROADCASTING..."
                        ) : (
                          <>
                            <Send size={12} /> BROADCAST_MESSAGE
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
