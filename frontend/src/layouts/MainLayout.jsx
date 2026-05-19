import Navbar from "../components/Navbar";

function MainLayout({ children }) {

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden relative">

      {/* Glow Effects */}

      <div className="pointer-events-none fixed top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="pointer-events-none fixed bottom-0 right-0 w-[30rem] h-[30rem] bg-purple-500/20 blur-3xl rounded-full"></div>

      <Navbar />

      <main className="relative z-10">
        {children}
      </main>

    </div>
  );
}

export default MainLayout;