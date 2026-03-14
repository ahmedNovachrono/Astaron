import { AI_API_KEY } from "../config/env.js";

const AICaller = async (prompt) => {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "tngtech/deepseek-r1t2-chimera:free",
        messages: [
          {
            role: "system",
            content:
              "Respond ONLY with valid raw JSON. Do NOT use markdown, code blocks, backticks, or explanations.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    }
  );
  const data = await response.json();
  let content = data.choices[0].message.content;
  content = content.replace(/```json|```/g, "").trim();
  const simplifiedDocument = JSON.parse(content);
  return simplifiedDocument;
};

export default AICaller;
