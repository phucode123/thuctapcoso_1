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
    const [isShow, setIsshow] = useState(true)
    const [totalPrice, setTotalPrice] = useState(0)
    const [codePayment, setCodePayment] = useState(null)
    const [user, setUser] = useState(null)

    let exampleValue
    let data =JSON.parse(window.localStorage.getItem('data'));
    useEffect(() => {
        // data= 
        console.log(data);
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
        setUser(JSON.parse(window.localStorage.getItem('user')))

        exampleValue
            ? console.log('khong post duoc')
            : (() => {
                console.log(exampleValue);
                if (data) {
                    console.log(data);
                    window.localStorage.removeItem('data')
                    // console.log(data);
                    postData(data);
                }
            })();
        // let Data = window.localStorage.getItem('data')
        // console.log(user);
    }, [location.search]);

    function HanldeBack() {
        let goBack = window.localStorage.getItem('backto')
        // setLink(goBack)
        window.location.href = goBack
    }

    const [confirmed, setConfirmed] = useState(false);
    function Another() {
        setConfirmed(true)
    }

    async function changePayment() {
        try {
            let newData = data;
            newData.payment = 'cod';
            console.log(newData);
            await postData(newData);
            // Hoàn thành việc gửi dữ liệu và chờ đợi
            console.log("Post data completed");
            // Chuyển hướng trang web về trang chủ
            window.location.href = "/";
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const handleConfirm = () => {
        setConfirmed(true);
        // Thực hiện các lệnh tiếp theo sau khi xác nhận
        // ...
    };
    function removeForm() {
        setConfirmed(false);
    }
    function stopPropagation(event) {
        event.stopPropagation();
    }


    return (
        <div>
            <MyComponent title={exampleValue == 0 ? 'Thanh toan khong thanh cong' : 'Thanh toan thanh cong'}
                messenger={exampleValue == 0 ? 'Vui long chọn phuong thuc khac' : 'Thanh toán online thành công'}
                status={exampleValue == 0 ? false : true}
                setIsshow={setIsshow} isShow={isShow} />


            <div className='container_get_bill'>
                <div className='header_get_bill'>
                    <div className='text_header'>
                        <span className={`header_title ${exampleValue == 0 ? 'text-danger' : ''}`}>{exampleValue == 0 ? 'Thanh toán online thất bại' : 'Thanh toán hoàn tất'} </span>
                    </div>
                    <div className={`icon_header ${exampleValue == 0 ? 'text-danger' : ''}`}>
                        {exampleValue == 0 ? <i><FontAwesomeIcon icon={faWarning} /></i> : <i><FontAwesomeIcon icon={faCheckCircle} /></i>}
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
                            <td className='value'>{user ? user.name : ''}</td>
                        </tr>
                        <tr>
                            <td className='label'>Số điện thoại</td>
                            <td className='value'>{user ? user.phone_number : ''}</td>
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
                        {exampleValue != 0 ? <button onClick={Another} className='another'>Hình thức khác</button> : <button className='print_button'>In hoá đơn</button>}
                        <button className='back_button' onClick={HanldeBack}>Thoát</button>
                    </div>
                </div>
            </div>

            {
                confirmed && <div className="example-wrapper" onClick={removeForm}>
                    <div className='content_wrapper' onClick={stopPropagation}>

                        <label className="header_lable">Bạn muốn đổi hình thức thanh toán?</label>
                        {/* <p className='title_lable' style={{color: 'rbga(0,0,0,.1) !imporant'}}>Thanh toán online</p> */}

                        <p className='title_lable'>Thanh toán khi nhận hàng</p>
                        <button className='ok_button' onClick={changePayment}>Xác nhận</button>
                        <button className='close_payment' onClick={removeForm}>Huỷ</button>

                    </div>
                </div>
            }

            {/* <button >Bấm vô để làm gì ddosF</button> */}
        </div>
    );
}

export default Show;