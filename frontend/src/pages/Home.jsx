import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

function Home() {

  const navigate = useNavigate();

  return (
    <MainLayout>

      <div className="relative z-10 min-h-[90vh] flex items-center">

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 text-sm mb-8">

              ● AI Powered Coding Platform

            </div>

            <h1 className="text-7xl font-black leading-tight mb-8 text-white">

              Master Coding

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">

                With GoCode

              </span>

            </h1>

            <p className="text-gray-400 text-xl leading-9 mb-10 max-w-2xl">

              Solve coding challenges, compete globally, and improve your programming skills with AI-powered reviews.

            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-6">

              <button
                onClick={() =>
                  navigate("/problems")
                }
                className="cursor-pointer px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold shadow-lg text-lg"
              >

                Start Solving

              </button>

              <button
                onClick={() =>
                  navigate("/compiler")
                }
                className="cursor-pointer px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-white font-bold text-lg"
              >

                Open Compiler

              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="grid grid-cols-2 gap-6">

            <div
              onClick={() =>
                navigate("/compiler")
              }
              className="cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-8 hover:-translate-y-2 transition shadow-lg"
            >

              <div className="text-5xl mb-5">

                🚀

              </div>

              <h2 className="text-3xl font-bold mb-3 text-white">

                Live Compiler

              </h2>

              <p className="text-gray-400 leading-7">

                Run C++ and Java code instantly.

              </p>

            </div>

            <div
              onClick={() =>
                navigate("/problems")
              }
              className="cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-8 hover:-translate-y-2 transition shadow-lg mt-14"
            >

              <div className="text-5xl mb-5">

                🧠

              </div>

              <h2 className="text-3xl font-bold mb-3 text-white">

                AI Review

              </h2>

              <p className="text-gray-400 leading-7">

                Get AI-powered coding feedback.

              </p>

            </div>

            <div
              onClick={() =>
                navigate("/problems")
              }
              className="cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-8 hover:-translate-y-2 transition shadow-lg"
            >

              <div className="text-5xl mb-5">

                ⚔️

              </div>

              <h2 className="text-3xl font-bold mb-3 text-white">

                Challenges

              </h2>

              <p className="text-gray-400 leading-7">

                Solve curated coding problems.

              </p>

            </div>

            <div
              onClick={() =>
                navigate("/leaderboard")
              }
              className="cursor-pointer rounded-3xl border border-white/10 bg-white/5 p-8 hover:-translate-y-2 transition shadow-lg mt-14"
            >

              <div className="text-5xl mb-5">

                🏆

              </div>

              <h2 className="text-3xl font-bold mb-3 text-white">

                Leaderboard

              </h2>

              <p className="text-gray-400 leading-7">

                Compete with developers globally.

              </p>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default Home;