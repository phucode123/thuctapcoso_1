import styles from './home.module.scss'
import React, { useState, createContext } from 'react';
import classNames from 'classnames/bind';
import BasicSlider from '../../slider/slider';
// import fakeAPI from '../../../../assect/fakeAPI';
import ListByAuthor from '../../sliderBarFomat/listByAuthor';
import ListByScore from '../../sliderBarFomat/listByScore';
const cx = classNames.bind(styles);
{/* <BasicSlider /> */ }

function Home() {


   return (
      <div className={cx("wrapper")}>
         <div className={cx("wrapper_banner")}>
            <div className={cx("col-6", "product_slider")}>
               <BasicSlider />
            </div>
            <div className={cx("col-4", "discouts_item")} >
               <div className={cx("row-2", "discouts_1", "discouts")}>

               </div>
               <div className={cx("row-2", "discouts_2", "discouts")}>

               </div>
            </div>
         </div>
         
            <ListByAuthor />

            <ListByScore />


         
      </div>

   )
}

export default Home