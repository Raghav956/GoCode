import { useNavigate } from "react-router-dom";

function BackButton() {

  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition text-white font-medium mb-8"
    >

      ← Back

    </button>
  );
}

export default BackButton;