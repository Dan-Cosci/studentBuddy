import { GoogleGenAI } from "@google/genai"
import { config } from "./config.js"

const client = new GoogleGenAI({ apiKey: config.gemini.key })


export const gemini = client.getGenerativeModel({
  model: config.gemini.model,
  systemInstruction: config.gemini.systemInstruction
})