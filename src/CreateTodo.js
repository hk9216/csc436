import React from 'react'
import items from'./App'
export default function CreateTodo ({user}) 
{return (<form onSubmit={e => e.preventDefault()}>
    <div>Author: <b>{user}</b></div>
   
    <div><label htmlFor="lbltitle">Title:</label></div>
   <div> <input type="text" name="txttitle" id="txttitle" required/></div>
  
   <div><label htmlFor="lbldescription">Description:</label></div>
   <div> <input type="text" name="txtdescription" id="txtdescription" /></div>

   <div><label htmlFor="lbldatecreated">Date Created:</label></div>
   <div> <input type="text" name="txtdatecreated" id="txtdatecreated" /></div>

   <div><label htmlFor="lblComplete">Complete:</label></div>
   <div> <input type="checkbox" name="chkcomplete" id="chkcomplete" /></div>


   <div> <input type="submit" value="Create" /></div></form>)}