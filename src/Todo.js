import React ,{useState, useReducer} from 'react'
import { useResource } from 'react-request-hook'

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
     
    </div>
        
        </div>

    
    )
    

}