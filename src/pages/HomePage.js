import React, { useEffect, useContext } from 'react'
import { StateContext } from '../context'
import { useResource } from 'react-request-hook'
import TodoList from '../TodoList'


export default function HomePage () {
    const { state, dispatch } = useContext(StateContext)
const [ itemsA, getitems ] = useResource(() => ({
    url: '/Todo/items',
    method: 'get',
    //headers: {"Authorization": `${state.user.access_token}`}
    headers: {"Authorization": `${state.user.access_token}`}
}))

  

 //useEffect(getitems, []);
  useEffect(() =>{
    getitems()
}, [state.user.access_token])

//const [ state, dispatch ] = useReducer(appReducer, { user: '', itemsA: [] })
useEffect(() => {
  
  
    if (itemsA.isLoading === false && itemsA && itemsA.data) {
        console.log(itemsA.data)
     dispatch({ type: 'FETCH_TodoItem', itemsA:itemsA.data.Todos})
     
    }
    
}, [itemsA]);
const { itemsA1, isLoading } = itemsA;

return (
    <>
     {isLoading && 'Todos loading...'} { <TodoList />}

     
    </>
)
}