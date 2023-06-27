import React, { useEffect } from 'react'
import SendMessage from '../component/SendMessage'
import { UserAuth } from '../authentication/Authentication'
import { useNavigate, Link } from "react-router-dom";
import { auth, provider } from '../firebase';

const Login = () => {
  const { currentUser, signIn } = UserAuth();

  const navigate= useNavigate()
  
  const login = async () => {
    try {
      await signIn();
    } catch(error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if(currentUser) {
      navigate("/chat")
    }
  }, [currentUser]);

  
    

  return (
    <div className='flex gap-4 flex-col justify-center items-center h-[85vh]'>
        <h1 className='text-6xl text-gray-100'>Hey There!!!</h1>
        <p className='text-xl text-gray-300'>Lets start chatting :D</p>
        <button onClick={login} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-gray-50 bg-blue-700 hover:bg-blue-900">Sign In with Google</button>
    </div>
  )
}

export default Login