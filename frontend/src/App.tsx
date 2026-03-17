import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GetAllLanchers from "./pages/GetAllLanchers.tsx";
import { ToastContainer } from "react-toastify";
import CreateLancher from "./pages/CreateLancher.tsx";
import LaunchersId from "./pages/LaunchersId.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Protected from "./pages/Protected.tsx";
import Navbar from "./components/Navbar.tsx";
import GetCurrentUser from "./pages/GetCurrentUser.tsx";
import GetAllUsers from "./pages/GetAllUsers.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navbar />}>
          <Route element={<Protected />}>
              <Route path="/getAllLanchers" element={<GetAllLanchers />} />
              <Route path="/createLancher" element={<CreateLancher />} />
              <Route path="/launchers/:id" element={<LaunchersId />} />
              <Route path="/register" element={<Register />} />
              <Route path="/currentUser" element={<GetCurrentUser />} />
              <Route path="/getAllUsers" element={<GetAllUsers />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
