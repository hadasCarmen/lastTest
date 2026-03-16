import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GetAllLanchers from "./pages/GetAllLanchers.tsx";
import { ToastContainer } from "react-toastify";
import CreateLancher from "./pages/CreateLancher.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/GetAllLanchers" element={<GetAllLanchers />} />
          <Route path="/createLancher" element={<CreateLancher />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
