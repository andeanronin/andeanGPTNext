interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default ChatMessage;

export type Conversation = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
  messages: ChatMessage[];
};
