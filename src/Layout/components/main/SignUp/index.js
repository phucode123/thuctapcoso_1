import React, { useState } from 'react';
import axios from 'axios'
import './SignUp.css'
import { Link } from 'react-router-dom';
// import { BrowserRouter, Router, Route, Link } from 'react-router-dom';


function SignUp() {
  // const getApiUser = 'https://ttcs-delta.vercel.app/api/v1/get-user'

  // axios.get(getApiUser)


  //   .then(response => {
  //     // Xử lý dữ liệu trả về từ API
  //     const user = response.data;
  //     console.log(user);
  //   })
  //   .catch(error => {
  //     // Xử lý lỗi nếu có
  //     console.error(error);
  //   });

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateEmail = () => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!regex.test(email)) {
      setEmailError('Định dạng email không hợp lệ');
    } else {
      setEmailError('');
    }
  };

  const validatePhoneNumber = () => {
    const regex = /^(0|\+84|84|09|03|07|08|05)\d{8,9}$/;
    if (!regex.test(phone)) {
      setPhoneError('Định dạng số điện thoại không hợp lệ');
    } else {
      setPhoneError('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateEmail();
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    validatePhoneNumber();
  };

  const handleBlur = () => {
    validateEmail();
    validatePhoneNumber();
  };

  // ...các state và hàm xử lý khác...

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const user = {
      email: email,
      phone: phone,
      lastName: lastName,
      password: password,
    };
    console.log(user);
  };

  return (
    <div className=' d-flex justify-content-center align-items-center'>
      <div className='mt-5 wrapper_form card p-5'>

        <form onSubmit={handleSignUp}>
          <h3>
            Sign Up
          </h3>
          <div className='row mb-2 text-start'>
            <div className='col '>
              <label htmlFor='lname' className='text-start'>
                Last Name
              </label>
              <input
                type='text'
                placeholder='Enter Last Name'
                className='form-control'
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
          </div>
          <div className=' mb-2 text-start'>
            <label htmlFor='email' className='text-start'>
              Email
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              className='form-control'
              value={email}
              onChange={handleEmailChange}
              onBlur={handleBlur}
            />
            {emailError && <p className='error_message'>{emailError}</p>}
          </div>
          <div className=' mb-2 text-start'>
            <label htmlFor='phone' className='text-start'>
              Số điện thoại
            </label>
            <input
              type='text'
              placeholder='Nhập số điện thoại'
              className='form-control'
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handleBlur}
            />
            {phoneError && <p className='error_message'>{phoneError}</p>}
          </div>
          <div className='  mb-2 text-start'>
            <label htmlFor='password'>Password</label>
            <input 
            type='password' 
            placeholder='Enter Password' 
            className='form-control'
            value={password}
            onChange={handlePasswordChange}
            ></input>
          </div>

          <div className='d-flex'>
            <button type='submit' className='btn btn-primary'>Sign Up</button>
            <p className='text-end mt-2'>

              <span>Bạn đã có tài khoản ư?</span> <Link to="/signin" href='' className='ms-2'>Đăng nhập</Link>
            </p>
          </div>

        </form>


      </div>

    </div>
  )
}

export default SignUp;