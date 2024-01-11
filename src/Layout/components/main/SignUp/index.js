import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { Checksuccess, CheckError } from '../../../library/checkSuccess';


function SignUp() {

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [user, setUser] = useState({
    email: '',
    phoneNumber: '',
    name: '',
    pass: '',
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const validateEmail = () => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!regex.test(user.email)) {
      setEmailError('Định dạng email không hợp lệ');
    } else {
      setEmailError('');
    }
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
    validateEmail();
    validatePhoneNumber();
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(user);
    const postAPI = 'http://localhost:3001/api/v1/post-user';
    axios
      .post(postAPI, user)
      .then((response) => {
        console.log(response.data);
        console.log("thành công rồi");
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 2000);
        // Xử lý thành công
      })
      .catch((error) => {
        setErrorMessage(true)
        console.error('Đăng ký thất bại!', error);
        // alert('thất bại rồi', error)
        // Xử lý lỗi
      });
  };

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='mt-5 wrapper_form card p-5'>
        <form onSubmit={handleSignUp}>
          <h3>Đăng ký</h3>
          <div className='row mb-2 text-start'>
            <div className='col '>
              <label htmlFor='lname' className='text-start'>
                Tên của bạn
              </label>
              <input
                type='text'
                name='name'
                placeholder='Enter Last Name'
                className='form-control'
                value={user.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className=' mb-2 text-start'>
            <label htmlFor='email' className='text-start'>
              Email
            </label>
            <input
              type='email'
              name='email'
              placeholder='Enter Email'
              className='form-control'
              value={user.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {emailError && <p className='error_message'>{emailError}</p>}
          </div>
          <div className=' mb-2 text-start'>
            <label htmlFor='phone' className='text-start'>
              Số điện thoại
            </label>
            <input
              type='number'
              name='phoneNumber'
              placeholder='Nhập số điện thoại'
              className='form-control'
              value={user.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {phoneError && <p className='error_message'>{phoneError}</p>}
          </div>
          <div className='  mb-2 text-start'>
            <label htmlFor='password'>Mật khẩu</label>
            <input
              type='password'
              name='pass'
              placeholder='Enter Password'
              className='form-control'
              value={user.pass}
              onChange={handleChange}
            />
          </div>

          <div className='d-flex'>
            <button type='submit' className='btn btn-primary'>
              Đăng ký
            </button>
            <p className='text-end mt-2'>
              <span>Bạn đã có tài khoản ư?</span>{' '}
              <Link to='/signin' href='' className='ms-2'>
                Đăng nhập
              </Link>
            </p>
          </div>
        </form>
        {successMessage ? <Checksuccess /> : ''}
        {errorMessage ? <CheckError /> : ''}
        {/* <CheckError/> */}

      </div>
    </div>
  );
}

export default SignUp;