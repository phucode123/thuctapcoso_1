import styles from './user.module.scss'
import { faUser, faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import React, { useState, useContext } from 'react';
import { logout, user, question, signin, login } from '../../../../assect/image/icon';
import { mainContext } from '../../../DefaultLayout';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function User_item({ User, onLogout }) {

    const [open, setOpen] = useState(false)



    function HanderLogout() {
        onLogout()
    }

    return (
        <div>
            {/* <img height={"100%"} src={test_avt} ></img> */}
            {!User ? <>
                <i style={{ cursor: 'pointer' }} className={cx('btn_icon')} onClick={() => { setOpen(!open) }} >
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
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flexWrap: 'nowrap',
                        width: 'max-content',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        padding: '0 10px'
                    }}
                        onClick={() => { setOpen(!open) }}>
                        <i style={{ cursor: 'pointer' }} className={cx("btn_icon")}  >
                            {/* <img className={cx("test")} src={User.avatar}></img> */}
                            {<FontAwesomeIcon icon={faFaceSmile} />}

                        </i>
                        <p style={{ margin: '0 0 0 4px', fontSize: '14px' }}>{User.name}</p>
                    </div>


                    <div className={cx("dropdown-menu", open ? 'active' : 'none')} >

                        <h3 >{User.name}</h3>
                        <ul className={cx("list_selector")}>
                            <Link to={'/profile/*'}><DropdownItem img={user.logo} text={"Tài khoản"} /></Link>
                            <DropdownItem img={question.logo} text={"Có câu hỏi?"} />
                            <DropdownItem function={HanderLogout} img={logout.logo} text={"Đăng xuất"} />
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