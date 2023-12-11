import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.scss'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate ,NavLink, Link} from 'react-router-dom';

import {
    faArrowsRotate,
    faCaretDown,
    faCloudUpload,
    faEye,
    faHouse,
    faSignal,
    faThumbsUp,
    faFire,
    faBook,
    faLanguage,
    faPhoneFlip,
} from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';

const cx = classNames.bind(styles)

function NavBar() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const [activeKey, setActiveKey] = useState('/');


    const handleNavClick = (event, path) => {
        event.preventDefault();
        setActiveKey(path);
        // console.log(activeKey)
    };

    const navbarlist = [
        {
            id: 1,
            href: '/',
            name: 'Trang chủ',
            icon: faHouse,
            eventKey: ""
        }, {
            id: 2,
            href: '/xh',
            name: 'Xu hướng',
            icon: faFire,
            eventKey: "link-1"
        }, {
            id: 3,
            href: '/tl',
            name: 'Thể Loại',
            icon: faBook,
            eventKey: 'link-2'

        }, {
            id: 4,
            href: '/nn',
            name: 'Ngôn ngữ',
            icon: faLanguage,
            eventKey: "link-3"

        }, {
            id: 5,
            href: '/lh',
            name: 'Liên hệ',
            icon: faPhoneFlip,
            eventKey: "link-4"

        },

    ]
    return (

        <div className={cx('wrapper')}>

            <Nav fill variant="tabs" activeKey={activeKey} className={cx('wrapper_tabs')}>

                {/* <Nav fill variant="tabs" defaultActiveKey="/home"> */}
                {navbarlist.map((item, index) => (
                    <Nav.Item key={index}>
                        <Nav.Link as={Link} to= {item.href} href={item.href}  style={{ color: 'black' }}
                            onClick={(e) => {
                                // console.log(item.href);
                                handleNavClick(e, item.href);
                                handleNavigate(item.href)
                            }
                            }><FontAwesomeIcon icon={item.icon} style={{ marginRight: '5px' }} />{item.name}</Nav.Link>
                    </Nav.Item>
                ))}

            </Nav>
        </div >


    )


}

export default NavBar;

