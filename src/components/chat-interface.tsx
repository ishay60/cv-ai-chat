"use client";

import { chatbotEngine } from "@/ai/flows/chatbot-engine";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { Bot, LoaderCircle, Send, User } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { ChatMessage } from "./chat-message";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function ChatInterface({ cvData }: { cvData: string }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I am an AI assistant for Ishay Rosengarten's CV. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await chatbotEngine({
        cvData,
        userQuestion: input,
      });
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.answer,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling chatbot engine:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem communicating with the assistant. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-2xl bg-card border-border rounded-2xl">
      <CardHeader className="border-b border-border">
        <CardTitle className="flex items-center gap-3 text-2xl font-bold text-foreground">
          <div className="p-2 rounded-full bg-primary/10">
            <Bot className="text-primary" />
          </div>
          Ishay's CV Assistant
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Ask me anything about Ishay Rosengarten's skills and experience.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ScrollArea className="h-[55vh] pr-4" ref={scrollAreaRef}>
          <div className="flex flex-col gap-6">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && (
              <ChatMessage
                message={{ id: 'loading', role: 'assistant', content: '...' }}
                isLoading={true}
              />
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="pt-6 border-t border-border">
        <form onSubmit={handleSubmit} className="flex w-full items-center gap-3">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., What is his experience with Shopify?"
            disabled={isLoading}
            className="flex-grow rounded-full text-base"
          />
          <Button type="submit" size="icon" disabled={isLoading} className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
            {isLoading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <Send />
            )}
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
