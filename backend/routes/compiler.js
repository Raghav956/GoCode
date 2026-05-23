const express = require("express");

const router = express.Router();

router.post("/run", async (req, res) => {
  try {
    const response = await fetch(
      "http://localhost:8000/run",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();

    res.json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;