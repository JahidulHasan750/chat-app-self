import React from 'react'
import { UserAuth } from '../authentication/Authentication'
import {Navigate} from 'react-router-dom'
const Protected = ({children}) => {
    const {currentUser}=UserAuth();
  if(!currentUser){
    return (
    <div><Navigate to='/'></Navigate> </div>
  )
      }
        return children
}

export default Protected