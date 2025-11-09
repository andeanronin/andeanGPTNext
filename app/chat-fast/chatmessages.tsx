import Markdown from "react-markdown";
import ChatMessage from "@/types";

// Define the props for the ChatMessages component
interface ChatMessagesProps {
  messages: ChatMessage[];
  className?: string; // 👈 optional prop for external styles
}

function ChatMessages({ messages, className }: ChatMessagesProps) {
  return (
    <div
      className={`h-screen w-full overflow-y-auto border-none px-10 mb-3 ${className}`}
    >
      {messages.map((message, i) => (
        <div
          key={i}
          className={`my-2.5 flex ${
            message.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[70%] p-3 rounded-xl ${
              message.role === "user" ? "bg-white" : "bg-transparent"
            } text-black`}
          >
            {<Markdown>{message.content}</Markdown>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatMessages;
