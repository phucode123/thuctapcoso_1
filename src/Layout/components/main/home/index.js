import styles from './home.module.scss'
import React, { useState, createContext } from 'react';
import classNames from 'classnames/bind';
import BasicSlider from '../../slider/slider';

import ListByAuthor from '../../sliderBarFomat/listByAuthor';
import ListByScore from '../../sliderBarFomat/listByScore';
import { Carousel } from "react-bootstrap";
// import './MyCarousel.css'
const cx = classNames.bind(styles);


{/* <BasicSlider /> */ }

function Home() {


   return (
      <div className={cx("wrapper")}>
         <div className={cx("wrapper_banner")}>
            <div className={cx("col-6", "product_slider")}>
               <BasicSlider />
            </div>
         
         </div>

         <ListByAuthor />

         <ListByScore />



      </div>

   )
}

export default Home