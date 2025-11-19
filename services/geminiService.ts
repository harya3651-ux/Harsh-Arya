import { GoogleGenAI, Chat } from "@google/genai";
import { GEMINI_SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

export const getChatResponse = async (userMessage: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
        return "I'm sorry, my brain (API Key) is currently missing. Please contact the restaurant directly.";
    }

    if (!chatSession) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });
    }

    const result = await chatSession.sendMessage({ message: userMessage });
    return result.text || "I apologize, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};
