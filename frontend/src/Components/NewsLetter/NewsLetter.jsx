import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-[75%] md:w-[65%] flex flex-col items-center justify-center m-auto px-0 py-20 my-16
    gap-8 bg-gradient-to-tr from-gray-400 via-gray-100 to-gray-400 text-black'>
        <h1 className='text-xl font-bold capitalize'>get exculsive offers on your email</h1>
        <p className='text-lg font-medium tracking-[2px]'>subscribe to our newsletter and stay updated</p>
        <div className='flex p-1 items-center bg-white rounded-3xl font-custom-robot gap-3'>
            <input className=' rounded-3xl p-1' type="email" placeholder='Your Email id' />
            <button className='text-sm cursor-pointer bg-slate-400 rounded-3xl w-28 p-1'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter 