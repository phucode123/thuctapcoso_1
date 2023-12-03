import DefaultLayout from './Layout/DefaultLayout';
import React, { useState, createContext } from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import { WrapperProvider } from './Layout/library/WrapperContext';
// import { ScrollTop } from 'react-router-scroll-top';
// import { WrapperProvider } from './Layout/library/WrapperContext';
function App() {
  const Layout = DefaultLayout;
  return (
    <div>
      

        <Router>
          {/* <ScrollToTop> */}
          <Layout />

          {/* </ScrollToTop> */}



        </Router>
      

    </div>
  );
}

export default App;
