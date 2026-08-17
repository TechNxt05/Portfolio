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
    <section id="contact" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden border-t border-border">
      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-semibold tracking-wider uppercase font-mono">
            Contact & Networking
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight font-sans">
            Connect <span className="text-primary/70">With Me</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-sans">
            Query social directories or broadcast a message to my backend queue.
          </p>
        </div>

        {/* Console Container */}
        <div className="rounded-3xl border border-border bg-card shadow-sm overflow-hidden flex flex-col min-h-[460px]">
          
          <div className="grid grid-cols-2 border-b border-border font-mono text-sm select-none">
            <button
              onClick={() => setActiveTab("SOCIALS")}
              className={`py-4 border-r border-border text-center cursor-pointer transition-all ${
                activeTab === "SOCIALS" ? "bg-muted text-foreground font-bold" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              Socials & Links
            </button>
            <button
              onClick={() => setActiveTab("CONTACT_FORM")}
              className={`py-4 text-center cursor-pointer transition-all ${
                activeTab === "CONTACT_FORM" ? "bg-muted text-foreground font-bold" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
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
                        className="bg-card border border-border hover:border-primary/20 rounded-xl p-4 flex items-center justify-between group transition-all hover:bg-muted/30"
                      >
                        <div className="flex items-center gap-3">
                          <Globe size={18} className="text-primary shrink-0" />
                          <div>
                            <span className="text-xs text-muted-foreground block font-mono">{soc.name}</span>
                            <span className="text-sm font-bold text-foreground font-mono transition-colors group-hover:text-primary">
                              {soc.handle}
                            </span>
                          </div>
                        </div>
                        <LinkIcon size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                      </a>
                    ))}
                  </div>

                  <div className="bg-muted border border-border rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs mt-6">
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-primary shrink-0" />
                      <div>
                        <span className="block text-foreground font-bold">Direct Email Pipeline</span>
                        <span className="text-[10px] text-muted-foreground">{emailAddress}</span>
                      </div>
                    </div>
                    <Button
                      onClick={handleCopyEmail}
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs rounded-lg px-4"
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
                    <div className="bg-muted border border-border rounded-xl p-4 font-mono text-[11px] text-muted-foreground flex-1 flex flex-col justify-between overflow-x-auto whitespace-pre leading-relaxed">
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
                        className="border-border hover:bg-card rounded-lg text-xs font-mono w-fit mt-4 bg-background text-foreground"
                      >
                        RESET_CONNECTION
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4 flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="space-y-1.5">
                          <label className="block font-mono text-[10px] text-muted-foreground uppercase">Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-background border border-border rounded-xl px-4 py-2 text-sm text-foreground font-mono focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="block font-mono text-[10px] text-muted-foreground uppercase">Organization</label>
                          <input
                            type="text"
                            placeholder="Company Name"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full bg-background border border-border rounded-xl px-4 py-2 text-sm text-foreground font-mono focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="block font-mono text-[10px] text-muted-foreground uppercase">Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-background border border-border rounded-xl px-4 py-2 text-sm text-foreground font-mono focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="block font-mono text-[10px] text-muted-foreground uppercase">Message *</label>
                        <textarea
                          required
                          rows={3}
                          placeholder="Type your message description here..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-background border border-border rounded-xl px-4 py-2 text-sm text-foreground font-mono focus:border-primary focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs font-mono rounded-xl h-10 px-5 flex items-center gap-1.5 w-fit"
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
