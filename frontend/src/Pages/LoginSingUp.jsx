import React from 'react'

const LoginSingUp = () => {
  return (
    <div className='loginsignup w-[100%]  bg-red-400 py-20 flex justify-center font-custom-poppin'>
        <div className="loginsignup-container w-[75%] mx-auto max-w-[1080px] bg-white py-10 px-16">
            <h1 className='text-2xl'>Sign Up</h1>
            <div className="loginsignup-fields flex flex-col mt-7 space-y-4">
                <input  className='w-[100%] border-2 p-2 rounded-3xl text-gray-600 text-sm' type="text" placeholder= 'Your Name' />
                <input  className='w-[100%] border-2 p-2 rounded-3xl text-gray-600 text-sm' type="email" placeholder='Email Address' />
                <input  className='w-[100%] border-2 p-2 rounded-3xl text-gray-600 text-sm' type="password" placeholder='Password' />
            </div>

            <button className='w-36 bg-red-400 mt-5 rounded-full p-3 cursor-pointer text-white '>Continue</button>

            <p className='loginsignuo-login text-sm mt-4'>Already have an account? <span className='text-red-400 font-medium'>Login Here</span></p>

            <div className="loginsignup-agree mt-3 flex items-center gap-4 text-sm text-gray-500 font-medium">
                <input type="checkbox" name="" id="" />
                <p>By continueing,I agree to the terms of use & privacy policy</p>
            </div>
        </div>
    </div>
  )
}

export default LoginSingUp