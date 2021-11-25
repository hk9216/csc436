import React ,{useReducer, useEffect,useContext} from 'react'
import Todo from './Todo'
import { StateContext } from './context'

import { useResource } from 'react-request-hook';
import appReducer from './reducers';


  



export default function TodoList () {
    const {state}=useContext(StateContext)
     const {itemsA}= state
    

   console.log(itemsA)
    return  (<div> <h3> Items Completed </h3> 
{itemsA.map((p, i) => <Todo {...p} short={true} author={p.author} title={p.title} Description={p.description} dateCreated={new Date().toLocaleDateString()} DateCompleted={new Date().toLocaleDateString()} key={'post-' + i} id={p._id} />) } 
</div> )

}