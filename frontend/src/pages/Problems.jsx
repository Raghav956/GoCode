import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import MainLayout from "../layouts/MainLayout";

import ProblemCard from "../components/ProblemCard";

function Problems() {

  const [problems, setProblems] =
    useState([]);

  useEffect(() => {

    fetch(`${import.meta.env.VITE_API_URL}/problems`)
      .then((res) => res.json())
      .then((data) => {
        setProblems(data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <MainLayout>
     
      <div className="max-w-7xl mx-auto px-8 py-16">
    <BackButton />
        <div className="mb-14">

          <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">

            Coding Problems

          </h1>

          <p className="text-gray-400 mt-4 text-lg">

            Solve curated coding challenges and improve your problem-solving skills.

          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {problems.map((problem) => (

            <ProblemCard
              key={problem._id}
              problem={problem}
            />

          ))}

        </div>

      </div>

    </MainLayout>
  );
}

export default Problems;