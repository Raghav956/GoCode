import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../layouts/MainLayout";

import BackButton from "../components/BackButton";

import LeaderboardCard from "../components/LeaderboardCard";

function Leaderboard() {

  const [users, setUsers] =
    useState([]);
    const currentUserId =
  localStorage.getItem("userId");

  useEffect(() => {

    fetch(
      `${import.meta.env.VITE_API_URL}/leaderboard`
    )
      .then((res) => res.json())
      .then((data) => {

        console.log(data);

        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <MainLayout>

      <div className="max-w-6xl mx-auto px-8 py-16">

        <BackButton />

        {/* HEADER */}

        <div className="mb-14">

          <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text mb-6">

            Global Leaderboard

          </h1>

          <p className="text-gray-400 text-xl">

            Compete with developers around the world.

          </p>

        </div>

        {/* TABLE */}

        <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-lg">

          {/* HEADER */}

          <div className="grid grid-cols-3 px-8 py-6 border-b border-white/10 bg-black/30 text-gray-400 font-semibold text-lg">

            <div>
              Rank
            </div>

            <div>
              User
            </div>

            <div>
              Problems Solved
            </div>

          </div>

          {/* USERS */}

          {users.length > 0 ? (

            users.map(
              (user, index) => (

                <LeaderboardCard
  key={index}
  user={user}
  rank={index + 1}
  currentUserId={currentUserId}
/>

              )
            )

          ) : (

            <div className="p-10 text-center text-gray-400 text-xl">

              No leaderboard data available.

            </div>

          )}

        </div>

      </div>

    </MainLayout>
  );
}

export default Leaderboard;