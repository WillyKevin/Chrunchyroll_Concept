import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from './presentation/home/home_page';
import PageError from './shared/compontents/pageError';
import { LoginPage } from './presentation/login/login_page';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<PageError />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}