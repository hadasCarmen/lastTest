import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GetAllLanchers from "./pages/GetAllLanchers.tsx";
import { ToastContainer } from "react-toastify";
import CreateLancher from "./pages/CreateLancher.tsx";
import LaunchersId from "./pages/LaunchersId.tsx";
import Login from "./pages/Login.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetAllLanchers />} />
          <Route path="/createLancher" element={<CreateLancher />} />
          <Route path="/launchers/:id" element={<LaunchersId />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
