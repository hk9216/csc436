import React, {useState} from 'react'

export default function CreateTodo ({user, dispatch}) {

const [ title, setTitle ] = useState('')
const [ description, setDescription ] = useState('')
const [ datecreated, setDateCreated ] = useState('')
const [ complete, setComplete ] = useState('')





    function handleTitle (evt) { setTitle(evt.target.value) }

    function handledescription (evt) { setDescription(evt.target.value) }

    function handleComplete (evt) { setComplete(evt.target.value) }

    

 return (<form onSubmit={e => e.preventDefault(dispatch({ type: 'CREATE_TODO', title, description,complete, author:user}))} >
   
    <div>Author: <b>{user}</b></div>
    <div><label htmlFor="lbltitle">Title:</label></div>
   <div> <input type="text" name="txttitle" id="txttitle" value={title} onChange={handleTitle} required/></div>
  <div><label htmlFor="lbldescription">Description:</label></div>
   <div> <input type="text" name="txtdescription" value={description} onChange={handledescription} id="txtdescription" /></div>
   
  
  
   
   <div> <input type="submit" value="Create" /></div></form>)
}