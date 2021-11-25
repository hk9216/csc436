import React, { useEffect, useContext } from 'react'
import { useResource } from 'react-request-hook'

import { StateContext } from './context'

import { Link } from 'react-navi'

import Todo from './Todo'
import TodoList from './TodoList'


export default function Profile ({ id }) {

    const {state} = useContext(StateContext);
    const {dispatch}=useContext(StateContext);
    const [itemsA, getitems ] = useResource(() => ({
        url: `/Todo/items/${id}`,
        headers: {"Authorization": `${state.user.access_token}`},
        method: 'get'
    }))

    useEffect(() =>{
        getitems()
    },[state.user.access_token])
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