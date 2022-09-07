import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./features/Home";
import Article from "./features/Article";
import BlogHome from "./features/BlogHome";

function App() {
  return (
    <>
      <main className="bg-dark flex-fill py-1">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogHome />} />
            <Route path="/blog/:id" element={<Article />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
