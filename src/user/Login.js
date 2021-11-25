import React, {useState,useReducer, useContext,useEffect} from 'react'
import { StateContext } from '../context';
import { useResource } from 'react-request-hook';

import {Form,Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login({show, handleClose}) {
    const {dispatch}=useContext(StateContext)
    const [username, setUsername] = useState('');
    const [ loginFailed, setLoginFailed ] = useState(false)
    const [ password, setPassword ] = useState('')
    function handlePassword (evt) { setPassword(evt.target.value) }
<input type="password" value={password} onChange={handlePassword} name="login-username" id="login-username" />

    function handleUsername (evt) { setUsername(evt.target.value) } 
   function  handlecreate() {
      //  const {dispatchUser}=useContext(StateContext)
      //const [username, setUsername] = useState('');
    dispatch({type:"LOGIN", username})
    }
   // const [show, setShow] = useState(true);
    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    const [ user, login ] = useResource((username, password) => ({
        url: 'auth/login',
                method: 'post',
        data:{username, password}
    }))
    useEffect(() => {
        if (user && user.data) {
if (user.data.length > 0) {
                setLoginFailed(false)
                dispatch({ type: 'LOGIN', username: user.data[0].username })
} else {
                setLoginFailed(true)
}                
} 
}, [user])

useEffect(() => {
            if (user && user.isLoading === false && (user.data || user.error)) {
                if (user.error) {
                    setLoginFailed(true)
                    alert('failed')
                } else {
                    setLoginFailed(false)
                    console.log(user.data)
                    dispatch({ type: 'LOGIN', username, access_token: user.data.access_token })          
                }
            } 
        }, [user])
   return (
      //  <form onSubmit={evt => {evt.preventDefault(); dispatchUser({type:"LOGIN", username})} }>
      
       <Modal show={show} onHide={handleClose} >
      <Form onSubmit={evt => {evt.preventDefault();login(username, password);handleClose()} } >
      <Modal.Header>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
      
     <Modal.Body>
            <Form.Label htmlFor="login-username">Username:</Form.Label>
            
            
            <Form.Control type="text" name="login-username" value={username} onChange={handleUsername}  id="login-username" />
         
            
            <Form.Label htmlFor="login-password">Password:</Form.Label>
            <Form.Control type="password" name="login-password" id="login-password" onChange={handlePassword} />
            {loginFailed && <span style={{ color: 'red' }}>Invalid username or password</span>}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="warning"  className="btn-warning"  color="primary" onClick={handleClose}>Cancel</Button>
            <Button variant="outline-primary" disabled={username.length === 0} type="submit">Login</Button>
        </Modal.Footer>
            
      
        </Form>
    </Modal>
    )
}