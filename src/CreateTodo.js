import React, {useContext, useState, useEffect} from 'react'
import { useResource } from 'react-request-hook'
import { StateContext } from './context'
import { useNavigation } from 'react-navi'
export default function CreateTodo () {
   const navigation = useNavigation()
const {state}= useContext(StateContext)
const {user}=state
const {dispatch}=useContext(StateContext)

const [ title, setTitle ] = useState('')
const [ description, setDescription ] = useState('')
const [ datecreated, setDateCreated ] = useState('')
const [ datecompleted, setDateCompleted ] = useState('')
const [ complete, setComplete ] = useState('')

const [Todo, createitem ] = useResource(({ title, description,complete,datecreated,author,datecompleted }) => ({
   url: '/Todo/create',
   method: 'post',
  headers: {"Authorization": `${state.user.access_token}`},
           
   data: { author,title, description,complete,datecreated,datecompleted}
}))

function handleCreate () {
   
  createitem({ title, description,complete, datecreated:Date().toString() ,author:user.username, datecompleted:''})
          
 // dispatch({ type: 'CREATE_TODO', title, description, complete, datecreated,datecompleted, author: user })
}


  useEffect(() => {
           if (Todo && Todo.data) {
               dispatch({ type: 'CREATE_TODO', title: Todo.data.title,description: Todo.data.description, id: Todo.data.id, author: user.username })
               
               navigation.navigate(`/`)
           }
       }, [Todo])

    function handleTitle (evt) { setTitle(evt.target.value) }

    function handledescription (evt) { setDescription(evt.target.value) }

    function handleComplete (evt) { setComplete(evt.target.value) }

    

 //return (<form onSubmit={e => e.preventDefault(dispatch({ type: 'CREATE_TODO', title, description,complete, author:user}))} >
 return (<form onSubmit={e => e.preventDefault(handleCreate())}>
    <div>Author: <b>{user.username}</b></div>
    <div><label htmlFor="lbltitle">Title:</label></div>
   <div> <input type="text" name="txttitle" id="txttitle" value={title} onChange={handleTitle} required/></div>
  <div><label htmlFor="lbldescription">Description:</label></div>
   <div> <input type="text" name="txtdescription" value={description} onChange={handledescription} id="txtdescription" /></div>
   <div> <input type="submit" value="Create" /></div></form>)
}