const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Problem",
    required: true
  },

  language: {
    type: String,
    enum: ["cpp", "java", "javascript", "python"],
    required: true
  },

  code: {
    type: String,
    required: true
  },

  verdict: {
    type: String,
    enum: [
      "Accepted",
      "Wrong Answer",
      "Compilation Error",
      "Runtime Error",
      "Time Limit Exceeded"
    ],
    required: true
  },

  executionTime: {
    type: Number
  },

  passedTestCases: {
    type: Number,
    default: 0
  },

  totalTestCases: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model(
  "Submission",
  submissionSchema
);