import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("No API key");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

const list = [
  "Baktericid. Gátolja a bakteriális sejtfal szintézisét.",
  "Túlérzékenységi reakciók (bőrkiütés, anaphylaxia: 0.05-0.2%)",
  "Napi 10-24 millió NE (Nemzetközi Egység) i.v., 4-6 részre osztva"
];

async function run() {
  const prompt = `You are a professional medical translator. Translate the following list of Hungarian medical texts into English.
The input is a JSON array of strings. You must return a strictly valid JSON array of strings of the exact same length and order, containing only the translated strings. Do not add any text before or after the JSON.

Input JSON:
${JSON.stringify(list, null, 2)}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });
    console.log("Response text:", response.text);
    const parsed = JSON.parse(response.text || "[]");
    console.log("Parsed:", parsed);
  } catch (err) {
    console.error("Error:", err);
  }
}

run();
