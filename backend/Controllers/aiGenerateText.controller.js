import Document from "../models/document.model.js";
import AICaller from "../utils/AICalling.js";

export const simplifyDocument = async (req, res, next) => {
  try {
    const { documentText } = req.body;
    const userId = req.user._id;

    //Simplifing using AI
    const prompt = `Simplify the following text and keep all important information. Respond ONLY in JSON with:
                        {
                            "title": "..."1,
                            "docContent": "..."
                        }

                        Text: ${documentText}`;
    const { title, docContent } = await AICaller(prompt);
    const document = await Document.create({
      title,
      simplifiedContent: docContent,
      userId,
    });

    res.status(200).json({
      success: true,
      data: document,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
    next(error);
  }
};

export const getSimplifiedDocuments = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const documents = await Document.find({ userId });
    //documents.filter((doc) => doc.userId.id === userId)
    res.status(200).json({ sucess: true, data: documents });
  } catch (error) {
    res.status(401).json({ success: false, error: error.message });
    next(error);
  }
};

export const getSimplifiedDocument = async (req, res, next) => {
  try {
    const { id, docId } = req.params;
    const document = await Document.findOne({ _id: docId, userId: id }).lean();
    res.status(200).json({ sucess: true, data: document });
  } catch (error) {
    res.status(401).json({ sucess: false, error: error.message });
    next(error);
  }
};

export const removeDocument = (req, res, next) => {};
