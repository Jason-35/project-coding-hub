import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProjectBoard from "./pages/ProjectBoard";
import Sidebar from "./components/Sidebar";
import PrivateRoute from "./features/auth/component/PrivateRoute";
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="signup" element={<RegisterPage/>}></Route>
        <Route path="login" element={<LoginPage/>}></Route>
        <Route path="u" element={<PrivateRoute/>}>
            <Route path="dashboard" element={<DashboardPage/>}></Route>
            <Route path="projectBoard" element={<ProjectBoard/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
