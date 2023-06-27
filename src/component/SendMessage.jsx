import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase';
import { UserAuth } from '../authentication/Authentication';

const SendMessage = () => {
  const {currentUser}=UserAuth()
  const [message,setMessage]= useState('')

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if(message.trim() === "") {
      alert("Enter valid message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser; 
      await addDoc(collection(db, "message"), {
        text: message,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid
      })
    } catch(error) {
      console.log(error);
    }
    setMessage("");
  }

  return (
    <div className='w-full  fixed bottom-0 py-10 shadow-lg bg-gray-300'>
        <form onSubmit={handleSendMessage} className='containerWrap flex ' >
        <input value={message} onChange={e => setMessage(e.target.value)} className="input text-black w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" />
            <button type='submit' className='w-auto bg-gray-500 rounded-r-lg text-white px-2'>Send</button>
        </form>
        
    </div>
  )
}

export default SendMessage