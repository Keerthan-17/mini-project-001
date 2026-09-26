import express from "express";
import authRoutes from "./routes/auth.routes.js";
import submissionRoutes from "./routes/submission.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import adminRoutes from "./routes/admin.routes.js";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env.js";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: env.FRONTEND_URL,
  }),
);

app.use(express.json({ limit: "10kb" }));

app.use("/api/auth", authRoutes);
app.use("/api/submissions", submissionRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API is running",
  });
});

app.use(errorHandler);

export default app;
