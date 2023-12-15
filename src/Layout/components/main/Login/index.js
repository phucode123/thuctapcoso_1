import React, { useState } from 'react';
import './Login.css'
// import fakeAPI from '../../../../assect/workToken';
// import WorkToken from '../assect/workToken'
import { setToken } from '../../../../assect/workToken/WorkToken';
import { Checksuccess, CheckError } from '../../../library/checkSuccess';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    // làm vieecjvowis token
    const navigate = useNavigate();
    const getTokenFromLocalStorage = () => {
        const token = window.localStorage.getItem('token');
        console.log(token);
    };

    const [user, setUser] = useState({
        phoneNumber: '',
        pass: '',
    });
    const [phoneError, setPhoneError] = useState('');
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    const validatePhoneNumber = () => {
        const regex = /^(0|\+84|84|09|03|07|08|05)\d{8,9}$/;
        if (!regex.test(user.phoneNumber)) {
            setPhoneError('Định dạng số điện thoại không hợp lệ');
        } else {
            setPhoneError('');
        }
    };
    const handleBlur = () => {
        // validatePhoneNumber();
    };

    const handleSignIn = (event) => {
        // event.preventDefault();
        console.log(user)
        event.preventDefault();
        const postAPI = 'https://ttcs-delta.vercel.app/api/v1/post-to-login';
        axios
            .post(postAPI, user)
            .then((response) => {
                console.log(response.data);
                setToken(response.data.token)
                setErrorMessage(false)
                setSuccessMessage(true)
                navigate(-1)
            
                // Xử lý thành công
            })
            .catch((error) => {
                    setSuccessMessage(false)
                setErrorMessage(true)
                console.error('Đăng nhập thất bại!', error);
                // Xử lý lỗi
            });
    };

    return (
        <div className='body_wrapper  d-flex justify-content-center align-items-center'>
            <div className='mt-5 wrapper_form card p-5'>

                <form onSubmit={handleSignIn}>
                    <h3>
                        Đăng nhập
                    </h3>
                    <div className='ms-2 mb-2 text-start'>
                        <label htmlFor='phone' className='text-start'>Số điện thoại</label>
                        <input type='number'
                            onChange={handleChange}
                            name='phoneNumber'
                            placeholder='Nhập số điện thoại'
                            className='form-control'
                            onBlur={handleBlur}

                        ></input>
                        {phoneError && <p className='error_message'>{phoneError}</p>}

                    </div>
                    <div className=' ms-2 mb-2 text-start'>
                        <label htmlFor='password'>Mật khẩu</label>
                        <input type='password'
                            onChange={handleChange}
                            name='pass'
                            placeholder='Nhập mật khẩu'
                            className='form-control'
                        ></input>
                    </div>
                    <div className=' ms-2 mb-2 text-start remember_me'>
                        <input type='checkbox' className='custom-checkbox custom-control' id='check'></input>
                        <label htmlFor='check' className='custom-input-label '>Ghi nhớ đăng nhập</label>
                    </div>
                    <div className='d-flex'>
                        <button className='btn btn-primary'>Đăng nhập</button>
                        <p className='text-end mt-2'>
                            Quên <a href=''>Mật khẩu?</a><Link to="/signup" href='' className='ms-2'>Đăng ký</Link>
                        </p>
                    </div>

                </form>

                {successMessage ? <Checksuccess /> : ''}
                {errorMessage ? <CheckError /> : ''}
                {/* <CheckError /> */}




            </div>
        </div>
    )
}

export default Login;