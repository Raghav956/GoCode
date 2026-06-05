alert ("compiler page loaded");
import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Compiler from "../components/Compiler";

import BackButton from "../components/BackButton";

function CompilerPage() {

  const { id } = useParams();

  const [problem, setProblem] =
    useState(null);

    debugger;
  useEffect(() => {
      if (!id) return;
    fetch(
      `${import.meta.env.VITE_API_URL}/problems/${id}`
    )
    
      .then((res) => res.json())
      .then((data) =>{
       

         alert(
    JSON.stringify(data)
  );

        setProblem(data)}
      )
      .catch((err) => {
        console.log(err);
      });

  }, [id]);


if (!id) {

  return (
    <MainLayout>
      <div className="p-8">
        <Compiler />
      </div>
    </MainLayout>
  );
}


  if (!problem) {

    return (
      <MainLayout>

        <div className="min-h-screen flex items-center justify-center text-white text-3xl">

          Loading...

        </div>

      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <div className="h-[calc(100vh-90px)] flex overflow-hidden">

        {/* LEFT PANEL */}

        <div className="w-1/2 overflow-y-auto border-r border-white/10 bg-[#0f172a]">

          <div className="p-8">

            <BackButton />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg">

              {/* DIFFICULTY */}

              <div className="inline-flex px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">

                {problem.difficulty}

              </div>

              {/* TITLE */}

              <h1 className="text-5xl font-black text-white mb-8">

                {problem.title}

              </h1>

              {/* STATEMENT */}

              <div className="text-gray-300 text-lg leading-9 mb-10 whitespace-pre-wrap">

                {problem.statement ||
                  problem.description}

              </div>

              {/* EXAMPLES */}

              <div className="space-y-8">

                {/* INPUT */}

                <div className="rounded-2xl border border-white/10 bg-black/30 p-6">

                  <h2 className="text-2xl font-bold text-white mb-4">

                    Sample Input

                  </h2>

                  <pre className="text-green-400 whitespace-pre-wrap">

                    {problem.sampleInput}

                  </pre>

                </div>

                {/* OUTPUT */}

                <div className="rounded-2xl border border-white/10 bg-black/30 p-6">

                  <h2 className="text-2xl font-bold text-white mb-4">

                    Sample Output

                  </h2>

                  <pre className="text-cyan-400 whitespace-pre-wrap">

                    {problem.sampleOutput}

                  </pre>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <div className="w-1/2 overflow-y-auto bg-[#020617]">

          <div className="p-8">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg">


                  <h1 className="text-red-500 text-5xl">
  PARENT SAMPLE:
  {problem.sampleInput}
</h1>


              <Compiler 
              problemId={id} 
              sampleInput={problem.sampleInput}
              />

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default CompilerPage;