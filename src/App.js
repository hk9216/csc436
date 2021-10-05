import { render } from 'react-dom'
import React,{useState, useReducer} from 'react';
import UserBar from './user/UserBar';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import RemoveTodo from './RemoveTodo';

import { Component } from 'react';
import Todo from './Todo';


function App(){
  const Initialitems = [
    {
      id:1,
      title: "List Item 1",
      description: "Some text11",
      datecreated: "" ,
      complete: true,
      datecompleted:"",
      author:"Haider"
   
    },
    {
      id:2,
      title: "List Item 2",
      description: "Some text",
      datecreated: '1/2/2021',
      complete:false,
      datecompleted:Date.now(),
      author: "Haider"
    },
    {
     id:3,
      title:"List Item 3",
      description: "Some text",
      datecreated: Date.now(),
      complete:false,
      datecompleted:Date.now(),
      author: "Haider"
    }
  ]
  
  const [ user, dispatchUser ] = useReducer(userReducer, '')
  const [ TodoItems, dispatchTodoItems] = useReducer( TodoReducer, Initialitems)
 const [list, dispatchList] = useReducer(TodoReducer,Initialitems )
  
  function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN': 
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
           return state;
    }
  }
    function TodoReducer (state, action) {
      switch (action.type) {
          case 'CREATE_TODO':
            const newTodoItem = { 
                title: action.title,
                description: action.description,
                author:action.author,
                complete:action.complete
               }
              return [ newTodoItem, ...state ]
              
                case 'DELETE_TODO':
          return {...state,
        list: state.list.filter((item) => item.id !== action.id)}
               case 'TOGGLE_TODO':
               //Working via state component level
          default:
            throw new Error
            
      }
    }

   
   
   
    
  
  return (
    <div>
      <UserBar user={user} dispatchUser={dispatchUser}/>
    <br/><br/><hr/><br/> 
   {user && <CreateTodo user={user}  dispatch={dispatchTodoItems} /> }
   {user && <RemoveTodo user={user}  dispatch={dispatchList} /> }
   <TodoList itemslist={TodoItems} />
     
    
     
    </div>
  )
}

export default App;

