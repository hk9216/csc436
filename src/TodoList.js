import React ,{useReducer, useEffect} from 'react'

import { StateContext } from './context'
import { useContext } from 'react/cjs/react.development'
import { useResource } from 'react-request-hook';
import appReducer from './reducers';


  
import Todo from './Todo'

export default function TodoList () {
    const {state}=useContext(StateContext)
     const {itemsA}= state
    

   
    return  (<div> <h3> Items Completed </h3> 
{itemsA.map((p, i) => <Todo {...p} id={p.id} author={p.author} title={p.title} Description={p.Description} dateCreated={new Date().toLocaleDateString()} complete={p.complete} DateCompleted={new Date().toLocaleDateString()} key={'post-' + i} TodoId={i} />) } 
</div> )

}