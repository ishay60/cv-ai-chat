"use client";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type ChatMessageProps = {
  message: Message;
  isLoading?: boolean;
};

export function ChatMessage({ message, isLoading = false }: ChatMessageProps) {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={cn("flex items-start gap-3", {
        "justify-end": !isAssistant,
      })}
    >
      {isAssistant && (
        <Avatar className="h-9 w-9 border border-primary/50">
          <AvatarFallback className="bg-primary/20 text-primary">
            <Bot className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "max-w-md rounded-lg px-4 py-3 text-sm shadow",
          {
            "bg-card order-1": !isAssistant,
            "bg-primary/10": isAssistant,
          }
        )}
      >
        {isLoading ? (
           <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground" style={{animationDelay: '0s'}}></span>
            <span className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground" style={{animationDelay: '0.2s'}}></span>
            <span className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground" style={{animationDelay: '0.4s'}}></span>
          </div>
        ) : (
          <p className="whitespace-pre-wrap">{message.content}</p>
        )}
      </div>
      {!isAssistant && (
        <Avatar className="h-9 w-9 border border-accent/50">
          <AvatarFallback className="bg-accent/20 text-accent">
            <User className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
