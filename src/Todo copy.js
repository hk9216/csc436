import React ,{useState, useReducer} from 'react'
import { useResource } from 'react-request-hook'
import { Card, Button } from 'react-bootstrap'
function handleRemove( ){
 //   dispatchList({ type: 'DELETE_TODO', id });
  }
export default function Todo({id,author,title,description,dateCreated,complete,DateCompleted})
{

    const [isChecked, setIsChecked] = useState(true);
    const [items , updateitem ] = useResource(({ DateCompleted,complete}) => ({
      url: '/items/' + id,
      method: 'patch',
      
      data: {DateCompleted,complete}
     // datecompleted:DateCompleted
   }))

   const [deletedTodo, deleteTodo] = useResource((id) => ({
    url: `/Todo/${id}`,
    method: "delete"
}));
   
return (
    
        <div>
        <div>Todo:{id}</div>
        <div>Title: {title}</div>
        <div>Description: {description}</div>
        <div>Date Created: {dateCreated}</div>
        <div input type="label" value="Complete" id="lblComplete">Complete</div>
        <input
        type="checkbox"
        onChange={(event) => setIsChecked(event.currentTarget.checked)}
        checked={isChecked} 
        
      />
      <button onClick={() => setIsChecked(!isChecked) || updateitem(DateCompleted,isChecked,id)}>
      
        Toggle checkbox
      </button>
      
        { isChecked && <div>Date Completed:  {DateCompleted}</div>}
      
        <br></br>
        <div>
        <Button variant="link" onClick={(e) => {deleteTodo(id)}}>Delete Post</Button>
    </div>
        
        </div>

    
    )
    

}