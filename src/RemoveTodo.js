import React, {useState} from 'react'

function handleRemove(id){
    
}
export default function CreateTodo ({user, dispatch}) {
const [id,setID]=useState('')
const [ title, setTitle ] = useState('')
const [ description, setDescription ] = useState('')
const [ datecreated, setDateCreated ] = useState('')



function handleTitle (evt) { setTitle(evt.target.value) }


function handleID (evt) { setID(evt.target.value) }

    

 return (<form onSubmit={e => e.preventDefault(dispatch({ type: 'DELETE_TODO'},id,title))} >
  
   
   <div><br></br></div>
    <div>Author: <b>{user}</b></div>

    <div><label htmlFor="lblID">ID:</label></div>
   
   <div> <input type="text" name="txtID" id="txtID1" value={id}  onChange={handleID} /></div>
    <div><label htmlFor="lbltitle">Title:</label></div>
   
   <div> <input type="text" name="txttitle" id="txttitle" value={title}  onChange={handleTitle} /></div>
  
   
   

   <div> <input type="submit" value="Remove" onClick={handleRemove(id)}/></div></form>)}