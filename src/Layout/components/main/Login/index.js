import * as React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';


function Login() {


    return (
        <div className='body_wrapper  d-flex justify-content-center align-items-center'>
            <div className='mt-5 wrapper_form card p-5'>

                    <form>
                        <h3>
                            Sign In
                        </h3>
                        <div className='ms-2 mb-2 text-start'>
                            <label htmlFor='email' className='text-start'>Email</label>
                            <input type='email' placeholder='Enter Email' className='form-control'></input>
                        </div>
                        <div className=' ms-2 mb-2 text-start'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' placeholder='Enter Password' className='form-control'></input>
                        </div>
                        <div className=' ms-2 mb-2 text-start'>

                            <input type='checkbox' className='custom-checkbox custom-control' id='check'></input>
                            <label htmlFor='check' className='custom-input-label ms-2'>Remember me</label>
                        </div>
                        <div className='d-grid'>
                            <button className='btn btn-primary'>Sign in</button>
                        </div>

                        <p className='text-end mt-2'>

                            Fogot <a href=''>Password?</a><Link to="/signup" href='' className='ms-2'>Sign up</Link>
                        </p>
                    </form>

               

            </div>
        </div>
    )
}

export default Login;