import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/userRoute.js";
import companyRoute from "./routes/companyRoute.js";
import jobRoute from "./routes/jobRoute.js";
import applicationRoute from "./routes/applicationRoute.js";
import path from "path";

dotenv.config({});

const app = express();

connectDB();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "https://job-portal-mb94.onrender.com/login",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".jsx")) {
        res.setHeader("Content-Type", "application/javascript");
      }
    },
  })
);

const PORT = process.env.PORT || 5001;

const _dirname = path.resolve();

//apis
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
