import { GoogleGenAI } from "@google/genai"
import { GEMINI_KEY }from "../config/config.js"

const ai = async (prompt) => {
  const client = new GoogleGenAI({ apiKey: GEMINI_KEY })

  const res = await client.models.generateContent({
    model:"gemini-2.5-flash",
    contents: prompt,
    config:{
      systemInstruction:"You are a friendly student helper that summarizes notes, your name is jacob"
    }
  });

  return res;
};

export default ai;