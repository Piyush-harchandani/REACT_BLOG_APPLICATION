import "./App.css";
import { TopBar } from "./components";
import Login from "./components/pages/login/Login";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Singlepost from "./components/singlePost/Singlepost";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/post/:postId" element={<Singlepost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
