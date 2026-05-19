import { Link } from "react-router-dom";

function ProblemCard({ problem }) {

  const getDifficultyColor = (
    difficulty
  ) => {

    switch (difficulty) {

      case "Easy":
        return "text-green-400";

      case "Medium":
        return "text-yellow-400";

      case "Hard":
        return "text-red-400";

      default:
        return "text-white";
    }
  };

  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 transition duration-300 shadow-xl hover:shadow-cyan-500/10">

      {/* Difficulty */}

      <div
        className={`text-sm font-bold mb-4 ${getDifficultyColor(
          problem.difficulty
        )}`}
      >

        {problem.difficulty}

      </div>

      {/* Title */}

      <h2 className="text-2xl font-bold mb-4 text-white">

        {problem.title}

      </h2>

      {/* Description */}

      <p className="text-gray-400 leading-7 mb-8">

        {problem.description}

      </p>

      {/* Solve Button */}

      <Link
        to={`/problems/${problem._id}`}
      >

        <button className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold shadow-xl shadow-cyan-500/20">

          Solve Problem

        </button>

      </Link>

    </div>
  );
}

export default ProblemCard;