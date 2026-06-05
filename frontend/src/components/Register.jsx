import { useState } from "react";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
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

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
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

        setMessage(
          "Registration successful"
        );

      } else {

        setMessage(
          data.error ||
          "Registration failed"
        );
      }

    } catch (err) {

      setMessage("Server error");
    }
  };

  return (
    <div className="text-white">

      <h2 className="text-3xl font-bold mb-6">
        Register
      </h2>

      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-5"
      >

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400 transition text-white placeholder-gray-500"
        />

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
          Register
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

export default Register;
