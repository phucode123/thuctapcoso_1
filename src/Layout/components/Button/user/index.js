import styles from './user.module.scss'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useState, useContext }  from 'react';
import { logout, user, question, signin, login } from '../../../../assect/image/icon';
import { mainContext } from '../../../DefaultLayout';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function User_item({ user_input }) {
    const loginn =
    {
        id: 1,
        href: '/signin'
    }
    const signup =
    {
        id: 2,
        href: '/signup'
    }

    const [open, setOpen] = useState(false)

    const test_user = user_input ? user_input : ''


    return (
        <div>
            {/* <img height={"100%"} src={test_avt} ></img> */}
            {!test_user ? <>
                <i className={cx('btn_icon')} onClick={() => { setOpen(!open) }} >
                    {<FontAwesomeIcon icon={faUser} />}
                </i>
                <div className={cx("dropdown-menu", open ? 'active' : 'none', "border border-light shadow-sm")} >
                    <h3 >Bạn chưa đăng nhập</h3>
                    <ul className={cx("list_selector")}>
                        <Link to="/signin"><DropdownItem img={login.logo} text={"Đăng nhập"} /></Link>
                        <Link to="/signup"><DropdownItem img={signin.logo} text={"Đăng ký"} /></Link>
                    </ul>
                </div>

            </>
                :
                <div>
                    <i className={cx("frame_avt")} onClick={() => { setOpen(!open) }} >
                        <img className={cx("test")} src={test_user.avatar}></img>
                    </i>

                    <div className={cx("dropdown-menu", open ? 'active' : 'none')} >

                        <h3 >{test_user.lastName}</h3>
                        <ul className={cx("list_selector")}>
                            <DropdownItem img={user.logo} text={"My profile"} />
                            <DropdownItem img={question.logo} text={"Any question?"} />
                            <DropdownItem img={logout.logo} text={"Log out"} />
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}



function DropdownItem(props) {

    return (
        <li className={cx("dropdownItem")}>
            <img src={props.img}></img>
            <a >{props.text}</a>
        </li>
    )
}



export default User_item