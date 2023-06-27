import React from "react";
import { UserAuth } from "../authentication/Authentication";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate= useNavigate()
  const{logOut,currentUser}= UserAuth()
  const logout = () =>{
    navigate('/')
    signOut(auth);}
  return (
    <div className="navbar bg-gray-600 fixed z-20">
        <div className="containerWrap  flex justify-between">
        <a className="btn btn-ghost  normal-case text-xl">Instant chat</a>
        {currentUser?  <a className="btn btn-ghost normal-case text-xl" onClick={logout} >Logout</a>:''}
        </div>
        
      </div>
    
  );
};

export default Navbar;
