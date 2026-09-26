import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import DispatcherHome from "../pages/DispatcherHome";
import Results from "../pages/Results";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dispatch" element={<DispatcherHome />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}