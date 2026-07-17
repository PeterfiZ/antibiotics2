import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;
console.log("API Key present:", !!apiKey);

if (apiKey) {
  const ai = new GoogleGenAI({ apiKey });
  ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: "Translate to English: 'orvostanhallgatók'",
  }).then(res => {
    console.log("Result:", res.text);
  }).catch(err => {
    console.error("Error:", err);
  });
}
