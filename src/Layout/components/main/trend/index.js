import styles from './trend.module.scss'
import React, { useState, createContext } from 'react';
import classNames from 'classnames/bind';
import BasicSlider from '../../slider/slider';
import SliderBar from '../../sliderBarFomat';
import fakeAPI from '../../../../assect/fakeAPI';

export default function TrendMain(){
    // console.log('halloooooo')
    return(
        <div>
            {fakeAPI.sliderBar.map(value => {
               if (value.id == 'ALL') {
                // console.log("hallooo")
                  return <SliderBar key={value.id} sliderItem={value} value_limit={20}/>
               }
            }
            )}
        </div>
    )
}