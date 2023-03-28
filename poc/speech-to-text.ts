import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
import * as fs from "node:fs";

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
});
const openai = new OpenAIApi(configuration);
const completion = await openai.createTranscription(
  fs.createReadStream("./poc/speech.m4a") as any,
  "whisper-1",
);

console.log(completion);
