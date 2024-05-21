import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';


function Signup() {
    const [values, setValues] = useState({
        username: '',
        email : '',
        password : ''
    })
    const handleChange = (event) =>{
        setValues({...values, [event.target.name]:[event.target.value]})
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:8080/signup', values)
        .then(res => console.log("Registered Successfully"))
        .catch(err => console.log(err));
    }
  return (
    <div className='d-flex w-100 vh-100 bg-primary justify-content-center align-items-center'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='username'><strong>Username</strong></label>
                    <input type='text' placeholder='Enter name' name='username' 
                    className='from-control rounded-0' onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='username'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' name='email' 
                    className='from-control rounded-0' onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='username'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter Password' name='password' 
                    className='from-control rounded-0' onChange={handleChange}/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Sign Up</button>
                <p>You are agree to terms and polices </p>
                <a to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'></a>
            </form>

        </div>
    </div>
  )
}

export default Signup