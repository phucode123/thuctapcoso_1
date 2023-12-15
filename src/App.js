import DefaultLayout from './Layout/DefaultLayout';
import React, { useState, createContext } from 'react';
import "./App.css"
import AdminPage from './Layout/components/AdminPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  const Layout = DefaultLayout;
 
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/*' element={<Layout />}> </Route>
          <Route path='/admin/*' element={<AdminPage />}> </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
