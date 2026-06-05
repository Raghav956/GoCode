import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";

import LoginPage from "./pages/LoginPage";

import Problems from "./pages/Problems";
import ProblemDetails from "./pages/ProblemDetails";
import CompilerPage from "./pages/CompilerPage";

import Leaderboard from "./pages/Leaderboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/problems"
          element={<Problems />}
        />
      

        <Route
          path="/compiler"
          element={<CompilerPage />}
        />

        <Route
  path="/problems/:id"
  element={<CompilerPage />}
/>

      

        <Route
  path="/leaderboard"
  element={
    <ProtectedRoute>
      <Leaderboard />
    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>
    <ToastContainer position="top-right" />
    </>
  );
}

export default App;