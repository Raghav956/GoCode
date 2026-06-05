const express = require("express");

const router = express.Router();

const User = require("../models/User");

const Submission =
  require("../models/Submission");

router.get("/", async (req, res) => {

  try {

    const users = await User.find();

    const leaderboard = await Promise.all(

      users.map(async (user) => {

        const solvedProblems =
          await Submission.distinct(
            "problemId",
            {
              userId: user._id,
              verdict: "Accepted",
            }
          );

        return {
          userId: user._id,
          name: user.name,
          solvedProblems: solvedProblems.length,
        };
      })
    );

    leaderboard.sort(
      (a, b) =>
        b.solvedProblems -
        a.solvedProblems
    );

    res.json(leaderboard);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: "Failed to fetch leaderboard",
    });
  }
});

module.exports = router;
