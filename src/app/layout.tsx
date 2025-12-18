import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amritanshu Yadav | AI Engineer",
  description: "AI/ML Engineer, Computer Vision Specialist, and Strategic Builder.",
};

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ChatProvider } from "@/context/chat-context";
import { RecruiterModeProvider } from "@/context/recruiter-context";
import { ChatInterface } from "@/components/chatbot/chat-interface";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen selection:bg-amber-500/30 selection:text-amber-500`}
      >
        <ChatProvider>
          <RecruiterModeProvider>
            <ScrollProgress />
            {children}
            <ChatInterface />
          </RecruiterModeProvider>
        </ChatProvider>
      </body>
    </html>
  );
}
