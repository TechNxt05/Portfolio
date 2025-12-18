"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ChatContextType = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    openWithContext: (initialMessage: string) => void;
    contextMessage: string | null;
    clearContext: () => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [contextMessage, setContextMessage] = useState<string | null>(null);

    const openWithContext = (msg: string) => {
        setContextMessage(msg);
        setIsOpen(true);
    };

    const clearContext = () => {
        setContextMessage(null);
    };

    return (
        <ChatContext.Provider value={{ isOpen, setIsOpen, openWithContext, contextMessage, clearContext }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
}
