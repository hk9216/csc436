import React, {useState ,useContext, useEffect} from 'react'
import { useResource } from 'react-request-hook';
import {StateContext} from './context'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export default function RemoveTodo () {
  const {state}= useContext(StateContext)
  const {user}=state
  const {dispatch}=useContext(StateContext)
const [id,setID]=useState('')
const [ title, setTitle ] = useState('')
const [ description, setDescription ] = useState('')
const [ datecreated, setDateCreated ] = useState('')

const [Todog, Todoget] = useResource(() => ({
  url:`Todo/items`,
  headers: {"Authorization": `${state.user.access_token}`},
  method:'get'
}))




const [Todo , removeitem ] = useResource(() => ({
  url: `Todo/${id}`,
  headers: {"Authorization": `${state.user.access_token}`},
  method: 'delete'
  
  
}))

function handleRemove () {
  removeitem({ id })
          
  //dispatch({ type: 'DELETE_TODO', id })
  //dispatch({type:'Fetch_TodoItem',items:items.data })
 }

 useEffect(() => {
          if (Todo && Todo.data) {
    dispatch({ type: 'DELETE_TODO', id:id })
  }
},[Todo])

useEffect(() => {
          if (Todog && Todog.data) {
    dispatch({ type: 'FETCH_TodoItem',Todog:Todog })
  }
},[Todog])
//useEffect(removeitem, [id])
function handleTitle (evt) { setTitle(evt.target.value) }


function handleID (evt) { setID(evt.target.value) }




 return (<form onSubmit={e => e.preventDefault()} >
  
   
   <div><br></br></div>
    <div>Author: <b>{user.username}</b></div>

    <div><label htmlFor="lblID">ID:</label></div>
   
   <div> <input type="text" name="txtID" id="txtID1" value={id}  onChange={handleID} /></div>
    <div><label htmlFor="lbltitle">Title:</label></div>
   
   <div> <input type="text" name="txttitle" id="txttitle" value={title}  onChange={handleTitle} /></div>
  
   
   

   <div> <input type="submit" value="Remove" /></div></form>)}