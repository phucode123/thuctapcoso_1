import styles from './home.module.scss'
import React, { useState, createContext } from 'react';
import classNames from 'classnames/bind';
import BasicSlider from '../../slider/slider';
import SliderBar from '../../sliderBarFomat';
import fakeAPI from '../../../../assect/fakeAPI';
const cx = classNames.bind(styles);
{/* <BasicSlider /> */ }

function Home() {
   // const [Background, setBackground] = useState(false);
   const sliderBar = fakeAPI.sliderBar
   // console.log(sliderBar)

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

         <div className={cx("sliderBar")}>

            {sliderBar.map(value => {
               if (value.id != 'ALL') {
                  return <SliderBar key={value.id} sliderItem={value} value_limit={4}/>
               }
            }
            )}

         </div>
      </div>

   )
}

export default Home