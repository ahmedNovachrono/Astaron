import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectToDB from "./database/mongodb.js";
import errorMiddeleware from "./Middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./Middlewares/arcjet.middleware.js";
import workflowRouter from "./routes/workflow.routes.js";
import aiRoute from "./routes/aiSimplfyGenerator.routes.js";
import aiFlashCardRoutes from "./routes/aiFlashCard.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware);

//auth routing
app.use("/api/auth", authRouter);
//user routing
app.use("/api/users", userRouter);
//subscription routin
app.use("/api/subscriptions", subscriptionRouter);
//workfllow logics
app.use("/api/workflows", workflowRouter);
//AI Simplified Text Generating
app.use("/api/ai/simplify", aiRoute);
//AI FlashCards Generating
app.use("/api/ai/flashcards", aiFlashCardRoutes);

app.use(errorMiddeleware);

app.listen(PORT, () => {
  connectToDB();
  console.log(`server is running on port ${PORT}`);
});

export default app;
