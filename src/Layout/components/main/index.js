import styles from './main.module.scss'
import React, { useState, createContext, useContext } from 'react';
import classNames from 'classnames/bind';
import Home from './home';
import Product from './product'
import TrendMain from './trend';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../../library/scrollOnTop';
// import RouteSignInUp from '../../library/LoginLogOutSignin';
import { mainContext } from '../../DefaultLayout';
import SignUp from './SignUp';
import Login from './Login';
const cx = classNames.bind(styles);
{/* <BasicSlider /> */ }
function Main() {
  


   return (
      <div className={cx("wrapper")}>

         <ScrollToTop />
         
         <Routes>


            <Route index element={<Home />} />
            <Route path="/san-pham/:productId" element={<Product />} />
            <Route path='/xh' element={< TrendMain />} />
            <Route path='/signin' element={<Login />}> </Route>
            <Route path='/signup' element={<SignUp />}> </Route>


         </Routes>
         {
         }

      </div>

   )
}

export default Main