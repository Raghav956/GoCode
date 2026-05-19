import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

   const res = await fetch(
  `${import.meta.env.VITE_API_URL}/api/auth/login`,
  {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(formData),
  }
);

      const data = await res.json();

      if (res.ok) {

        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(
          "userId",
          data.userId
        );

        navigate("/");

      } else {

        setMessage(
          data.error || "Login failed"
        );
      }

    } catch (err) {

      console.log(err);

      setMessage("Server error");
    }
  };

  return (
    <div className="text-white">

      <h2 className="text-3xl font-bold mb-6">
        Login
      </h2>

      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-5"
      >

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400 transition text-white placeholder-gray-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400 transition text-white placeholder-gray-500"
        />

        <button
          type="submit"
          className="py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold shadow-xl shadow-cyan-500/20"
        >
          Login
        </button>

      </form>

      {message && (
        <p className="mt-5 text-sm text-red-400">
          {message}
        </p>
      )}

    </div>
  );
}

export default Login;
