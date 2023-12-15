import images from '../../../assect/image/logo';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Search from './Search';
import Iconlight from '../Background/changeDarkLight';
import Cart_item from '../Button/cart';
import Notification_item from '../Button/Notification';
import User_item from '../Button/user';
import React, { useEffect, useState } from 'react';


const cx = classNames.bind(styles);
// const check_light = false;
function Header() {

    


    const user_test = {
        id : 1,
        lastName: 'Phú Thiên',
        avatar:  "https://i.pinimg.com/736x/a4/47/85/a44785a139621e14d0e2367415290e40.jpg"     

    }

    const [User, setUser] = useState('');
    // console.log(user_test)
    // const avt_test =    
    return (
        <div className={cx('wrapper')}>

            <div className={cx('container_header')}>
                <div className={'header_logo'}>

                    <a href="/" className={cx('link')}>
                        <img className={cx('img')} src={images.logo} alt="Nettruyen" />
                    </a>

                </div>

                <div className={cx('searchHeader')}>
                    <Search />

                </div>
                <span className={cx("btn_icon")}>
                    <Iconlight />
                </span>
                <div className={cx("btn_control")}>
                    <span className={cx("btn_icon", "btn_control_item", "btn_icon_notUser")}>
                        <Cart_item />
                    </span>
                    <span className={cx("btn_icon", "btn_control_item", "btn_icon_notUser")}>
                        <Notification_item />
                    </span>
                    <span className={cx("btn_icon", "btn_control_item", "alo")} >
                        {/* valueUrl = {avt_test} */}
                        <User_item  User={User} setUser = {setUser}/>

                    </span>

                </div>
            </div>






        </div>
    )

}

// function DropdownItem(props) {
//     return (
//         <li className={cx("dropdownItem")}>
//             <img src={props.img}></img>
//             <a >{props.text}</a>
//         </li>
//     )
// }


export default Header;