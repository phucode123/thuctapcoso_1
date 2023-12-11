import React, { useState, useContext } from 'react';
// import styles from './cart.module.scss'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cart.css'
import { Link } from 'react-router-dom';
// import classNames from 'classnames/bind';


function Cart_item({ cartItems }) {
    const [CartItems, setCartItem] = useState(cartItems)
    const [open, setOpen] = useState(false)
    console.log(open);
    return (
        <div>
            <i style={{ cursor: 'pointer' }} className='btn_icon' onClick={() => { setOpen(!open) }} >
                {<FontAwesomeIcon icon={faCartShopping} />}
            </i>
            <div className={`dropdown-cart border ${open ? 'active' : 'none'} `}>
                <DropdownItem item={CartItems} handfunction={setCartItem} />
            </div>
        </div>
    )
}

function DropdownItem({ item, handfunction }) {

    console.log(item)
    return (
        <div className="dropdownCart">
            <h3 className='header_container'>Giỏ hàng của pạn</h3>
            <div className='container_product_cart'>

                {
                    item ?
                        <div className='product_item_cart' >
                            <div className='product_item_left'>
                                <div className='form_image'>
                                    <img className='product_image' src='https://anhdep123.com/wp-content/uploads/2021/01/anh-giay-adidas.jpg' alt='Product Image' />
                                </div>
                            </div>
                            <div className='product_item_right'>
                                <div className='product_item_title'>
                                    <h4 className='name_product'>Giày thể thao cao cao</h4>
                                </div>
                                <div className='product_item_price'>
                                    <h5 className='price_item'>100.000đ</h5>
                                </div>
                            </div>
                        </div> :
                        <div className='form_image'>
                            <img className='product_image' src='https://logos.flamingtext.com/Word-Logos/nothing-design-sketch-name.png' alt='Nothinggggggg :((' />
                        </div>
                }



            </div>
            <div className='footer_cart'>
                <Link to={'/CartPage'} className='Link'><span>Xem chi tiết</span></Link>
            </div>
        </div>
    )
}
export default Cart_item;
