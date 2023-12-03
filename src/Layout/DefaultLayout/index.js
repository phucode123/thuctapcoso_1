import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '../components/Header';
import Main from '../components/main';
import NavBar from '../components/NavBar';
import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
//chus ys


const cx = classNames.bind(styles);
const mainContext = createContext()

function DefaultLayout({ children, id }) {


    // console.log(id)
    const [background, setBackground] = useState(false);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);


    return (

        <div className={cx('wrapper')}>
            <mainContext.Provider value={{ setBackground, background }}>
                <div className={`App ${background ? 'light' : ''}`}>
                    <Header />
                    <div className={` ${background ? 'black' : ''}`}>
                        <NavBar id={id} />
                        {children}
                    </div>
                    <Main />
                </div>
            </mainContext.Provider>
        </div>



    );
}
export { mainContext }

export default DefaultLayout;
