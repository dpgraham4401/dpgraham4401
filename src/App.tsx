import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./features/Home";
import Article from "./features/Article";
import BlogHome from "./features/BlogHome";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="bg-dark flex-fill py-1">
          <TopNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogHome />} />
            <Route path="/blog/:id" element={<Article />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
