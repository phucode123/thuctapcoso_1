import * as React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';


function Login() {


    return (
        <div className='body_wrapper  d-flex justify-content-center align-items-center'>
            <div className='mt-5 wrapper_form card p-5'>

                <form>
                    <h3>
                        Đăng nhập
                    </h3>
                    <div className='ms-2 mb-2 text-start'>
                        <label htmlFor='email' className='text-start'>Email</label>
                        <input type='email' placeholder='Enter Email' className='form-control'></input>
                    </div>
                    <div className=' ms-2 mb-2 text-start'>
                        <label htmlFor='password'>Mật khẩu</label>
                        <input type='password' placeholder='Enter Password' className='form-control'></input>
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



            </div>
        </div>
    )
}

export default Login;