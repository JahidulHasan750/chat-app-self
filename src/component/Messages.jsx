import React, { useEffect, useRef, useState } from "react";
import Chatbubble from "./Chatbubble";
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const Messages = () => {
  const mesRef = useRef()

  const scrollBottom =()=>{
    mesRef.current.scrollIntoView({behavior:'smooth'})
  }
  
 
  const [message,setMessage]= useState([])
  useEffect(scrollBottom, [message])
  useEffect(() => {
    const q = query(collection(db, "message"),
    orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const message = [];
      querySnapshot.forEach((doc) => {
        message.push({ ...doc.data(), id: doc.id });
      });
        setMessage(message)
    });
    return ()=> unsubscribe
  }, []);

  return (
    <div className="pb-44 pt-20 containerWrap">
      {message.map((text) => (
        <Chatbubble key={text.id} message={text}></Chatbubble>
      ))}
      <div ref={mesRef}></div>
    </div>
  );
};

export default Messages;
