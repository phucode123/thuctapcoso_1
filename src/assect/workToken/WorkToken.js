// import React, { useEffect, useState } from 'react';
import axios from "axios";


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
    // console.log(token);
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


// khi mua hàng thì post
const postData = async (data) => {
    try {
        console.log(data);
        const response =
            await axios.post('https://ttcs-duongxuannhan2002s-projects.vercel.app/api/v1/post-order', data);
        console.log(response); // In ra dữ liệu phản hồi từ server nếu thành công
        alert('mua ok r');
        // setProduct(response.data.data[0])
    } catch (error) {
        alert('k ổn r');
        console.error(error);
    }
}

//mua hàng xong thì xoá sản phẩm đã mua(chỉ áp dụng với giỏ hàng)
const removeDataInCart = async (Data) => {
    try {
        const response =
            await axios.delete('https://ttcs-duongxuannhan2002s-projects.vercel.app/api/v1/delete-product-in-cart', { data: Data });
         console.log(response.data); // In ra dữ liệu phản hồi từ server nếu thành công
        // alert('xoá ok r');
        window.location.reload();
        // setProduct(response.data.data[0])
    } catch (error) {
        alert('k xoá đc r');
        console.error(error);
    }
}
export {
    cityDistricts,
    setToken,
    getToken,
    postData,//thêm hoá đơn 
    removeDataInCart, //xoá sản phẩm trong giỏ

}