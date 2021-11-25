import React, {useState, useContext}from 'react'
import { StateContext } from '../context'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import {Button} from 'react-bootstrap'

export default function UserBar() {
  const Logout = React.lazy(() => import('./Logout'))
   const {user}=useContext(StateContext);
   const {dispatchUser}=useContext(StateContext)
   const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)


    if (user) {
       // return <Logout user={user} dispatchUser={dispatchUser} />
       return <Logout />
    } else {
        return (
            <>
              <div className="justify-content-end">
                <Button variant="link" onClick={(e) => setShowLogin(true)}>
                    Login
                </Button>
                <Login show={showLogin} handleClose={() => setShowLogin(false)} />
                <Button variant="link" onClick={(e) => setShowRegister(true)}>
                    Register
                </Button>
                <Register show={showRegister} handleClose={() => setShowRegister(false)} />
            </div>
            
            
            
            </>
        )
    }
  }