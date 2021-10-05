import React ,{useState, useReducer,} from 'react'


function handleRemove( ){
 //   dispatchList({ type: 'DELETE_TODO', id });
  }
export default function Todo({id,author,title,description,dateCreated,complete,DateCompleted})
{

    const [isChecked, setIsChecked] = useState(true);

return (
    
        <div>
        
        <div>Title: {title}</div>
        <div>Description: {description}</div>
        <div>Date Created: {dateCreated}</div>
        <div input type="label" value="Complete" id="lblComplete">Complete</div>
        <input
        type="checkbox"
        onChange={(event) => setIsChecked(event.currentTarget.checked)}
        checked={isChecked}
      />
      <button onClick={() => setIsChecked(!isChecked)} >
        Toggle checkbox
      </button>
      
        { isChecked && <div>Date Completed:  {DateCompleted}</div>}
      
        <br></br>
        <div>
     
    </div>
        
        </div>

    
    )
    

}