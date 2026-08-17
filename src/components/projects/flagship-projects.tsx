"use client";

import { useState } from "react";
import { Shield, Github, ExternalLink, Bot, Terminal, Code, Cpu, Layers, BarChart2, Folder, Globe, X, CheckCircle2, FileText, Database, Smartphone, ChevronDown, ChevronUp, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useChat } from "@/context/chat-context";
import Link from "next/link";
import { ThreeDTiltCard } from "@/components/ui/three-d-card";
import { motion, AnimatePresence } from "framer-motion";

type Category = "All" | "Software Engg" | "AI" | "ML" | "Data Science";

interface Project {
  name: string;
  title: string;
  description: string;
  detailedDescription: string;
  keyFeatures: string[];
  techStack: string[];
  links: { github?: string; live?: string; npm?: string };
  icon: React.ReactNode;
  category: Category[];
}

export function FlagshipProjects() {
  const { openWithContext } = useChat();
  const [activeTab, setActiveTab] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showMore, setShowMore] = useState(false);

  const mainProjects: Project[] = [
    {
      name: "RAGOps",
      title: "Enterprise RAG Platform",
      description: "Admin-controlled, project-based Retrieval Augmented Generation system with multi-model orchestration.",
      detailedDescription: "RAGOps solves data isolation, hallucination control, and transparency in enterprise RAG deployments. It introduces a strict project-based architecture with admin-controlled context, multi-model orchestration (Gemini/Llama 3), and a built-in quality evaluation layer (TF-IDF cosine similarity).",
      keyFeatures: [
        "Strict project-based boundaries with Admin-Controlled Context.",
        "Live model orchestration (Primary/Fallback) between Gemini and local LLMs.",
        "Built-in Quality Evaluation Layer for Grounding and Faithfulness.",
        "Usage Analytics Dashboard (Volume, Latency, Quality, Citation engagement)."
      ],
      techStack: ["Next.js", "FastAPI", "LangChain", "PostgreSQL", "FAISS"],
      links: {
        github: "https://github.com/TechNxt05/RAGOps",
        live: "https://ragops.vercel.app/"
      },
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      category: ["AI", "Software Engg"],
    },
    {
      name: "AuditAI",
      title: "AI Reliability & Compliance Auditor",
      description: "Production-grade SaaS platform ('Datadog for LLM Agents') providing observability, evaluation, and stress-testing.",
      detailedDescription: "AuditAI is a comprehensive observability platform that captures LLM execution traces and evaluates them using a deterministic 5-point evaluation engine. It prevents silent failures (hallucinations, PII leaks, injections) by providing runtime safety, model benchmarks, and adversarial testing without making unnecessary LLM API calls.",
      keyFeatures: [
        "Deterministic 5-Point Evaluation (Hallucination, Faithfulness, Injection, Tools, Compliance).",
        "Adversarial Stress Testing & Replay (Prompt injection, fake retrieval simulations).",
        "Live Runtime Safety via Aegis-Agent interceptor.",
        "Multi-model Benchmarking (Compare GPT-4 vs Claude vs Gemini)."
      ],
      techStack: ["FastAPI", "Next.js 14", "PostgreSQL", "pgvector", "Python SDK"],
      links: {
        github: "https://github.com/TechNxt05/AuditAI",
        live: "https://audit-ai-eosin.vercel.app/"
      },
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      category: ["AI", "Software Engg"],
    },
    {
      name: "CyberGuardAI",
      title: "AI-Native Cyber Investigation OS",
      description: "Multimodal mission control platform orchestrating 7 specialized agents to investigate cybercrimes and digital fraud.",
      detailedDescription: "CyberGuardAI is built for the high-stakes world of cybercrime. It investigates, correlates, and guides users through the complex journey of recovering from fraud using an autonomous agent swarm, multimodal evidence intelligence (vision/OCR), and an interactive React Flow investigation graph engine.",
      keyFeatures: [
        "Autonomous Investigation Workflow orchestrated by a 7-agent swarm (LangGraph).",
        "Investigation Graph Engine utilizing React Flow for attack chain reconstruction.",
        "Multimodal Evidence Intelligence (OCR/Extraction from screenshots & chats).",
        "Threat Confidence Engine providing probabilistic scoring for scam likelihood."
      ],
      techStack: ["LangGraph", "FastAPI", "Gemini 1.5 Pro", "MongoDB Atlas", "Next.js 15"],
      links: {
        github: "https://github.com/TechNxt05/CyberGuard",
        live: "https://cyber-guard-liard.vercel.app/"
      },
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      category: ["AI"],
    },
    {
      name: "DataPilot AI",
      title: "Autonomous Data Science Control",
      description: "Premium, autonomous data science mission control transforming raw datasets into deep insights via a self-healing loop.",
      detailedDescription: "DataPilot AI (Neural Horizon Edition) introduces an immersive workspace for high-stakes data exploration. The Neural Core Engine translates ambiguous goals into high-fidelity JSON execution graphs, executing Python code in a safe runtime. A reflection agent automatically heals execution failures.",
      keyFeatures: [
        "Self-Healing Loop where a reflection agent fixes Python execution failures autonomously.",
        "Neural Core Engine displaying real-time agent cognitive activity states.",
        "Interactive Holo-Charts powered by React-Plotly.",
        "Autonomous Discovery Audit for one-click deep-scans of anomalies and correlations."
      ],
      techStack: ["FastAPI", "Pandas", "Scikit-Learn", "LangGraph", "Next.js 15", "Plotly"],
      links: {
        github: "https://github.com/TechNxt05/DataPilot",
        live: "https://data-pilot-one.vercel.app/"
      },
      icon: <BarChart2 className="w-5 h-5 text-emerald-400" />,
      category: ["AI", "Data Science"],
    },
    {
      name: "CallLens",
      title: "CS Conversation & STT Evaluation",
      description: "Enterprise-grade customer service call quality scoring, PII redaction, and STT benchmarking platform.",
      detailedDescription: "CallLens ingests audio/transcripts, applies a PII Redaction Pass, and utilizes a Multi-Provider LLM Judge for QA scoring. It features a RAG Analytics Chatbot to query across historical customer interactions and provides multi-engine STT benchmarking (faster-whisper vs whisper.cpp).",
      keyFeatures: [
        "PII Redaction Pass masking credit cards, phones, and SSNs in transcripts.",
        "Multi-Provider LLM Judge (Groq, Gemini, Ollama) with custom QA rubrics.",
        "RAG Call Intelligence Chatbot with semantic vector search (bge-small-en-v1.5).",
        "Multi-Engine STT Benchmarking for WER, CER, and RTF metrics."
      ],
      techStack: ["Next.js", "FastAPI", "MongoDB Atlas", "Groq/Gemini"],
      links: {
        github: "https://github.com/TechNxt05/CallLens",
        live: "https://call-lens-eta.vercel.app/"
      },
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      category: ["AI", "Software Engg"],
    },
    {
      name: "TemporalAI",
      title: "Autonomous Forecasting Platform",
      description: "End-to-end multi-agent AI system for time-series forecasting (ARIMA, Prophet, XGBoost, LSTM).",
      detailedDescription: "TemporalAI automates time-series analysis using an Agent-Based Architecture. It features specialized agents (DataAgent, FeatureAgent, ModelAgent, SelectorAgent, InsightAgent) that intelligently engineer features, route datasets to the best models, and generate natural-language business insights.",
      keyFeatures: [
        "Multi-Agent Architecture (Data, Feature, Model, Selector, and Insight Agents).",
        "Automated dynamic feature engineering (lags, rolling stats, holidays).",
        "Competitive training across ARIMA, Prophet, XGBoost, and PyTorch LSTM.",
        "Interactive charting and anomaly visualization via Recharts."
      ],
      techStack: ["FastAPI", "Next.js", "SQLAlchemy", "PyTorch", "Recharts"],
      links: {
        github: "https://github.com/TechNxt05/TemporalAI",
        live: "https://temporal-ai-six.vercel.app/"
      },
      icon: <BarChart2 className="w-5 h-5 text-emerald-400" />,
      category: ["ML", "Data Science", "AI"],
    },
    {
      name: "Aegis-Agent",
      title: "Safety Middleware for Agents",
      description: "Production-grade runtime safety and evaluation middleware firewall for LLM agents.",
      detailedDescription: "Aegis-Agent is an open-source npm library acting as a security layer that wraps async agent functions. It runs pluggable risk detectors (hallucination, injection, grounding), computes weighted safety scores, and enforces policies (warn/block/rewrite) before returning responses.",
      keyFeatures: [
        "Framework-agnostic middleware (OpenAI, Claude, LangChain, custom agents).",
        "Modular detectors for hallucination, prompt injection, and grounding validation.",
        "Explainable risk engine with configurable LOW/MEDIUM/HIGH policy thresholds.",
        "Automated CI/CD safety testing and evaluation reporting."
      ],
      techStack: ["TypeScript", "npm", "Node.js"],
      links: {
        github: "https://github.com/TechNxt05/Aegis-Agent",
        npm: "https://www.npmjs.com/package/aegis-agent"
      },
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      category: ["Software Engg", "AI"],
    },
    {
      name: "Mumzworld AI",
      title: "Bilingual Shopping Assistant",
      description: "Production-grade AI copilot combining a Product Comparison Engine and Shopping Assistant in English & Arabic.",
      detailedDescription: "Built for e-commerce, Mumzworld AI tackles complex high-consideration purchases. It features a Compare AI that normalizes messy specs into structured data and a Shopping Assistant handling text, voice, and image inputs. Evaluated for strict schema validity and zero hallucination.",
      keyFeatures: [
        "Spec Normalization converting messy data into standardized comparison dimensions.",
        "Tradeoffs Engine explicitly listing pros, cons, and compromises with citations.",
        "Native Bilingual Support (English/Arabic) driven by Gemini 1.5 Pro.",
        "Strict uncertainty handling (refuses to hallucinate missing specs)."
      ],
      techStack: ["Next.js 15", "FastAPI", "Gemini 1.5 Pro", "Pydantic"],
      links: {
        github: "https://github.com/TechNxt05/MumzWorldAI",
        live: "https://mumz-world-ai.vercel.app/"
      },
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      category: ["AI"],
    },
    {
      name: "LeadFlow",
      title: "Enterprise CRM MVP",
      description: "Production-grade, single-screen CRM MVP focusing on zero-latency UX and scalable backend architecture.",
      detailedDescription: "LeadFlow is an incredibly sleek CRM implementation highlighting clean full-stack architecture. It features optimistic UI updates via TanStack Query, a chronological timeline dialog for tracking discussions, and strict Prisma ORM database modeling.",
      keyFeatures: [
        "Optimistic UI updates via TanStack Query for zero-latency interactions.",
        "Chronological timeline dialog for tracking lead discussions and follow-ups.",
        "Debounced, indexed database searching.",
        "Production-ready Docker and seed data workflows."
      ],
      techStack: ["Next.js 15", "Prisma", "PostgreSQL", "TanStack Query", "Docker"],
      links: {
        github: "https://github.com/TechNxt05/Lead-Flow",
        live: "https://lead-flow1.vercel.app/"
      },
      icon: <Folder className="w-5 h-5 text-emerald-400" />,
      category: ["Software Engg"],
    },
    {
      name: "SecureBlog",
      title: "Production-Grade Blog Platform",
      description: "Full-stack blog platform built with NestJS and Next.js 15, emphasizing advanced backend design patterns.",
      detailedDescription: "SecureBlog demonstrates senior-level engineering practices with a decoupled NestJS backend and Next.js frontend. It features JWT authentication, rate limiting, structured Pino logging, and highly optimized database queries avoiding N+1 problems via Prisma.",
      keyFeatures: [
        "Decoupled Architecture: NestJS backend REST API + Next.js App Router client.",
        "Advanced Security: JWT Auth, global rate throttling, and Bcrypt hashing.",
        "Optimized Data Layer: DB-level unique constraints and paginated feed endpoints.",
        "Structured Observability: Pino JSON logging with global exception filters."
      ],
      techStack: ["NestJS", "Next.js 15", "PostgreSQL", "Prisma", "TypeScript"],
      links: {
        github: "https://github.com/TechNxt05/Secure_Blog",
        live: "https://secure-blog-ivory.vercel.app/"
      },
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      category: ["Software Engg"],
    },
    {
      name: "SplitMint",
      title: "Expense Splitting App",
      description: "Clean, professional expense-splitting platform with real-time balance calculations.",
      detailedDescription: "SplitMint manages group expenses elegantly. It offers flexible split options (equal, exact amounts, percentage) and computes the most efficient, minimal transaction settlements to resolve debts among group members.",
      keyFeatures: [
        "Flexible split mechanisms (Equal, Exact, Percentage).",
        "Minimal transaction graph algorithm for optimized debt settlement.",
        "Dashboard overview of total spending via Recharts.",
        "Secure NextAuth.js authentication flow."
      ],
      techStack: ["Next.js 14", "PostgreSQL", "Prisma", "NextAuth.js", "Tailwind CSS"],
      links: {
        github: "https://github.com/TechNxt05/SplitMint",
        live: "https://split-mint-nine.vercel.app/"
      },
      icon: <Code className="w-5 h-5 text-emerald-400" />,
      category: ["Software Engg"],
    },
    {
      name: "ScrapeAll",
      title: "Intelligent Web Scraping Platform",
      description: "All-in-one platform democratizing web extraction via multi-method scraping and LLM analysis.",
      detailedDescription: "ScrapeAll combines Static (BeautifulSoup), Playwright, and Selenium engines, dynamically orchestrating the best method to bypass dynamic JS and anti-bot measures. Extracted data is fed into an LLM analysis pipeline for entity recognition and RAG-based data chat.",
      keyFeatures: [
        "SmartOrchestrator automatically toggles between Static, Playwright, and Selenium.",
        "AI Analysis Layer for executive summaries and entity recognition.",
        "Data Chat (RAG) powered by FAISS vector indexing.",
        "Visual CSS selector targeting for precise payload extraction."
      ],
      techStack: ["FastAPI", "Next.js 14", "Playwright", "Selenium", "LangChain"],
      links: {
        github: "https://github.com/TechNxt05/ScrapeAll",
        live: "https://scrape-all.vercel.app/"
      },
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      category: ["Software Engg", "Data Science"],
    }
  ];

  const viewMoreProjects: Project[] = [
    {
      name: "Amazon RecSys",
      title: "Amazon Product Recommendation & Reviews Analysis",
      description: "End-to-end recommendation system using FAISS embeddings and Gemini API for prompt-driven search.",
      detailedDescription: "This system integrates prompt-driven recommendations, price-review tradeoff scoring, and trust analysis over the Amazon Reviews 2018 dataset (100M+ reviews). It uses FAISS for semantic retrieval rather than traditional collaborative filtering.",
      keyFeatures: [
        "Prompt-driven semantic search via FAISS vector embeddings.",
        "Hybrid scalar score combining embedding similarity, price, and review scores.",
        "Trust Analysis Layer generating heuristics for review length and vote distribution.",
        "Generative bundle creation using the Gemini API."
      ],
      techStack: ["Flask", "React.js", "FAISS", "Gemini API", "Pandas"],
      links: {
        github: "https://github.com/TechNxt05/Amazon-Recommendation-System"
      },
      icon: <ShoppingCart className="w-5 h-5 text-emerald-400" />,
      category: ["AI", "ML", "Data Science"],
    },
    {
      name: "Amazon Review EDA",
      title: "Electronics Reviews Dataset Analysis",
      description: "Exploratory data analysis and topic modeling on the Amazon Electronics 2018 dataset.",
      detailedDescription: "This analytical project explores ratings, review helpfulness, and sentiment. It extracts pros and cons using VADER, performs topic discovery with TF-IDF and Latent Semantic Analysis (LSA), and builds a semantic search demo via FAISS.",
      keyFeatures: [
        "Sentiment analysis correlating VADER polarity with ratings.",
        "Sentence-level pros and cons extraction.",
        "Topic discovery using TF-IDF and LSA.",
        "Semantic search indexing using Sentence-BERT and FAISS."
      ],
      techStack: ["Python", "Scikit-Learn", "VADER", "Sentence-BERT", "FAISS"],
      links: {
        github: "https://github.com/TechNxt05/Amazon-Review-Analysis-2018"
      },
      icon: <BarChart2 className="w-5 h-5 text-emerald-400" />,
      category: ["Data Science", "ML"],
    },
    {
      name: "Cvision",
      title: "AI Cataract Detection App",
      description: "Mobile application for rapid cataract classification using deep learning.",
      detailedDescription: "Cvision uses TensorFlow Lite models directly on-device to classify eye conditions. It incorporates a preprocessing step to validate eye presence before inference, and features an integrated Gemini API chatbot for instant ophthalmology assistance.",
      keyFeatures: [
        "On-device TensorFlow Lite classification models.",
        "Eye Detection Preprocessing gatekeeper logic.",
        "Ensemble classification (Average of multiple model outputs).",
        "Flutter-based cross-platform UI."
      ],
      techStack: ["Flutter", "TensorFlow Lite", "Gemini API"],
      links: {
        github: "https://github.com/TechNxt05/Cvision"
      },
      icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
      category: ["ML", "Software Engg"],
    },
    {
      name: "CricketerMatch",
      title: "Cricket Personality Matcher",
      description: "Interactive full-stack quiz mapping personality traits to cricket legends.",
      detailedDescription: "CricketerMatch analyzes lifestyle choices and situational preferences through 15 weighted scenarios. Built with a glowing 'Neon' aesthetic and smooth glassmorphic UI, it calculates affinity scores against 20+ real cricket star profiles.",
      keyFeatures: [
        "Smart Analysis weighted matching logic.",
        "Rich Results featuring Top 5 matches and percentage breakdowns.",
        "Glassmorphic Neon Theme design.",
        "Automated Nodemailer email integration for results."
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      links: {
        github: "https://github.com/TechNxt05/CricketerMatch",
        live: "https://cricktermatch.vercel.app/"
      },
      icon: <Code className="w-5 h-5 text-emerald-400" />,
      category: ["Software Engg"],
    },
    {
      name: "GlobbleCube ETA",
      title: "Hierarchical ETA Predictor",
      description: "Machine learning solution predicting taxi trip durations in sparse data environments.",
      detailedDescription: "Developed for the Gobblecube AI Builder Challenge, this project replaces naive gradient-boosted baselines with a smoothed hierarchical lookup model. It backs off to broader geographical zones when specific route data is sparse, outperforming standard models in CPU inference time.",
      keyFeatures: [
        "Smoothed hierarchical spatial aggregation algorithm.",
        "Deterministic, ultra-fast CPU inference scoring.",
        "Robust handling of high-sparsity zone-to-zone combinations.",
        "Extensive exploratory data analysis and baseline comparisons."
      ],
      techStack: ["Python", "Pandas", "Scikit-Learn"],
      links: {
        github: "https://github.com/TechNxt05/GlobbleCube-ETA-Submission"
      },
      icon: <Folder className="w-5 h-5 text-emerald-400" />,
      category: ["ML", "Data Science"],
    },
    {
      name: "HealthAI",
      title: "Multimodal AI Healthcare Platform",
      description: "Innovative healthcare solution leveraging LLMs, federated learning, and medical imaging.",
      detailedDescription: "HealthAI aims to revolutionize diagnostics and research. It features AI-powered text and image analysis, generates synthetic medical data while ensuring privacy via federated learning, and assists in accelerating drug discovery utilizing generative models.",
      keyFeatures: [
        "Multimodal AI integration for image and text diagnostics.",
        "Federated Learning (TensorFlow Federated) ensuring patient data privacy.",
        "Synthetic Medical Data Generation pipelines.",
        "AI-Driven diagnostic chatbot."
      ],
      techStack: ["Flask", "PyTorch", "React.js", "Hugging Face"],
      links: {
        github: "https://github.com/TechNxt05/Health_AI",
        live: "https://health-ai-nine-teal.vercel.app/"
      },
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
      category: ["AI", "ML"],
    },
    {
      name: "CineTwin",
      title: "AI Character Matching App",
      description: "Full-stack web application matching users with fictional characters using Google Gemini AI.",
      detailedDescription: "CineTwin utilizes a custom matching algorithm calculating cosine similarity between quiz response vectors and AI-mapped media preferences (movies/music). Supports multiple cinematic universes and features a comprehensive admin dashboard.",
      keyFeatures: [
        "AI-Powered Media Analysis mapping songs/movies to personality traits via Gemini.",
        "Advanced Matching Algorithm utilizing cosine similarity.",
        "Multi-Universe Support (Stranger Things, Marvel, HP, etc.).",
        "Token-authenticated Admin Dashboard for monitoring stats."
      ],
      techStack: ["Flask", "React", "MongoDB Atlas", "Gemini API"],
      links: {
        github: "https://github.com/TechNxt05/CineTwin",
        live: "https://cinetwin.vercel.app/"
      },
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      category: ["AI", "Software Engg"],
    }
  ];

  const triggerChatbotQuery = (projectName: string) => {
    openWithContext(`Tell me about your project '${projectName}' in detail. Focus on the architecture and engineering decisions.`);
  };

  const tabs: Category[] = ["All", "Software Engg", "AI", "ML", "Data Science"];
  
  const filteredMain = activeTab === "All" 
    ? mainProjects 
    : mainProjects.filter(p => p.category.includes(activeTab));
    
  const filteredMore = activeTab === "All" 
    ? viewMoreProjects 
    : viewMoreProjects.filter(p => p.category.includes(activeTab));

  const filteredProjects = showMore ? [...filteredMain, ...filteredMore] : filteredMain;

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-black overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase font-mono">
            Systems / Experiments
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Research & <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500">Engineering Projects</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowMore(false); // Reset to hide the "more" section when switching tabs
              }}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all ${
                activeTab === tab
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold shadow-sm"
                  : "bg-black text-gray-400 hover:bg-white/5 hover:text-white border border-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.name + idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ThreeDTiltCard maxTilt={2} glowColor="rgba(16,185,129,0.15)" className="w-full h-full">
                  <div 
                    className="bg-white/2 border border-white/5 hover:border-emerald-500/30 rounded-xl p-6 flex flex-col h-full transition-all shadow-2xl backdrop-blur-sm cursor-pointer group"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">
                        {project.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white leading-tight group-hover:text-emerald-400 transition-colors">{project.name}</h4>
                        <p className="text-xs font-mono text-gray-500">{project.title}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-400 font-sans mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map(tech => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 text-gray-400 border border-white/5 font-mono text-[10px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5" onClick={(e) => e.stopPropagation()}>
                      {project.links.github && (
                        <Link href={project.links.github} target="_blank" className="text-gray-500 hover:text-emerald-400 transition-colors">
                          <Github size={16} />
                        </Link>
                      )}
                      {project.links.live && (
                        <Link href={project.links.live} target="_blank" className="text-gray-500 hover:text-emerald-400 transition-colors">
                          <ExternalLink size={16} />
                        </Link>
                      )}
                      {project.links.npm && (
                        <Link href={project.links.npm} target="_blank" className="text-gray-500 hover:text-emerald-400 transition-colors">
                          <ExternalLink size={16} />
                        </Link>
                      )}
                      <Button
                        onClick={() => triggerChatbotQuery(project.name)}
                        variant="ghost"
                        size="sm"
                        className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 ml-auto text-xs"
                      >
                        <Bot size={14} className="mr-1.5" /> Ask AI
                      </Button>
                    </div>
                  </div>
                </ThreeDTiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More / View Less Toggle */}
        {filteredMore.length > 0 && (
          <div className="mt-12 flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => setShowMore(!showMore)}
              className="bg-white/5 border-white/10 text-gray-300 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all rounded-full px-6 flex items-center gap-2 font-mono text-sm"
            >
              {showMore ? (
                <>View Less <ChevronUp size={16} /></>
              ) : (
                <>View {filteredMore.length} More {activeTab !== "All" ? activeTab : ""} Projects <ChevronDown size={16} /></>
              )}
            </Button>
          </div>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                {/* Modal Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-2xl bg-black border border-emerald-500/30 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden relative flex flex-col max-h-[90vh]"
                >
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>

                  <div className="p-6 sm:p-8 overflow-y-auto">
                    <div className="flex items-center gap-4 mb-6 pr-8">
                      <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 shrink-0">
                        {selectedProject.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedProject.name}</h3>
                        <p className="text-sm font-mono text-emerald-400">{selectedProject.title}</p>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <section>
                        <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-3">Architecture & Overview</h4>
                        <p className="text-gray-300 font-sans leading-relaxed text-sm sm:text-base">
                          {selectedProject.detailedDescription}
                        </p>
                      </section>

                      <section>
                        <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-3">Key Engineering Features</h4>
                        <ul className="space-y-3">
                          {selectedProject.keyFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-300">
                              <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section>
                        <h4 className="text-sm font-mono text-gray-500 uppercase tracking-wider mb-3">Technical Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map(tech => (
                            <Badge key={tech} variant="outline" className="bg-emerald-500/5 text-emerald-400 border border-emerald-500/20 font-mono text-xs px-3 py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>

                  <div className="p-6 border-t border-white/5 bg-white/2 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4">
                      {selectedProject.links.github && (
                        <Button asChild variant="outline" size="sm" className="bg-black border-white/10 text-gray-300 hover:text-white hover:bg-white/5 font-mono text-xs">
                          <a href={selectedProject.links.github} target="_blank">
                            <Github size={14} className="mr-2" /> Source Code
                          </a>
                        </Button>
                      )}
                      {selectedProject.links.npm && (
                        <Button asChild variant="outline" size="sm" className="bg-black border-white/10 text-gray-300 hover:text-white hover:bg-white/5 font-mono text-xs">
                          <a href={selectedProject.links.npm} target="_blank">
                            <ExternalLink size={14} className="mr-2" /> NPM Package
                          </a>
                        </Button>
                      )}
                      {selectedProject.links.live && (
                        <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-mono text-xs">
                          <a href={selectedProject.links.live} target="_blank">
                            <ExternalLink size={14} className="mr-2" /> Live Deployment
                          </a>
                        </Button>
                      )}
                    </div>
                    
                    <Button
                      onClick={() => {
                        setSelectedProject(null);
                        triggerChatbotQuery(selectedProject.name);
                      }}
                      variant="ghost"
                      size="sm"
                      className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 text-xs hidden sm:flex"
                    >
                      <Bot size={14} className="mr-1.5" /> Query Assistant
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
