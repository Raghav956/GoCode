import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const token =
    localStorage.getItem("token");

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("userId");

    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-2 border-b border-white/10 backdrop-blur-xl bg-[#020617]/80">

      {/* LOGO */}

      <Link to="/">

        <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text cursor-pointer">

          GoCode

        </h1>

      </Link>

      {/* NAV LINKS */}

      <div className="flex items-center gap-10 text-lg font-medium text-white">

        <Link
          to="/"
          className="hover:text-cyan-400 transition"
        >

          Home

        </Link>

        <Link
          to="/problems"
          className="hover:text-cyan-400 transition"
        >

          Problems

        </Link>

        <Link
          to="/compiler"
          className="hover:text-cyan-400 transition"
        >

          Compiler

        </Link>

        <Link
          to="/leaderboard"
          className="hover:text-cyan-400 transition"
        >

          Leaderboard

        </Link>

        {!token ? (

          <Link
            to="/login"
            className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold shadow-xl shadow-cyan-500/20"
          >

            Login

          </Link>

        ) : (

          <button
            onClick={handleLogout}
            className="px-6 py-2.5 rounded-2xl bg-red-500 hover:bg-red-400 transition text-white font-bold"
          >

            Logout

          </button>

        )}

      </div>

    </nav>
  );
}

export default Navbar;