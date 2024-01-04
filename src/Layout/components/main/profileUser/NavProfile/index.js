import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faPen, faUser, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
export default function NavProfile({ }) {
    const [User, setUser] = useState('');
    const [Token, setToken] = useState(null);


    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = () => {
        const testToken = window.localStorage.getItem('token');
        const testUser = window.localStorage.getItem('user');
        // console.log(JSON.parse(testUser), testToken);
        setUser(JSON.parse(testUser));
        setToken(testToken)
    };
    // console.log(User);
    return (
        <>
            <div class="module-filter col-md-2">
                <div className='header_navbar_left user_page'>
                    <div className="image_user">
                        <i style={{ cursor: 'pointer' }} className="btn_icon" >
                            {/* <img className={cx("test")} src={User.avatar}></img> */}
                            {<FontAwesomeIcon className="icon_avata" icon={faFaceSmile} />}
                        </i>
                    </div>
                    <div className="detail_user">
                        <div className="name_user">
                            {User.name}
                        </div>
                        <div className="edit_span">
                            <i><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></i>
                            Sửa hồ sơ
                        </div>
                    </div>
                </div>
                <Module nameNav={'Tài khoản của tôi'} icon={faUser} >
                    <label>
                        <Link to={'/profile/profileDetail'} class="radio-label">Hồ sơ</Link>
                    </label>
                    <label>
                        <Link to={'/profile/ChangePass'} class="radio-label">Đổi mật khẩu</Link>
                    </label>

                </Module>
                <Module nameNav={'Đơn mua'} icon={faMoneyBill}>
                    <label>
                        <Link to={'/profile/billhistory'} class="radio-label">Đơn hàng đã mua</Link>
                    </label>
                </Module>
            </div>
          

        </>
    )
}
function Module({ nameNav, icon, children }) {
    const [isShow, setisShow] = useState(true)
    function handersetShow() {
        setisShow(!isShow)
    }
    return (<div className='module-body'>
        <h3 className='button title_button userpage' onClick={handersetShow}>
            <span className="icon"><FontAwesomeIcon icon={icon}></FontAwesomeIcon></span>
            <span className="name">{nameNav}</span>
        </h3>
        <div className='container_list'>
            <ul className={`List ${isShow ? 'true' : ''}`}>
                {children}
            </ul>
        </div>
    </div>)
}