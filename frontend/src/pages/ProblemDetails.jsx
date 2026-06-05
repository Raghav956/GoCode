import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";

import { useParams } from "react-router-dom";
import Compiler from "../components/Compiler";
import MainLayout from "../layouts/MainLayout";

function ProblemDetails() {

  const { id } = useParams();

  const [problem, setProblem] =
    useState(null);

  useEffect(() => {

    fetch(
      `${import.meta.env.VITE_API_URL}/problems/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProblem(data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [id]);

  if (!problem) {

    return (
      <MainLayout>

        <div className="text-white p-10">
          Loading...
        </div>

      </MainLayout>
    );
  }

  return (
  <MainLayout>
    
    <div className="h-[calc(100vh-90px)] flex overflow-hidden">
    
      {/* LEFT SIDE - PROBLEM */}

      <div className="w-1/2 overflow-y-auto border-r border-white/10 bg-white/5 backdrop-blur-xl">

        <div className="p-10">
            <BackButton />

          <p className="text-cyan-400 font-bold mb-3">

            {problem.difficulty}

          </p>

          <h1 className="text-5xl font-black mb-8 text-white">

            {problem.title}

          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-10">

            {problem.description}

          </p>

          {/* SAMPLE INPUT OUTPUT */}

          <div className="space-y-8">

            <div className="rounded-2xl bg-black/30 p-6 border border-white/10">

              <h2 className="text-2xl font-bold mb-4 text-white">

                Sample Input

              </h2>

              <pre className="text-green-400 whitespace-pre-wrap">

                {problem.sampleInput}

              </pre>

            </div>

            <div className="rounded-2xl bg-black/30 p-6 border border-white/10">

              <h2 className="text-2xl font-bold mb-4 text-white">

                Sample Output

              </h2>

              <pre className="text-cyan-400 whitespace-pre-wrap">

                {problem.sampleOutput}

              </pre>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE - COMPILER */}

      <div className="w-1/2 overflow-y-auto bg-[#020617]">

        <div className="p-8 h-full">

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 h-full">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold text-white">

                Code Editor

              </h2>

              <div className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-400 text-sm border border-cyan-500/20">

                Live Compiler

              </div>

            </div>

            <Compiler problemId={problem._id} />

          </div>

        </div>

      </div>

    </div>

  </MainLayout>
);
}

export default ProblemDetails;