
import React, {useState,useReducer, useContext,useEffect} from 'react'
import { StateContext } from '../context';
import { useResource } from 'react-request-hook';
export default function Login() {
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

    const [ user, login ] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
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


   return (
      //  <form onSubmit={evt => {evt.preventDefault(); dispatchUser({type:"LOGIN", username})} }>
      <form onSubmit={evt => {evt.preventDefault();login(username, password) } }>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" value={username} onChange={handleUsername}  id="login-username" />
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="login-password" id="login-password" onChange={handlePassword} />
            {loginFailed && <span style={{ color: 'red' }}>Invalid username or password</span>}
            <input type="submit" value="LOGIN" />
        </form>
    )
}