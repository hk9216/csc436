import React, {useState ,useContext} from 'react'
import { useResource } from 'react-request-hook';
import {StateContext} from './context'

export default function RemoveTodo () {
  const {user}=useContext(StateContext)
const {dispatch}=useContext(StateContext)
const [id,setID]=useState('')
const [ title, setTitle ] = useState('')
const [ description, setDescription ] = useState('')
const [ datecreated, setDateCreated ] = useState('')


const [items , removeitem ] = useResource(({id}) => ({
  url: '/items/' + id,
  method: 'delete',
  data: {id}
}))

function handleRemove () {
 removeitem({ id })
         
 dispatch({ type: 'DELETE_TODO', id })
 //dispatch({type:'Fetch_TodoItem',items:items.data })
}

function handleTitle (evt) { setTitle(evt.target.value) }


function handleID (evt) { setID(evt.target.value) }

    

 return (<form onSubmit={e => e.preventDefault(handleRemove(id))} >
  
   
   <div><br></br></div>
    <div>Author: <b>{user}</b></div>

    <div><label htmlFor="lblID">ID:</label></div>
   
   <div> <input type="text" name="txtID" id="txtID1" value={id}  onChange={handleID} /></div>
    <div><label htmlFor="lbltitle">Title:</label></div>
   
   <div> <input type="text" name="txttitle" id="txttitle" value={title}  onChange={handleTitle} /></div>
  
   
   

   <div> <input type="submit" value="Remove" /></div></form>)}