import {
  useState,
  useEffect,
} from "react";

import Editor from "@monaco-editor/react";
alert("Compiler mounted");
function Compiler({ problemId,
  sampleInput, }) {

  

  const boilerplates = {

    cpp:
`#include <bits/stdc++.h>
using namespace std;

int main() {

    int a, b;

    cin >> a >> b;

    cout << a + b;

    return 0;
}`,

    java:
`import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();

        int b = sc.nextInt();

        System.out.println(a + b);
    }
}`,
  };

  const [language, setLanguage] =
    useState("cpp");

  const [code, setCode] =
    useState(
      boilerplates.cpp
    );

debugger;

  console.log("sampleInput =", sampleInput);
const [input, setInput] =
  useState(sampleInput || "");

  const [output, setOutput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

    const [
  submitLoading,
  setSubmitLoading,
] = useState(false);

  const [review, setReview] =
    useState("");

  const [
    reviewLoading,
    setReviewLoading,
  ] = useState(false);

  useEffect(() => {

    setCode(
      boilerplates[language]
    );

  }, [language]);
  useEffect(() => {

  if (sampleInput) {
    setInput(sampleInput);
  }

}, [sampleInput]);

  const handleRun = async () => {

    setLoading(true);

    try {

      const res = await fetch(
        `${import.meta.env.VITE_COMPILER_URL}/run`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            language,
            code,
            input,
          }),
        }
      );

      const data =
        await res.json();

      setOutput(
        data.output ||
          data.error
      );

    } catch (err) {

      setOutput(
        "Error connecting to server"
      );

    } finally {

      setLoading(false);
    }
  };

  const handleSubmit =
  async () => {

    try {

      setSubmitLoading(true);

      const userId =
        localStorage.getItem(
          "userId"
        );

      const res =
        await fetch(
          `${import.meta.env.VITE_API_URL}/submit`,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              userId,
              problemId,
              language,
              code,
            }),
          }
        );

      const data =
        await res.json();

      setOutput(
        data.verdict ||
          data.error
      );

    } catch (err) {

      setOutput(
        "Submission failed"
      );

    } finally {

      setSubmitLoading(false);

    }
    };

  const handleReview =
    async () => {

      try {

        setReviewLoading(true);

        setReview("");

        const token =
  localStorage.getItem("token");
        const res =
          await fetch(
            `${import.meta.env.VITE_API_URL}/ai/review`,
            {
              method: "POST",

              headers: {
        "Content-Type":
          "application/json",
        "x-auth-token":
          token,
      },

              body: JSON.stringify({
                language,
                code,
              }),
            }
          );

        const data =
          await res.json();

        if (res.ok) {

          setReview(
            data.review
          );

        } else {

          setReview(
            data.error ||
              "Review failed"
          );
        }

      } catch (err) {

        setReview(
          "Server error"
        );

      } finally {

        setReviewLoading(false);
      }
    };

  return (
    <div className="text-white">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">

            Online Compiler

          </h1>

          <p className="text-gray-400 mt-2">

            Write, run and submit code instantly.

          </p>

        </div>

        <div className="px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">

          ● Live Execution

        </div>

      </div>

      {/* TOOLBAR */}

      <div className="flex flex-wrap items-center gap-4 mb-6">

        <select
          value={language}
          onChange={(e) =>
            setLanguage(
              e.target.value
            )
          }
          className="px-5 py-3 rounded-2xl bg-[#0f172a] border border-white/10 text-white outline-none"
        >

          <option value="cpp">
            C++
          </option>

          <option value="java">
            Java
          </option>

        </select>

      <button
  onClick={handleRun}
  disabled={loading}
  className={`px-6 py-3 rounded-2xl transition font-bold shadow-lg
  ${
    loading
      ? "bg-cyan-300 opacity-60 cursor-not-allowed"
      : "bg-cyan-500 hover:bg-cyan-400 text-black"
  }`}
>

  {loading
    ? "Running..."
    : "Run Code"}

</button>

       <button
  onClick={handleSubmit}
  disabled={submitLoading}
  className={`px-6 py-3 rounded-2xl transition font-bold shadow-lg
  ${
    submitLoading
      ? "bg-blue-300 opacity-60 cursor-not-allowed"
      : "bg-blue-500 hover:bg-blue-400 text-white"
  }`}
>
  {submitLoading
    ? "Submitting..."
    : "Submit"}
</button>

       <button
  onClick={handleReview}
  disabled={reviewLoading}
  className={`px-6 py-3 rounded-2xl transition text-white font-bold shadow-lg
  ${
    reviewLoading
      ? "bg-purple-300 opacity-60 cursor-not-allowed"
      : "bg-purple-500 hover:bg-purple-400"
  }`}>
   {reviewLoading
    ? "Reviewing..."
    : "AI Review"}
</button>

      </div>

      {/* EDITOR */}

      <div className="rounded-3xl overflow-hidden border border-cyan-500/20 bg-[#0f172a] shadow-lg mb-8">

        {/* EDITOR HEADER */}

        <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-black/40">

          <div className="w-3 h-3 rounded-full bg-red-500"></div>

          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

          <div className="w-3 h-3 rounded-full bg-green-500"></div>

          <p className="ml-4 text-sm text-gray-400">

            main.
            {language === "cpp"
              ? "cpp"
              : "java"}

          </p>

        </div>

        {/* MONACO */}

        <Editor
  height="450px"
  language={
    language === "cpp"
      ? "cpp"
      : "java"
  }
  theme="hc-black"
  value={code}
  onChange={(value) =>
    setCode(value || "")
  }
  options={{
    fontSize: 15,

    minimap: {
      enabled: false,
    },

    automaticLayout: true,

    scrollBeyondLastLine: false,

    wordWrap: "on",

    fontFamily:
      "Fira Code, monospace",

    padding: {
      top: 20,
    },
  }}
/>

      </div>

      {/* INPUT OUTPUT */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

        {/* INPUT */}

        <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-6">

          <h2 className="text-2xl font-bold mb-4">

            Custom Input

          </h2>

          <textarea
            value={input}
            onChange={(e) =>
              setInput(
                e.target.value
              )
            }
            placeholder="Enter custom input..."
            className="w-full h-[180px] rounded-2xl bg-black/30 border border-white/10 p-4 outline-none resize-none text-white"
          />

        </div>

        {/* OUTPUT */}

        <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-6">

          <h2 className="text-2xl font-bold mb-4">

            Output

          </h2>

          <pre className="h-[180px] overflow-auto rounded-2xl bg-black/30 border border-white/10 p-4 text-green-400 whitespace-pre-wrap">

            {output ||
              "Run your code to see output..."}

          </pre>

        </div>

      </div>

      {/* AI REVIEW */}

      <div className="rounded-3xl border border-purple-500/20 bg-[#111827] p-6">

        <div className="flex items-center justify-between mb-4">

          <h2 className="text-2xl font-bold">

            AI Code Review

          </h2>

          <div className="px-3 py-1 rounded-xl bg-purple-500/10 text-purple-400 text-sm border border-purple-500/20">

            AI Powered

          </div>

        </div>

        <pre className="text-gray-200 whitespace-pre-wrap leading-8">

          {review ||
            "Your AI review will appear here..."}

        </pre>

      </div>

    </div>
  );
}

export default Compiler;