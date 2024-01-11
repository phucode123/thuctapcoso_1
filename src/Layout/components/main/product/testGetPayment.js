import React, { useEffect, useState } from 'react';
import MyComponent from "../../../library/checkSuccess";
import { postData } from '../../../../assect/workToken/WorkToken';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faWarning } from "@fortawesome/free-solid-svg-icons";
import './get_payment.css'
// import { fa } from '@fortawesome/fontawesome-svg-core';


const Show = () => {
    const location = useLocation();
    // const [exampleValue, setExampleValue] = useState()
    const [isShow, setIsshow] = useState(true)
    const [totalPrice, setTotalPrice] = useState(0)
    const[codePayment, setCodePayment] = useState(null)
    // const [link, setLink] = useState('')
    let exampleValue
    useEffect(() => {
        // Lấy query parameters từ URL
        const params = new URLSearchParams(location.search);
        exampleValue = parseInt(params.get('vnp_ResponseCode'))
        setTotalPrice(parseInt(params.get('vnp_Amount')) / 100)
        //lấy mã đơn hàng
        const vnp_OrderInfo = params.get('vnp_OrderInfo');
        // const maGD = ;
        setCodePayment(vnp_OrderInfo.match(/ma GD:(\d+)/i)[1])
        // Log giá trị
        console.log('Giá trị của tham số "vnp_ResponseCode":', exampleValue);
        // const exampleValuee = parseInt(exampleValue)
        exampleValue
            ? console.log('khong post duoc')
            : (() => {
                let data = window.localStorage.getItem('data');
                if (data) {
                    window.localStorage.removeItem('data')
                    console.log(JSON.parse(data));
                    postData(JSON.parse(data));
                }
            })();
        let Data = window.localStorage.getItem('data')

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


            <div className='container_get_bill'>
                <div className='header_get_bill'>
                    <div className='text_header'>
                        <span className='header_title'>Thanh toán hoàn tất</span>
                    </div>
                    <div className='icon_header'>
                        <i><FontAwesomeIcon icon={faCheckCircle} /></i>
                    </div>
                </div>
                <div className='body_get_bill'>
                    <table>
                        <tr>
                            <td className='label'>Hình thức</td>
                            <td className='value'>chuyển khoản ngân hàng</td>
                        </tr>
                        <tr>
                            <td className='label'>Tên người thanh toán</td>
                            <td className='value'>Nguyễn Văn A</td>
                        </tr>
                        <tr>
                            <td className='label'>Số điện thoại</td>
                            <td className='value'>123456</td>
                        </tr>
                        <tr className='price'>
                            <td className='label'>Giá trị hoá đơn</td>
                            <td className='value'>{totalPrice.toLocaleString()} vnđ</td>
                        </tr>
                        <tr>
                            <td className='label'>Mã hoá đơn</td>
                            <td className='value'>{codePayment}</td>
                        </tr>
                    </table>
                </div>
                <div className='footer_get_bill'>
                    <div className='buttons'>
                        <button className='print_button'>In hoá đơn</button>
                        <button className='back_button' onClick={HanldeBack}>Thoát</button>
                    </div>
                </div>
            </div>

            {/* <button >Bấm vô để làm gì ddosF</button> */}
        </div>
    );
}

export default Show;