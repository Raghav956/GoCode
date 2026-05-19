import Login from "../components/Login";

import Register from "../components/Register";

import MainLayout from "../layouts/MainLayout";

function LoginPage() {

  return (
    <MainLayout>

      <div className="flex items-center justify-center min-h-[90vh] px-6">

        <div className="w-full max-w-7xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-10 shadow-2xl">

          <div className="text-center mb-14">

            <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Welcome To GoCode
            </h1>

            <p className="text-gray-400 mt-4 text-lg">
              Login or create an account to start solving coding challenges.
            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-xl shadow-xl">
              <Register />
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-xl shadow-xl">
              <Login />
            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
}

export default LoginPage;