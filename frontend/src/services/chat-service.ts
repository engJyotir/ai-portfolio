import { api } from "./api";
import { ChatResponse } from "@/src/types/chat";

export const askPortfolioAI = async (
  question: string
): Promise<ChatResponse> => {
  const response = await api.post(
    "/api/chat",
    {
      question,
    }
  );

  return response.data;
};