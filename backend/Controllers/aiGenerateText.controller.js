import Document from "../models/document.model.js";
import OpenAI from "openai";
import { AI_API_KEY } from "../config/env.js";

export const simplifyDocument = async (req, res) => {
  try {
    const { documentText } = req.body;
    const userId = req.user._id;

    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: AI_API_KEY,
    });

    //Simplifing using AI
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
              content: `Simplify the following text and keep all important information. Respond ONLY in JSON with:
                        {
                            "title": "..."1,
                            "docContent": "..."
                        }

                        Text: ${documentText}`,
            },
          ],
        }),
      }
    );
    const data = await response.json();
    let content = data.choices[0].message.content;
    content = content.replace(/```json|```/g, "").trim();
    const simplifiedDocument = JSON.parse(content);
    const { title, docContent } = simplifiedDocument;

    const document = await Document.create({ title, docContent, userId });

    res.status(200).json({
      success: true,
      data: document,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

export const getSimplifiedDocuments = async (req, res) => {
  try {
    const userId = req.params.id;
    const documents = await Document.find({ userId });
    //documents.filter((doc) => doc.userId.id === userId)
    res.status(200).json({ sucess: true, data: documents });
  } catch (error) {
    res.status(401).json({ success: false, error: error.message });
  }
};

export const getSimplifiedDocument = async (req, res) => {
  try {
    const { id, docId } = req.params;
    const document = await Document.findOne({ _id: docId, userId: id }).lean();
    res.status(200).json({ sucess: true, data: document });
  } catch (error) {
    res.status(401).json({ sucess: false, error: error.message });
  }
};
