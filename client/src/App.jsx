import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/Index.jsx";
import Completion from "./pages/CompletionPage.jsx";
import Payment from "./pages/PaymentPage.jsx";

function App() {
  return (
    <Routes>
      {/* <Route path="/Shuffle/" element={<IndexPage />} /> */}
      <Route path="/" element={<IndexPage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/completion" element={<Completion />} />
    </Routes>
  );
}

export default App;
