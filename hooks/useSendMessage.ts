// useChatMessages.ts
import { useState } from "react";
import type ChatMessage from "../types";

export function useSendMessage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);

  async function sendMessage(msg: string, model: string) {
    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setIsStreaming(true);

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: msg,
          model: model, // Pass the selected model to the API
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `Error: ${text}` },
        ]);
        setIsStreaming(false);
        return;
      }

      // Prepare to stream assistant reply
      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let assistantMsg = "";

      // Push a placeholder that we'll overwrite as we stream
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        assistantMsg += decoder.decode(value);
        // Update the last message in state
        setMessages((prev) => {
          const copy = prev.slice(0, -1);
          copy.push({ role: "assistant", content: assistantMsg });
          return copy;
        });
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `❌ Error generating a response: ${
            (error as Error).message
          }`,
        },
      ]);
    } finally {
      setIsStreaming(false);
    }
  }

  return {
    messages,
    sendMessage,
    isStreaming,
  };
}
