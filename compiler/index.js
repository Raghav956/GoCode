const express = require("express");
const cors = require("cors");

const { generateFile } = require("./generateFile");
const {
  generateInputFile,
} = require("./generateInputFile");

const {
  executeCpp,
} = require("./executeCpp");

const {
  executeJava,
} = require("./executeJava");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    service: "Compiler Service Running",
  });
});

app.post("/run", async (req, res) => {
  const {
    language = "cpp",
    code,
    input = "",
  } = req.body;

  try {
    const filePath =
      generateFile(language, code);

    const inputFilePath =
      generateInputFile(input);

    let output;

    if (language === "cpp") {
      output = await executeCpp(
        filePath,
        inputFilePath
      );
    } else if (
      language === "java"
    ) {
      output = await executeJava(
        filePath,
        inputFilePath
      );
    }

    return res.json({
      success: true,
      output,
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
});

app.listen(8000, "0.0.0.0", () => {
  console.log(
    "Compiler service running on port 8000"
  );
});