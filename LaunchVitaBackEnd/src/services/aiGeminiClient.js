//start code to use gemini google Ai to genrate user resume description with the help of AI(Gemini).
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const apiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function aiGeminiClient(prompt) {
  try {
    const finalPromt =
      prompt +
      ". > This is description given by user so just write formaly and solid description as a paragraph I am using ai service in my resume builder website. Anything written before this '>' consider as a client prompt.";
    const result = await model.generateContent(finalPromt);
    return result;
  } catch (e) {
    return "Server error!";
  }
}

export default aiGeminiClient;
