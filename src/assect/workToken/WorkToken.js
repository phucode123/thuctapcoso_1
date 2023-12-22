// import React, { useEffect, useState } from 'react';
// import axios from "axios";


const setToken = function setAPIToken(tokenLogin) {

    const token = tokenLogin; // Token nhận từ backend sau khi đăng nhập
    if (token) {
        window.localStorage.setItem('token', token);
        console.log('thành công');
    }
    else {
        console.log('no token');
    }

}

const getToken = function getAPIToken() {
    const token = window.localStorage.getItem('token');
    console.log(token);
    return token
}

const cityDistricts = {
    hanoi: {
        'Huyện Phú Xuyên': ['Thị trấn Phú Minh', 'Xã Nam Tiến', 'Thị trấn Phú Xuyên'],
        'Quận Hà Đông': ['Phường Văn Quán', 'Xã Tấn Triều', 'Xã 6'],
        'Quận Hoàng Mike': ['Xã 7', 'Xã 8', 'Xã 9']
    },
    hcm: {
        'Quận X': ['Xã 10', 'Xã 11', 'Xã 12'],
        'Quận Y': ['Xã 13', 'Xã 14', 'Xã 15'],
        'Quận Z': ['Xã 16', 'Xã 17', 'Xã 18']
    }
    // Thêm các thành phố, huyện và danh sách xã tương ứng ở đây
};

export {
    cityDistricts,
    setToken,
    getToken
}