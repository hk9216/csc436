import React, {useState ,useContext, useEffect} from 'react'
import { useResource } from 'react-request-hook';
import {StateContext} from './context'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import TodoList  from'./TodoList';


export default function RemoveTodo ({id,title, description,complete,datecreated,author,datecompleted}) {
  const {state}= useContext(StateContext)
  const {user}=state
  const {dispatch}=useContext(StateContext)
//const [id,setID]=useState('')
//const [ title, setTitle ] = useState('')
//const [ description, setDescription ] = useState('')
//const [ datecreated, setDateCreated ] = useState('')

const [itemsA, Todoget] = useResource(() => ({
  url:`Todo/items`,
 
  method:'get',
  headers: {"Authorization": `${state.user.access_token}`}
}))



/*
const [Todo , removeitem ] = useResource(() => ({
  url: `Todo/${id}`,
  headers: {"Authorization": `${state.user.access_token}`},
  method: 'delete'
  
  
}))
*/
function handleRemove () {
  ////removeitem({ id })
          
  //dispatch({ type: 'DELETE_TODO', id })
  //dispatch({type:'Fetch_TodoItem',items:items.data })
 }
/*
 useEffect(() => {
          if (Todo && Todo.data) {
    dispatch({ type: 'DELETE_TODO', id:id })
  }
},[Todo])
*/
useEffect(() =>{
  Todoget()
}, [state.user.access_token])
useEffect(() => {
          if (itemsA && itemsA.data) {
    console.log(itemsA.data)
    dispatch({ type: 'FETCH_TodoItem',itemsA:itemsA })
  }
},[itemsA])
//useEffect(removeitem, [id])
function handleTitle (evt) { 
//  setTitle(evt.target.value) 
}
console.log(itemsA.data)

function handleID (evt) { 
//  setID(evt.target.value) 

}


const {data,isloading}=itemsA

 return (<form onSubmit={e => e.preventDefault()} >
  
  <>
  {isloading && 'Posts loading...'} <TodoList />

        </><div><br></br></div>
  
    <div>Author: <b>{user.username}</b></div>
    <div><label htmlFor="lblID">ID:{id}</label></div>
    
    <div><label htmlFor="lblID">Title:</label></div>
    <div><b>{title}</b></div>
    
    <div><input type="checkbox" />
    </div>
   
   

   
   <div> <input type="submit" value="Remove" /></div></form>)}