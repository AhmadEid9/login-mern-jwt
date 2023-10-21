import React, { useState } from 'react'
import Input from '../componants/Input'
import Button from '../componants/Button';

const Signup = () => {
    const [ email, setEmail ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const onEmailChange = (mail) => {
        setEmail(mail);
    }

    const onUsernameChange = (name) => {
        setUsername(name);
    }

    const onPasswordChange = (password) => {
        setPassword(password);
    }

    const onPasswordConfirmChange = (confirm) => {
        setConfirmPassword(confirm);
    }
  return (
    <div className='w-full h-screen flex'>
        <div className="w-[50%] h-[100%] bg-[#1a1a1a] flex justify-center items-center text-white">
            <div className="text-center border rounded-lg w-[80%] h-[80%] p-9">
                <Input label='Email' onChange={ (e) => onEmailChange(e.target.value) }/>
                <Input label='Username' onChange={ (e) => onUsernameChange(e.target.value) }/>
                <Input label='Password' onChange={ (e) => onPasswordChange(e.target.value) }/>
                <Input label='Confirm Password' onChange={ (e) => onPasswordConfirmChange(e.target.value) }/>

                <Button text="Sign Up" />
            </div>
        </div>
        <div className="w-[50%] h-[100%] flex justify-center items-center bg-teal-800">
            <h2 className='text-3xl text-white'>
                SIGN UP
            </h2>
        </div>
    </div>
  )
}

export default Signup