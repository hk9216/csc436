import { render } from 'react-dom'
import React,{useState, useReducer , useEffect} from 'react';
import { useResource } from 'react-request-hook';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import UserBar from './user/UserBar';
import CreateTodo from './CreateTodo';
import appReducer from './reducers';
import TodoList from './TodoList';
import RemoveTodo from './RemoveTodo';
import { StateContext } from './context';
import { Component } from 'react';
import Todo from './Todo';
import { Container } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';

import HomePage from './pages/HomePage'
import HeaderBar from './pages/HeaderBar';
import Users from './pages/Users';
import Profile from './Profile';


function App(){
 
  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/Todo/create':route({ view: <CreateTodo /> }),
    '/Todo/Remove':route({ view: <RemoveTodo /> }),
    '/users' : route({view:<Users />}),
    '/users/:id': route(req => {
      return { view: <Profile id={req.params.id} /> }}),
      '/Todo/Profile/:id': route(req => {
        return { view: <Profile id={req.parans.id} /> }})
  })
 /*
  const [ itemsA, getitems ] = useResource(() => ({
    url: 'Getitems/items',
    method: 'get',
    //headers: {"Authorization": `${state.user.access_token}`}
   // headers: {"Authorization": `${state.user.access_token}`}
}))
*/
  const [ state, dispatch ] = useReducer(appReducer, { user: '', itemsA: [] })
/*
 // useEffect(getitems, []);
  useEffect(() =>{
    getitems()
}, [state.user.access_token])

//const [ state, dispatch ] = useReducer(appReducer, { user: '', itemsA: [] })
useEffect(() => {
  
  
    if (itemsA.isLoading === false && itemsA && itemsA.data) {
    
     dispatch({ type: 'FETCH_TodoItem', itemsA:itemsA.data })
     
    }
    
}, [itemsA]);
const { data, isLoading } = itemsA;
*/
const {user} = state;



  
   
  
  return (
  


       
    <div>
      
      
      
        
        <StateContext.Provider value={{state: state, dispatch: dispatch}}>
       <Router routes={routes}>
         <Container>
           <Row>
             <Col md="8">
        <HeaderBar />
      
        
        <hr />
        <View />
        </Col>
        </Row>
       </Container>
        </Router>
       {// <UserBar />
       }
      
      
    
    <br/><br/><hr/><br/> 
   
      
    {//{user && <CreateTodo  />
     }
    
  {// {user && <RemoveTodo /> }   
}
   
 {//<TodoList />}
} 
   

   
     
   </StateContext.Provider>
   
   
    </div>
    
    
    
    
  )



  











}

export default App;

