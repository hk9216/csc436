import React ,{useReducer, useEffect,useContext} from 'react'

import { StateContext } from './context'

import { useResource } from 'react-request-hook';
import appReducer from './reducers';


  
import TodoUsers from './TodoUsers'

export default function TodoUsersList () {
    const {state}=useContext(StateContext)
    const {usersA}= state
    
console.log(usersA)
   
    return  (<div> <h3> Users List </h3> 
{usersA.map((p, i) => <TodoUsers {...p} short={true} id={p._id} name={p.username} key={'post-' + i} />) } 
</div> )

}