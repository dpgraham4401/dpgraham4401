import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./features/Home";
import TopNav from "./components/TopNav";
import Article from "./features/Article";
import BlogHome from "./features/BlogHome";

function App() {
  return (
    <>
      <main className="bg-dark flex-fill py-1">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:id" element={<Article />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
