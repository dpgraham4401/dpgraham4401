import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <>
      <main className="bg-dark flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<p>hello</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
