function LeaderboardCard({
  user,
  rank,
  currentUserId,
}) {

  const isCurrentUser =
    user.userId ===
    currentUserId;

  const getRankStyle = () => {

    if (rank === 1) {

      return "bg-yellow-500 text-black";
    }

    if (rank === 2) {

      return "bg-gray-300 text-black";
    }

    if (rank === 3) {

      return "bg-orange-500 text-black";
    }

    return "bg-cyan-500/20 text-cyan-400";
  };

  return (
    <div
      className={`grid grid-cols-3 items-center px-8 py-6 border-b border-white/5 transition

      ${
        isCurrentUser
          ? "bg-cyan-500/10 border-cyan-500/20 shadow-lg shadow-cyan-500/10"
          : "hover:bg-white/5"
      }`}
    >

      {/* RANK */}

      <div className="flex items-center gap-4">

        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg ${getRankStyle()}`}>

          #{rank}

        </div>

      </div>

      {/* USER */}

      <div>

        <div className="flex items-center gap-3">

          <h2 className={`text-2xl font-bold
          
          ${
            isCurrentUser
              ? "text-cyan-400"
              : "text-white"
          }`}>

            {user.name ||
              "Unknown User"}

          </h2>

          {isCurrentUser && (

            <span className="px-3 py-1 rounded-xl bg-cyan-500 text-black text-xs font-bold">

              YOU

            </span>

          )}

        </div>

        <p className="text-gray-400 text-sm">

          {user.email}

        </p>

      </div>

      {/* SCORE */}

      <div className={`text-3xl font-black
       
       ${
         isCurrentUser
           ? "text-cyan-300"
           : "text-cyan-400"
       }`}>

        {user.solvedProblems} Solved

      </div>

    </div>
  );
}

export default LeaderboardCard;