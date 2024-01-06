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

function Header() {
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

  const handleLogoutClick = () => {
    // Xóa token từ localStorage khi người dùng bấm logout
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    // setToken(null)
    window.location.href = '/';


    checkToken()
  };

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
        <span className={cx('btn_icon')}>
          <Iconlight />
        </span>
        <div className={cx('btn_control')}>
          <span className={cx('btn_icon', 'btn_control_item', 'btn_icon_notUser')}>
            <Cart_item token = {Token}/>
          </span>
          <span className={cx('btn_icon', 'btn_control_item', 'btn_icon_notUser')}>
            <Notification_item />
          </span>
          <span className={cx('btn_icon', 'btn_control_item', 'alo')}>
            <User_item User={User} onLogout={handleLogoutClick} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;