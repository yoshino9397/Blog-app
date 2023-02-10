import express from "express";
import authRoute from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

// app.get("/test",(req, res) => {
//   res.json("OKAY")
// })

app.use("/api/auth", authRoute);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
  console.log("Connected to backend!");
});
