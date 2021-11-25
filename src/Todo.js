import React ,{useState, useReducer, useContext, useEffect} from 'react'
import { useResource } from 'react-request-hook'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-navi'
import {StateContext} from './context'

function handleRemove( ){
 //   dispatchList({ type: 'DELETE_TODO', id });
  }
function Todo({short=false,id,author,title,description,dateCreated,DateCompleted})
{
  const { dispatch } = useContext(StateContext)
  const {state}=useContext(StateContext)
  
    const [isChecked, setIsChecked] = useState(true);
    const [toggledTodo , updateitem ] = useResource(({ DateCompleted,complete,id}) => ({
      url: `/Todo/update/${id}`,
      method: 'patch',
      headers: {"Authorization": `${state.user.access_token}`},
      data: {DateCompleted,complete}
     // datecompleted:DateCompleted
   }))

   const [deletedTodo, deleteTodo] = useResource((id) => ({
    url: `/Todo/${id}`,
    method: "delete",
    headers: {"Authorization": `${state.user.access_token}`}
}));
useEffect(() => {
  if (deletedTodo && deletedTodo.data && deletedTodo.isLoading === false) {
      dispatch({type: 'DELETE_TODO', id: id})
  }
}, [deletedTodo])

useEffect(() => {
  if (toggledTodo && toggledTodo.data && toggledTodo.isLoading === false) {
      dispatch({type: 'TOGGLE_TODO', complete:toggledTodo.data.complete, DateCompleted:toggledTodo.data.DateCompleted, id:id})
  }
}, [toggledTodo])

let processedContent = description

if (short) {
     if (description.length > 30) {
          processedContent = description.substring(0, 30) + '...'
     }
}
return (
    <Card>
      <Card.Body>
        <div>
        <div>Todo:{id}</div>
        <Card.Title><Link style={{ color: 'lightblue' }} > {title}</Link> 
        </Card.Title>
        <Card.Subtitle>
              <i>Written by <b>{author}</b></i>
              </Card.Subtitle>
              <Card.Text>
        Description: {description}
        
        <div>Date Created: {dateCreated}</div>
        <div input type="label" value="Complete" id="lblComplete">Complete</div>
        <input
        type="checkbox"
        onChange={(event) => setIsChecked(event.currentTarget.checked)}
        checked={isChecked} 
        
      />
      <button onClick={() => setIsChecked(!isChecked) || updateitem({DateCompleted,isChecked,id})}>
              {// if(setIsChecked(!isChecked))
              //updateitem({DateCompleted,isChecked:true,id})
             
          //  else  {updateitem({DateCompleted:'1/1/1900',isChecked:false,id})}
            
            // }
          }
            
           
        Toggle checkbox
      
      </button>
      
        { isChecked && <div>Date Completed:  {DateCompleted}</div>}
        console.log({isChecked})
        <br></br>
        <div>
        <Button variant="link" onClick={(e) => {deleteTodo(id)}}>Delete Post</Button>
    </div>
    </Card.Text>
        
        </div>
        </Card.Body>
        </Card>
    
    )
    
    
}
export default React.memo(Todo);