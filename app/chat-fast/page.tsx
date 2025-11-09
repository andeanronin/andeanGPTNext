"use client";
import { Bitcount_Prop_Single_Ink } from "next/font/google";
import { clsx } from "clsx";
import { useState, KeyboardEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import ChatMessages from "@/app/chat-fast/chatmessages";
import { useSendMessage } from "@/hooks/useSendMessage";
import { ModelsMenu, ModelType } from "@/app/chat-fast/modelsMenu";

const bitcountPropSingleInk = Bitcount_Prop_Single_Ink({
  weight: "400",
  subsets: ["latin"],
});

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, isStreaming } = useSendMessage();
  const [selectedModel, setSelectedModel] = useState<ModelType>("gpt-4.1"); // Default model

  console.log(messages);

  const handleSend = (text: string) => {
    sendMessage(text, selectedModel);
    setInput("");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const text = input.trim();
      if (text) handleSend(text);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-emerald-200">
      <div className="h-screen py-4 min-w-1/2 display flex flex-col items-center ">
        <div className="flex flex-row justify-between w-full px-10">
          <h1
            className={`text-3xl font-extralight text-black ${bitcountPropSingleInk.className}`}
          >
            chat - fast api
          </h1>
          <ModelsMenu
            selectedModel={selectedModel}
            onModelChange={setSelectedModel}
          />
        </div>

        <ChatMessages messages={messages} className="px-30" />

        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          rows={3}
          className={clsx(
            "w-4/5 h-[100px] px-4 py-4 rounded-3xl",
            "bg-white border border-gray-300 shadow-lg",
            "focus:outline-none focus:ring-2 focus:ring-blue-500",
            "transition-all duration-300",
            "hover:shadow-xl",
            "disabled:opacity-50"
          )}
          placeholder="Whats poppin?"
          disabled={isStreaming}
        />
      </div>
    </div>
  );
}
