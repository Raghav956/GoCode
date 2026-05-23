require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: [
  "https://gocode.store",
  "https://www.gocode.store",
  "https://go-code-six.vercel.app",
  "http://localhost:5173",
],
    credentials: true,
  })
);
app.use(express.json());
const aiRoutes = require("./routes/ai");
const authRoutes = require("./routes/auth");

const problemRoutes = require(
  "./routes/problems"
);
const compilerRoutes = require("./routes/compiler");

const submissionRoutes = require(
  "./routes/submissions"
);
const leaderboardRoutes =
  require("./routes/leaderboard");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    online: "server running",
  });
});


app.use("/problems", problemRoutes);
app.use("/", compilerRoutes);
app.use("/submit", submissionRoutes);
app.use(
  "/leaderboard",
  leaderboardRoutes
);
app.use("/ai", aiRoutes);
app.listen(5000, () => {
  console.log(
    "Server running on port 5000"
  );
});