import * as React from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
// import { BrowserRouter, Router, Route, Link } from 'react-router-dom';



function SignUp() {


  return (
    <div className=' d-flex justify-content-center align-items-center'>
      <div className='mt-5 wrapper_form card p-5'>

        <form>
          <h3>
            Sign Up
          </h3>
          <div className='row mb-2 text-start'>
            <div className='col '>
              <label htmlFor='lname' className='text-start'>Last Name</label>
              <input type='text' placeholder='Enter Last Name' className='form-control' />
            </div>
            <div className='col '>
              <label htmlFor='fname' className='text-start'>First Name</label>
              <input type='text' placeholder='Enter First Name' className='form-control' />
            </div>
          </div>
          <div className=' mb-2 text-start'>
            <label htmlFor='email' className='text-start'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control'></input>
          </div>
          <div className='  mb-2 text-start'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Password' className='form-control'></input>
          </div>

          <div className='d-grid'>
            <button className='btn btn-primary'>Sign Up</button>
          </div>

          <p className='text-end mt-2'>

            Bạn đã có tài khoản ư? <Link to="/signin" href='' className='ms-2'>Đăng nhập</Link>
          </p>
        </form>


      </div>

    </div>
  )
}

export default SignUp;