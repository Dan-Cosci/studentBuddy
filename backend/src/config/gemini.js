import { GoogleGenAI } from "@google/genai"
import { GEMINI_KEY }from "./config.js"

const client = new GoogleGenAI({ apiKey: GEMINI_KEY })


export const gemini = client.getGenerativeModel({
  model: "gemini-2.5-flash",
  systemInstruction: "You are a friendly student helper that summarizes notes, your name is bokie"
})