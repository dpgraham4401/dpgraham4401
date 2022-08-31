import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './features/Home';
import TopNav from './components/TopNav';

function App() {
  return (
    <>
      <main className="bg-dark flex-fill py-1">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<p>hello</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
