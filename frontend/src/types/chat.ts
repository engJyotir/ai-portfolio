export interface Message {
    role: "user" | "assistant";
    content: string;
    sources?: string[];
  }
  
  export interface ChatResponse {
    answer: string;
    sources: string[];
  }