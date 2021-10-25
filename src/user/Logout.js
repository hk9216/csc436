import React, {useContext} from 'react'
import {StateContext} from '../context'
export default function Logout() {
const {user}=useContext(StateContext)
const {dispatchUser}=useContext(StateContext)
return (<form onSubmit={e => {e.preventDefault();dispatchUser({type:"LOGOUT"})} }>
    Logged in as: <b>{user}</b><input type="submit" value="Logout" /></form>)}