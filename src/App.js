import { render } from 'react-dom'
import React,{useState, useReducer , useEffect} from 'react';
import { useResource } from 'react-request-hook';
import UserBar from './user/UserBar';
import CreateTodo from './CreateTodo';
import appReducer from './reducers';
import TodoList from './TodoList';
import RemoveTodo from './RemoveTodo';
import { StateContext } from './context';
import { Component } from 'react';
import Todo from './Todo';


function App(){
 
  
 
  const [ itemsA, getitems ] = useResource(() => ({
    url: '/items',
    method: 'get'
}))

  const [ state, dispatch ] = useReducer(appReducer, { user: '', itemsA: [] })
useEffect(getitems, []);
//const [ state, dispatch ] = useReducer(appReducer, { user: '', itemsA: [] })
useEffect(() => {
  
  
    if (itemsA.isLoading === false && itemsA && itemsA.data) {
    
     dispatch({ type: 'FETCH_TodoItem', itemsA:itemsA.data })
     
    }
    console.log({itemsA})
}, [itemsA]);

const {user} = state;


    return (
    <div>
      
      
      
        
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
      <UserBar/>
    
    <br/><br/><hr/><br/> 
   
    {user && <CreateTodo  /> }
   {user && <RemoveTodo /> }   
   
    <TodoList />
   </StateContext.Provider>
  
     
    </div>
  )
}

export default App;

