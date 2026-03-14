import { Router } from "express";
import authMiddleware from "../Middlewares/auth.middleware.js";
import { generateFlashcard } from "../Controllers/aiFlashCardGenerator.controller.js";

const aiFlashCardRoutes = Router();

//Generate The Flashcards
aiFlashCardRoutes.post(
  "/generate/:id/:docId",
  authMiddleware,
  generateFlashcard
);
//Get all Flahcards Information
aiFlashCardRoutes.get("all-cards/:id/:docId", authMiddleware);
//Get Singale Flashcard informoation
aiFlashCardRoutes.get("card/:id/:docId", authMiddleware);
//Delete Flashcard informoation
aiFlashCardRoutes.delete("card-remove/:id/:docId", authMiddleware);

export default aiFlashCardRoutes;
