require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const aiRoutes = require("./routes/ai");
const authRoutes = require("./routes/auth");

const problemRoutes = require(
  "./routes/problems"
);
const submissionRoutes = require(
  "./routes/submissions"
);
const leaderboardRoutes =
  require("./routes/leaderboard");
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/", authRoutes);

app.get("/", (req, res) => {
  res.json({
    online: "server running",
  });
});


app.use("/problems", problemRoutes);
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