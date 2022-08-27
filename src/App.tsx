import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faB,
  faCheckSquare,
  faBars,
  faCoffee,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import Footer from './components/Footer';

library.add(faB, faCheckSquare, faX, faCoffee, faBars);

function App() {
  return (
    <>
      <p>hello</p>
      <Footer />
    </>
  );
}

export default App;
