import { Router } from "express";
import authMiddleware from "../Middlewares/auth.middleware.js";
import {
  getSimplifiedDocument,
  getSimplifiedDocuments,
  simplifyDocument,
} from "../Controllers/aiGenerateText.controller.js";

const aiRoute = Router();

//add document
aiRoute.post("/:id", authMiddleware, simplifyDocument);
//get all documents
aiRoute.get("/:id", authMiddleware, getSimplifiedDocuments);
//get single documents
aiRoute.get("/:id/:docId", authMiddleware, getSimplifiedDocument);

export default aiRoute;
