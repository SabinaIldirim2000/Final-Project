import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [Fullname, setFullName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = () => {
        setIsLogin(!isLogin);
    }

    const getInputData = (e)=>{
        e.preventDefault();
        console.log(Fullname,email,password);
        setFullName("");
        SetEmail("");
        setPassword("");
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='w-[100vw] h-[100vh] bg-cover' src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-650-80.jpg.webp" alt="banner"/>
            </div>
            <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
                <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
                <div className='flex flex-col'>
                    {
                        !isLogin && <input value={Fullname} onChange={(e)=>setFullName(e.target.value)} type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
                    }
                    <input value={email} onChange={(e)=>SetEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
                    <button className=' bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{isLogin?"Login":"Signup"}</button>
                    <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}<span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></p>
                </div>
            </form>
        </div>
    )
}

export default Login