import styles from './user.module.scss'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useState, useContext }  from 'react';
import { logout, user, question, signin, login } from '../../../../assect/image/icon';
import { mainContext } from '../../../DefaultLayout';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function User_item({ User, setUser }) {

    const [open, setOpen] = useState(false)

    
    function HanderLogout(){
        setUser('')
    }

    return (
        <div>
            {/* <img height={"100%"} src={test_avt} ></img> */}
            {!User ? <>
                <i style={{cursor : 'pointer'}} className={cx('btn_icon')} onClick={() => { setOpen(!open) }} >
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
                    <i style={{cursor : 'pointer'}} className={cx("frame_avt")} onClick={() => { setOpen(!open) }} >
                        <img className={cx("test")} src={User.avatar}></img>
                    </i>

                    <div className={cx("dropdown-menu", open ? 'active' : 'none')} >

                        <h3 >{User.lastName}</h3>
                        <ul className={cx("list_selector")}>
                            <DropdownItem img={user.logo} text={"My profile"} />
                            <DropdownItem img={question.logo} text={"Any question?"} />
                            <DropdownItem function = {HanderLogout} img={logout.logo} text={"Log out"} />
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}



function DropdownItem(props) {

    return (
        <li onClick={props.function} className={cx("dropdownItem")}>
            <img src={props.img}></img>
            <a >{props.text}</a>
        </li>
    )
}



export default User_item