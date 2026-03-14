import Document from "../models/document.model.js";
import Flashcard from "../models/flashcard.model.js";
import AICaller from "../utils/AICalling.js";

export const generateFlashcard = async (req, res, next) => {
  try {
    const reqUserId = req.user.id;
    const { id, docId } = req.params;
    if (reqUserId !== id) throw new Error("Your not the Owner");

    const { title, simplifiedContent } = await Document.findOne({
      userId: id,
      _id: docId,
    });

    const prompt = `Give Me 5 short flashcards all of them has the same title I will give you bellow and, each card should have diffrent text form the other but they all share the same topic of the content that I will also give you bellow. Respond ONLY in JSON with:
                    [
                        {
                            "cardTitle": "..."1,
                            "cardContent": "..."
                        },...
                    ]

                        Title: ${title}
                        Content: ${simplifiedContent}`;
    const generatedFlashCards = await AICaller(prompt);
    generatedFlashCards.map(async ({ cardTitle, cardContent }) => {
      await Flashcard.create({
        cardTitle,
        cardContent,
        userId: id,
        startDate: req.body.startDate,
        docId,
      });
    });

    res.status(200).json({ success: true, data: generatedFlashCards });
  } catch (error) {
    res.status(401).json({ success: false, error: error.message });
    next(error);
  }
};

export const getAllFlashcards = (req, res, next) => {};

export const getFlashcard = (req, res, next) => {};

export const deleteFlashcard = (req, res, next) => {};
