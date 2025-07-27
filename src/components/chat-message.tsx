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
        <Avatar className="h-10 w-10 border-2 border-primary/50">
          <AvatarFallback className="bg-primary/20 text-primary">
            <Bot className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "max-w-xl rounded-2xl px-5 py-3 text-base shadow-lg transition-all",
          {
            "bg-secondary text-secondary-foreground order-1 rounded-br-none": !isAssistant,
            "bg-primary/10 text-foreground rounded-bl-none": isAssistant,
          }
        )}
      >
        {isLoading ? (
           <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-muted-foreground/50" style={{animationDelay: '0s'}}></span>
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-muted-foreground/50" style={{animationDelay: '0.2s'}}></span>
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-muted-foreground/50" style={{animationDelay: '0.4s'}}></span>
          </div>
        ) : (
          <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
        )}
      </div>
      {!isAssistant && (
        <Avatar className="h-10 w-10 border-2 border-accent/50">
          <AvatarFallback className="bg-accent/20 text-accent-foreground">
            <User className="h-6 w-6" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
