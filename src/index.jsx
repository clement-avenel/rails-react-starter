import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';

import PrivateRoute from 'containers/PrivateRoute';

import HomePage from 'containers/HomePage';
import UsersPage from 'containers/UsersPage';
import LoginPage from 'containers/LoginPage';
import NotFoundPage from 'containers/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<PrivateRoute />} path="/">
          <Route element={<MainLayout />} path="/">
            <Route element={<HomePage />} index />
            <Route element={<UsersPage />} path="/users" />
          </Route>
        </Route>
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
