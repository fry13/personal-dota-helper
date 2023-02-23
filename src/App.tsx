import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      {/* <Route path={`/player?id=${id}`} element={<ProfilePage id=id />} /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
