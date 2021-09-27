import React from 'react'
export default function Todo({title,description,dateCreated,complete,dateCompleted})
{
return (
    
        <div>
        
        <div>Title: {title}</div>

        <div>Description: {description}</div>
        <div>Date Created: {dateCreated}</div>
        <div>Complete {complete}</div>
        <div>Date Completed: {dateCompleted}</div>
        <br></br>
        </div>

    
    )
    

}