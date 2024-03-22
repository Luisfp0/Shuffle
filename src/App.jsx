import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/Shuffle" element={<IndexPage />} />
    </Routes>
  );
}

export default App;
