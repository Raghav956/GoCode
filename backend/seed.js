require("dotenv").config();
const mongoose = require("mongoose");

const Problem = require("./models/Problem");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const problems = [
  // EASY

  {
    title: "Two Sum",

    difficulty: "Easy",

    description:
      "Given two integers, return their sum.",

    inputFormat:
      "Two integers separated by space",

    outputFormat:
      "Print the sum of the two integers",

    constraints:
      "-1000 <= numbers <= 1000",

    sampleInput: "5 7",

    sampleOutput: "12",

    hiddenTestCases: [
      {
        input: "1 2",
        output: "3",
      },
      {
        input: "10 20",
        output: "30",
      },
    ],
  },

  {
    title: "Multiply Numbers",

    difficulty: "Easy",

    description:
      "Multiply two integers.",

    inputFormat:
      "Two integers",

    outputFormat:
      "Print multiplication result",

    constraints:
      "-1000 <= numbers <= 1000",

    sampleInput: "4 5",

    sampleOutput: "20",

    hiddenTestCases: [
      {
        input: "2 3",
        output: "6",
      },
      {
        input: "7 8",
        output: "56",
      },
    ],
  },

  {
    title: "Check Even Odd",

    difficulty: "Easy",

    description:
      "Check whether a number is even or odd.",

    inputFormat:
      "Single integer",

    outputFormat:
      "Print EVEN or ODD",

    constraints:
      "1 <= n <= 100000",

    sampleInput: "4",

    sampleOutput: "EVEN",

    hiddenTestCases: [
      {
        input: "7",
        output: "ODD",
      },
      {
        input: "10",
        output: "EVEN",
      },
    ],
  },

  {
    title: "Maximum Of Two Numbers",

    difficulty: "Easy",

    description:
      "Find maximum among two integers.",

    inputFormat:
      "Two integers",

    outputFormat:
      "Print maximum value",

    constraints:
      "-100000 <= n <= 100000",

    sampleInput: "5 8",

    sampleOutput: "8",

    hiddenTestCases: [
      {
        input: "1 9",
        output: "9",
      },
      {
        input: "20 15",
        output: "20",
      },
    ],
  },

  {
    title: "Factorial",

    difficulty: "Easy",

    description:
      "Find factorial of a number.",

    inputFormat:
      "Single integer",

    outputFormat:
      "Print factorial",

    constraints:
      "1 <= n <= 10",

    sampleInput: "5",

    sampleOutput: "120",

    hiddenTestCases: [
      {
        input: "3",
        output: "6",
      },
      {
        input: "6",
        output: "720",
      },
    ],
  },

  // MEDIUM

  {
    title: "Palindrome String",

    difficulty: "Medium",

    description:
      "Check if string is palindrome.",

    inputFormat:
      "Single string",

    outputFormat:
      "YES or NO",

    constraints:
      "1 <= length <= 1000",

    sampleInput: "madam",

    sampleOutput: "YES",

    hiddenTestCases: [
      {
        input: "level",
        output: "YES",
      },
      {
        input: "coding",
        output: "NO",
      },
    ],
  },

  {
    title: "Fibonacci Number",

    difficulty: "Medium",

    description:
      "Print nth Fibonacci number.",

    inputFormat:
      "Single integer",

    outputFormat:
      "Nth Fibonacci number",

    constraints:
      "1 <= n <= 40",

    sampleInput: "6",

    sampleOutput: "8",

    hiddenTestCases: [
      {
        input: "5",
        output: "5",
      },
      {
        input: "7",
        output: "13",
      },
    ],
  },

  {
    title: "Reverse Array",

    difficulty: "Medium",

    description:
      "Reverse given array.",

    inputFormat:
      "First line n, second line array",

    outputFormat:
      "Print reversed array",

    constraints:
      "1 <= n <= 1000",

    sampleInput: "5\n1 2 3 4 5",

    sampleOutput: "5 4 3 2 1",

    hiddenTestCases: [
      {
        input: "3\n1 2 3",
        output: "3 2 1",
      },
      {
        input: "4\n5 6 7 8",
        output: "8 7 6 5",
      },
    ],
  },

  {
    title: "Count Vowels",

    difficulty: "Medium",

    description:
      "Count vowels in string.",

    inputFormat:
      "Single string",

    outputFormat:
      "Number of vowels",

    constraints:
      "1 <= length <= 1000",

    sampleInput: "hello",

    sampleOutput: "2",

    hiddenTestCases: [
      {
        input: "programming",
        output: "3",
      },
      {
        input: "education",
        output: "5",
      },
    ],
  },

  {
    title: "Prime Number",

    difficulty: "Medium",

    description:
      "Check whether number is prime.",

    inputFormat:
      "Single integer",

    outputFormat:
      "YES or NO",

    constraints:
      "1 <= n <= 100000",

    sampleInput: "7",

    sampleOutput: "YES",

    hiddenTestCases: [
      {
        input: "10",
        output: "NO",
      },
      {
        input: "13",
        output: "YES",
      },
    ],
  },

  // HARD

  {
    title: "Binary Search",

    difficulty: "Hard",

    description:
      "Implement binary search.",

    inputFormat:
      "n, sorted array, target",

    outputFormat:
      "Index of target",

    constraints:
      "1 <= n <= 100000",

    sampleInput:
      "5\n1 2 3 4 5\n4",

    sampleOutput: "3",

    hiddenTestCases: [
      {
        input:
          "6\n1 3 5 7 9 11\n7",
        output: "3",
      },
      {
        input:
          "5\n2 4 6 8 10\n6",
        output: "2",
      },
    ],
  },

  {
    title: "Kadane Algorithm",

    difficulty: "Hard",

    description:
      "Find maximum subarray sum.",

    inputFormat:
      "n and array",

    outputFormat:
      "Maximum sum",

    constraints:
      "1 <= n <= 100000",

    sampleInput:
      "5\n1 2 -1 3 4",

    sampleOutput: "9",

    hiddenTestCases: [
      {
        input:
          "4\n-1 -2 -3 -4",
        output: "-1",
      },
      {
        input:
          "6\n1 2 3 -2 5 1",
        output: "10",
      },
    ],
  },

  {
    title: "Valid Parentheses",

    difficulty: "Hard",

    description:
      "Check valid parentheses.",

    inputFormat:
      "String containing brackets",

    outputFormat:
      "YES or NO",

    constraints:
      "1 <= length <= 100000",

    sampleInput: "()[]{}",

    sampleOutput: "YES",

    hiddenTestCases: [
      {
        input: "([)]",
        output: "NO",
      },
      {
        input: "{[]}",
        output: "YES",
      },
    ],
  },

  {
    title: "Merge Sorted Arrays",

    difficulty: "Hard",

    description:
      "Merge two sorted arrays.",

    inputFormat:
      "Two sorted arrays",

    outputFormat:
      "Merged sorted array",

    constraints:
      "1 <= n <= 100000",

    sampleInput:
      "3\n1 3 5\n3\n2 4 6",

    sampleOutput:
      "1 2 3 4 5 6",

    hiddenTestCases: [
      {
        input:
          "2\n1 2\n2\n3 4",
        output: "1 2 3 4",
      },
      {
        input:
          "3\n2 4 6\n3\n1 3 5",
        output: "1 2 3 4 5 6",
      },
    ],
  },

  {
    title: "Longest Word",

    difficulty: "Hard",

    description:
      "Find longest word in sentence.",

    inputFormat:
      "Sentence string",

    outputFormat:
      "Longest word",

    constraints:
      "1 <= length <= 1000",

    sampleInput:
      "I love programming",

    sampleOutput:
      "programming",

    hiddenTestCases: [
      {
        input:
          "JavaScript is awesome",
        output: "JavaScript",
      },
      {
        input:
          "Coding makes life better",
        output: "Coding",
      },
    ],
  },
];

async function seedProblems() {

  try {

    await Problem.deleteMany();

    await Problem.insertMany(
      problems
    );

    console.log(
      "Problems inserted successfully"
    );

    process.exit();

  } catch (err) {

    console.log(err);

    process.exit(1);
  }
}

seedProblems();