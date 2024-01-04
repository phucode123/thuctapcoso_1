import React, { useState, useContext, useEffect } from 'react';
// import styles from './cart.module.scss'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cart.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import classNames from 'classnames/bind';


function Cart_item({ token }) {
    const [CartItems, setCartItem] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('token: ', token);
                const response = await axios.get(`https://ttcs-duongxuannhan2002s-projects.vercel.app/api/v1/get-cart?token=${token}`);
                // console.log(response.data.data);
                setCartItem(response.data.data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [open]);

    // console.log(open);
    return (
        <div>
            <i style={{ cursor: 'pointer' }} className='btn_icon' onClick={() => { setOpen(!open) }} >
                {<FontAwesomeIcon icon={faCartShopping} />}
            </i>
            <div className={`dropdown-cart border ${open ? 'active' : 'none'} `}>
                <DropdownItem items={CartItems} handfunction={setCartItem} />
            </div>
        </div>
    )
}

function DropdownItem({ items, handfunction }) {

    // console.log(items.length)
    return (
        <div className="dropdownCart">
            <h3 className='header_container'>Giỏ hàng của pạn</h3>
            <div className='container_product_cart'>

                {
                    items.length > 0 ?
                        items.map((item) => {
                            return (<div className='product_item_cart' >
                                <div className='product_item_left'>
                                    <div className='form_image'>
                                        <img className='product_image' src={item.image} alt='Product Image' />
                                    </div>
                                </div>
                                <div className='product_item_right'>
                                    <div className='product_item_title'>
                                        <h4 className='name_product'>{item.name}</h4>
                                    </div>
                                    <div className='product_item_price'>
                                        <h5 className='price_item'>{item.price}</h5>
                                    </div>
                                </div>
                            </div>)
                        })
                        :
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
