import aj from "../config/arcjet.js";
import { NODE_ENV } from "../config/env.js";

const arcjetMiddleware = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });

    if (NODE_ENV !== "production") return next();

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit())
        return res.status(429).json({ erros: "Too many requests" });
      if (decision.reason.isBot())
        return res.status(403).json({ erros: "Bot is detected" });

      return res.status(403).json({ erros: "Access Is Denaid" });
    }

    next();
  } catch (error) {
    console.log("arcjet middleware error", error.message);
    next(error);
  }
};

export default arcjetMiddleware;
