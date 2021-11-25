import React, {useContext, useEffect,useState, useReducer} from 'react'
import { useResource} from 'react-request-hook'
import { StateContext } from '../context'
import appReducer from '../reducers';
import {Link} from 'react-router-dom';
import TodoUsersList from '../TodoUsersList'
export default function Users(){
    //const {usersA}=useContext(StateContext)
   
//const {dispatch}=useContext(StateContext)
const [ state, dispatch ] = useReducer(appReducer, { user: '', usersA: [] })
    const [ usersA, getusers ] = useResource(() => ({
        url: '/users',
        method: 'get'
    }))

    useEffect(getusers, []);
    useEffect(() => {
  
       

    if (usersA.isLoading === false && usersA && usersA.data) {
        
        dispatch({ type: 'FETCH_Users', usersA:usersA.data })
         
        }
        
    }, [usersA]);
    
    const {user} = state;    

 return(
                     

                     <div>
                       { //usersA.map((p,i) => <TodoUsers  {...p} id={p.id} name={p.username} key={'post-' + i}/>)}
}
                     {(usersA && usersA.data)
                         ? <TodoUsersList  />
                         : 'Loading...'
                        
                     }
                     
                 </div>






   



 )
}