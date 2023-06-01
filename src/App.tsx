import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './presentation/home/home_page';
import PageError from './shared/compontents/pageError';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path='*' element={<PageError />} />
      </Routes>
    </Router>
  );
}