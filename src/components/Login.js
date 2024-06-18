import React from 'react'
import Header from './Header'

const Login = () => {
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='w-[100vw] h-[100vh]' src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-650-80.jpg.webp" alt="banner" />
            </div>
            <form className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute bg-black'>
                <h1 className='text-3xl text-white mb-5 font-bold'>Signup</h1>
                <div className='flex flex-col'>
                    <input type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-md bg-gray-800 text-white' />
                    <input type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-md bg-gray-800 text-white' />
                    <input type='text' placeholder='Password' className='outline-none p-3 my-2 rounded-md bg-gray-800 text-white' />
                </div>
            </form>
        </div>
    )
}

export default Login