
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async generateEditorialSnippet(topic: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Write a sophisticated, poetic, 2-sentence editorial snippet for a luxury brand about: ${topic}. Keep it very brief and highly artistic. No hashtags.`,
        config: {
          temperature: 0.8,
          systemInstruction: "You are a senior editor for Vogue and a luxury branding expert. Your tone is calm, sophisticated, and slightly aloof.",
        },
      });
      return response.text || "Elegance is the only beauty that never fades.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "The intersection of art and ritual, designed for the discerning soul.";
    }
  }

  async chatWithConcierge(message: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
          systemInstruction: "You are the ÆTHERIA Personal Concierge. You provide expert advice on luxury skincare, fashion, and mindful living. Your tone is warm, professional, and refined. Use elegant language.",
        },
      });
      return response.text || "I am at your service. How may I assist your journey today?";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "My apologies, I am momentarily unavailable to assist. Please try again soon.";
    }
  }
}

export const gemini = new GeminiService();
