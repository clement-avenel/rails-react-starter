import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import HomePage from 'pages/HomePage';
import UsersPage from 'pages/UsersPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<HomePage />} index />
          <Route element={<UsersPage />} path="/users" />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
