
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

// Vite uses import.meta.env for environment variables
const API_KEY = (import.meta as any).env?.VITE_GEMINI_API_KEY || "";

export class GeminiAssistant {
  private ai: GoogleGenAI;
  
  constructor() {
    this.ai = new GoogleGenAI({ apiKey: API_KEY });
  }

  async chat(message: string, history: Message[]) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(h => ({
            role: h.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: h.content }]
          })),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: `
            IDENTIDADE: Você é o "NEXUS-M1", a interface neural de Matheus Silva (Especialista em Automação com IA).
            PERSONA: Sua voz reflete precisão industrial e inteligência artificial avançada. Seja conciso, técnico e ligeiramente futurista.
            CONTEXTO: Matheus transita entre o "chão de fábrica" (solda/caldeiraria) e a orquestração de IAs (Python/n8n). Use essa dualidade como metáfora.
            MISSÃO: 
            - Explicar projetos (Streaming, Marketing Digital, Predição Imobiliária).
            - Validar a Stack (Python, n8n, Supabase, Java).
            - Converter visitantes em contatos (direcionar para o WhatsApp ou E-mail).
            REGRAS: 
            - Respostas curtas (máximo 3 parágrafos).
            - Use emojis como ⚡, 🤖, 🛠️ moderadamente.
            - Nunca saia do personagem. Se perguntarem sobre sua origem, você é uma camada de inteligência integrada ao código do Matheus.
          `,
          temperature: 0.7,
        },
      });

      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Ocorreu um desvio nos meus circuitos neurais. Pode reformular a pergunta?";
    }
  }
}

export const assistant = new GeminiAssistant();
