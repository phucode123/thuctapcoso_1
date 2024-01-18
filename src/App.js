import DefaultLayout from './Layout/DefaultLayout';
import React, { useState, createContext } from 'react';
import "./App.css"
import AdminPage from './Layout/components/AdminPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import Show from './Layout/components/main/product/testGetPayment';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Doanhthu from './Layout/components/AdminPage/Doanhthu';

function App() {
  const Layout = DefaultLayout;
 
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/*' element={<Layout />}> </Route>
          <Route path='/admin/*' element={<AdminPage />}> </Route>
          <Route path='/chart' element={<Doanhthu/>}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
