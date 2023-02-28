import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path={`/players/:id`} element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
