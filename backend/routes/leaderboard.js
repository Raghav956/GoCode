const express = require("express");

const router = express.Router();

const User = require("../models/User");

const Submission =
  require("../models/Submission");

router.get("/", async (req, res) => {

  try {

    const users =
      await User.find();

    const leaderboard =
      await Promise.all(

        users.map(
          async (user) => {

            const solvedProblems =
              await Submission.countDocuments({

                userId: user._id,

                verdict:
                  "Accepted",
              });

           return {

  userId: user._id,

  name: user.name,

  email: user.email,

  solvedProblems,
};
          }
        )
      );

    leaderboard.sort(
      (a, b) =>
        b.solvedProblems -
        a.solvedProblems
    );

    res.json(
      leaderboard
    );

  } catch (err) {

    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;