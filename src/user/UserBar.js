import React, {useState, useContext}from 'react'
import { StateContext } from '../context'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

export default function UserBar() {
   const {user}=useContext(StateContext);
   const {dispatchUser}=useContext(StateContext)
    if (user) {
        return <Logout user={user} dispatchUser={dispatchUser} />
    } else {
        return (
            <>
              <Login dispatchUser={dispatchUser}/>
              <Register dispatchUser={dispatchUser} />
            </>
        )
    }
  }