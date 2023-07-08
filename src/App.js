import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BookDetails from './pages/BookDetails';
import Errorpage from './pages/Errorpage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Homepage />} />

        <Route path="/book/:asin" element={<BookDetails />} />

        <Route path="*" element={<Errorpage />} />

      </Routes>
    </BrowserRouter>

  );
};

export default App;