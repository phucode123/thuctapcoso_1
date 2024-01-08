import styles from './main.module.scss'
import React, { useState, createContext, useContext } from 'react';
import classNames from 'classnames/bind';
import Home from './home';
import Product from './product'
import TrendMain from './trend';
import AdminPage from '../AdminPage';
import AdminRoutes from '../AdminPage/AdminRoutes';
import Table_product from '../AdminPage/control_product';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../../library/scrollOnTop';
import CartPage from './cartPage';
import ProfileUser from './profileUser';
import { mainContext } from '../../DefaultLayout';
import SignUp from './SignUp';
import Login from './Login';
import Show from './product/testGetPayment';
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
            <Route path='/CartPage' element={<CartPage />}> </Route>
            <Route path='/profile/*' element={<ProfileUser />}> </Route>
            <Route path='/query-payment' element={<Show />}></Route>

         </Routes>
         {
         }

      </div>

   )
}

export default Main