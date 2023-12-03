// import React, { useState, useContext } from 'react';
import styles from './cart.module.scss'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Cart_item() {
    return (
        <div>
            <i  className={cx('btn_icon')}   >
                {<FontAwesomeIcon icon={faCartShopping} />}
            </i>

        </div>


    )



}
export default Cart_item;
