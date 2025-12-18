"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Bot, Sparkles, User, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChat } from "@/context/chat-context";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import knowledgeBase from "@/data/knowledge.json";

type Message = {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
};

export function ChatInterface() {
    const { isOpen, setIsOpen, contextMessage, clearContext } = useChat(); // Refactored to useChat
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            text: "Hello! I'm Amritanshu's AI Assistant. Ask me about his projects, engineering skills, or experience.",
            sender: "bot",
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Handle initial context message (from "Ask AI" buttons)
    useEffect(() => {
        if (contextMessage && isOpen) {
            handleSend(contextMessage);
            clearContext(); // Consumed
        }
    }, [contextMessage, isOpen, clearContext]); // Added clearContext to dependencies

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async (textOverride?: string) => { // Added textOverride parameter
        const textToSend = textOverride || input; // Use override or current input
        if (!textToSend.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: textToSend, // Use textToSend
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate AI processing and keyword matching
        setTimeout(() => {
            const responseText = generateResponse(userMsg.text);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: "bot",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200); // Changed timeout duration
    };

    const generateResponse = (query: string): string => {
        const lowerQuery = query.toLowerCase();

        // 1. Check Projects (Exact Match first for context injection)
        const matchedProject = knowledgeBase.projects.find(p =>
            lowerQuery.includes(p.name.toLowerCase()) ||
            p.keywords.some(k => lowerQuery.includes(k))
        );

        if (matchedProject) {
            // Enhanced technical response based on implementation details
            if (matchedProject.details) {
                return `**${matchedProject.name}**\n\n` +
                    `**🚀 Solution:** ${matchedProject.details.solution}\n\n` +
                    `**🏗️ Architecture:** ${matchedProject.details.architecture}\n\n` +
                    `**🔢 Key Metrics:** ${matchedProject.details.metrics}`;
            }
            return matchedProject.description;
        }

        // 2. Check Skills
        if (lowerQuery.includes("skill") || lowerQuery.includes("tech") || lowerQuery.includes("stack")) {
            const skills = knowledgeBase.technical_skills;
            return `**Technical Expertise:**\n\n` +
                `**🧠 AI/ML:** ${skills.ai_ml.join(", ")}\n` +
                `**🛠️ Frameworks:** ${skills.frameworks.join(", ")}\n` +
                `**💻 Languages:** ${skills.languages.join(", ")}\n` +
                `**🌩️ Cloud/Ops:** ${skills.systems.join(", ")}`;
        }

        // 3. Check Achievements / Hackathons
        if (lowerQuery.includes("achieve") || lowerQuery.includes("hackathon") || lowerQuery.includes("award") || lowerQuery.includes("publication")) {
            return `**Key Achievements:**\n\n` + knowledgeBase.achievements.map(a => `🏆 **${a.title}**: ${a.description}`).join("\n\n");
        }

        // 4. Check Education
        if (lowerQuery.includes("education") || lowerQuery.includes("college") || lowerQuery.includes("degree") || lowerQuery.includes("study")) {
            const edu = knowledgeBase.education[0];
            return `**${edu.degree}**\n${edu.institution} (${edu.year})\n\n**Focus:** ${edu.focus.join(", ")}`;
        }

        // 5. Check Hobbies (Cricket/Chess)
        if (lowerQuery.includes("hobby") || lowerQuery.includes("hobbies") || lowerQuery.includes("interest") || lowerQuery.includes("cricket") || lowerQuery.includes("chess")) {
            return `**Hobbies & Personality:**\n\n` +
                knowledgeBase.hobbies.map(h => `**${h.name}:** ${h.details}`).join("\n\n") +
                `\n\n*${knowledgeBase.system_role.tone}*`;
        }

        // 6. Check Bio / Intro
        if (lowerQuery.includes("who are you") || lowerQuery.includes("about") || lowerQuery.includes("intro") || lowerQuery.includes("background")) {
            return `**${knowledgeBase.profile.role}**\n\n${knowledgeBase.profile.background}\n\n**Key Strengths:**\n- ${knowledgeBase.profile.strengths.join("\n- ")}`;
        }

        // 7. Check Career Goals
        if (lowerQuery.includes("goal") || lowerQuery.includes("future") || lowerQuery.includes("career")) {
            return `**Career Direction:**\n\nI am interested in ${knowledgeBase.profile.career_goals.interests.join(", ")}.\n\n**Goal:** ${knowledgeBase.profile.career_goals.long_term}`;
        }

        // 8. Check Contact
        if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("hire")) {
            return `You can reach me at ${knowledgeBase.contact.email} or connect on LinkedIn.`;
        }

        return "I can explain Amritanshu's engineering projects like Amazon RecSys, Store Ratings, or Cvision. I can also discuss his tech stack, achievements, or research. What would you like to know?";
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="mb-4 w-[350px] md:w-[400px] shadow-2xl rounded-2xl overflow-hidden border border-white/10 bg-black/80 backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="p-4 bg-primary/10 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full bg-primary/20 text-primary">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm text-foreground">Engineer Bot</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-xs text-muted-foreground">System Online</span> {/* Changed text */}
                                    </div>
                                </div>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 text-muted-foreground hover:text-foreground">
                                <X size={18} />
                            </Button>
                        </div>

                        {/* Chat Body */}
                        <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-transparent scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex items-start gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
                                >
                                    <div className={`p-2 rounded-full w-8 h-8 flex items-center justify-center shrink-0 ${msg.sender === "user" ? "bg-white/10 text-white" : "bg-primary/20 text-primary"
                                        }`}>
                                        {msg.sender === "user" ? <User size={14} /> : <Terminal size={14} />}
                                    </div>
                                    <div className={`p-3 rounded-2xl text-sm max-w-[85%] leading-relaxed whitespace-pre-line ${msg.sender === "user"
                                        ? "bg-primary text-primary-foreground rounded-br-none"
                                        : "bg-white/5 border border-white/10 text-gray-200 rounded-bl-none"
                                        }`}>
                                        {msg.sender === "bot" ? (
                                            // Simple Markdown Parser for Bold text
                                            msg.text.split("**").map((part, index) =>
                                                index % 2 === 1 ? <strong key={index} className="text-white font-bold">{part}</strong> : part
                                            )
                                        ) : (
                                            msg.text
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex items-center gap-2 text-muted-foreground text-xs ml-12">
                                    <span className="animate-bounce">●</span>
                                    <span className="animate-bounce delay-75">●</span>
                                    <span className="animate-bounce delay-150">●</span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-black/40 border-t border-white/10">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex items-center gap-2"
                            >
                                <Input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about architecture or logic..." // Changed placeholder
                                    className="bg-white/5 border-white/10 focus-visible:ring-primary/50 text-sm"
                                />
                                <Button
                                    type="submit"
                                    size="icon"
                                    disabled={!input.trim()}
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
                                >
                                    <Send size={18} />
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Orb Button */}
            {!isOpen && (
                <motion.button
                    layoutId="chat-orb"
                    onClick={() => setIsOpen(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.6)] border border-white/20 overflow-hidden"
                >
                    {/* Inner Core Pulse */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                    {/* Rotating Rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute w-full h-full border-[2px] border-white/30 rounded-full border-t-transparent border-l-transparent"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[80%] h-[80%] border-[1px] border-white/50 rounded-full border-b-transparent border-r-transparent"
                    />

                    {/* Robot Head Icon */}
                    <Bot className="text-white relative z-10 w-8 h-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

                    <span className="absolute right-full mr-6 bg-black/90 text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap backdrop-blur-md">
                        Talk to AI
                        <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-black/90 rotate-45 border-t border-r border-white/10" />
                    </span>
                </motion.button>
            )}
        </div>
    );
}
