import React, { useEffect, useState } from 'react';
import MyComponent from "../../../library/checkSuccess";
import { postData } from '../../../../assect/workToken/WorkToken';
import { useLocation } from 'react-router-dom';


const Show = () => {
    const location = useLocation();
    const [exampleValue, setExampleValue] = useState()
    const [isShow, setIsshow] = useState(true)
    // const [link, setLink] = useState('')
    useEffect(() => {
        // Lấy query parameters từ URL
        const params = new URLSearchParams(location.search);
        setExampleValue(parseInt(params.get('vnp_ResponseCode')))
        // Log giá trị
        console.log('Giá trị của tham số "vnp_ResponseCode":', exampleValue);
        // const exampleValuee = parseInt(exampleValue)
        exampleValue
            ? console.log('khong post duoc')
            : (() => {
                let data = window.localStorage.getItem('data');
                postData(data);
            })();
        let Data = window.localStorage.getItem('data')
        // !exampleValue ? {}:{}
    }, [location.search]);

    function HanldeBack() {
        let goBack = window.localStorage.getItem('backto')
        // setLink(goBack)
        window.location.href = goBack
    }

    return (
        <div>
            <MyComponent title={exampleValue ? 'Thanh toan khong thanh cong' : 'Thanh toan thanh cong'}
                messenger={exampleValue ? 'Vui long chọn phuong thuc khac' : 'ok'}
                status={exampleValue ? false : true}
                setIsshow={setIsshow} isShow={isShow} />
            <button onClick={HanldeBack} > Bấm vô để vê </button>
            {/* <button >Bấm vô để làm gì ddosF</button> */}
        </div>
    );
}

export default Show;