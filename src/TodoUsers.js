import React ,{useState, useReducer, useContext, useEffect} from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from './context'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-navi'
import { Navbar, Nav, Container } from 'react-bootstrap'

function handleRemove( ){
 //   dispatchList({ type: 'DELETE_TODO', id });
  }
export default function TodoUsers({short, id,username})
{
  const { state, dispatch } = useContext(StateContext)
  const [ usersA, getitems ] = useResource(() => ({
      url: `/Todo/users`,
      method: 'get',
      //headers: {"Authorization": `${state.user.access_token}`}
      headers: {"Authorization": `${state.user.access_token}`}
  }))
  
    
  
   //useEffect(getitems, []);
    useEffect(() =>{
      getitems()
  }, [state.user.access_token])
  
  //const [ state, dispatch ] = useReducer(appReducer, { user: '', itemsA: [] })
  useEffect(() => {
    
    
      if (usersA.isLoading === false && usersA && usersA.data) {
          console.log(usersA.data)
       dispatch({ type: 'FETCH_Users', usersA:usersA.data.TodosUsers})
       
      }
      
  }, [usersA]);  
  
  console.log(TodoUsers)
  return (
    
        <div>
        
        <div>id: {id}</div>
        <div>name: {username}</div>
        <div> { short && <Link href={`/users/${id}/`}>Todo</Link>}</div>
      </div>
        

    
    )
    

}