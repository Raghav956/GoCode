const axios = require("axios");
const express = require("express");

const Problem = require("../models/Problem");
const Submission = require("../models/Submission");

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    userId,
    problemId,
    language,
    code,
  } = req.body;

  try {

    const problem = await Problem.findById(problemId);

    if (!problem) {
      return res.status(404).json({
        error: "Problem not found",
      });
    }

    const testCases =
      problem.hiddenTestCases;

    let verdict = "Accepted";

    let passedTestCases = 0;

    const totalTestCases =
      testCases.length;

    const startTime = Date.now();

    for (
      let i = 0;
      i < testCases.length;
      i++
    ) {

      const testCase = testCases[i];

      let response;

      try {

        response = await axios.post(
          "http://localhost:8000/run",
          {
            language,
            code,
            input: testCase.input,
          },
          {
            timeout: 5000,
          }
        );

      } catch (err) {

        verdict = "Time Limit Exceeded";

        break;
      }

      if (response.data.error) {

        const errorMessage =
          response.data.error;

        if (
          errorMessage.includes("Compilation")
        ) {

          verdict =
            "Compilation Error";

        } else {

          verdict = "Runtime Error";
        }

        break;
      }

      const output =
        response.data.output
          .replace(/\r/g, "")
          .trim();

      const expectedOutput =
        testCase.output
          .replace(/\r/g, "")
          .trim();

      if (output !== expectedOutput) {

        verdict = "Wrong Answer";

        break;
      }

      passedTestCases++;
    }

    const executionTime =
      Date.now() - startTime;

    const submission =
      new Submission({
        userId,
        problemId,
        language,
        code,
        verdict,
        executionTime,
        passedTestCases,
        totalTestCases,
      });

    await submission.save();

    return res.json({
      success: true,
      verdict,
      executionTime,
      passedTestCases,
      totalTestCases,
    });

  } catch (err) {

    return res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;