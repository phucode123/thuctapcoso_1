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

const getToken =  function getAPIToken() {
    const token = window.localStorage.getItem('token');
    console.log(token);
    return token

}



export {
    setToken,
    getToken
}