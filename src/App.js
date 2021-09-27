
import { render } from 'react-dom'
import UserBar from './UserBar'
import CreateTodo from './CreateTodo'
import TodoList from './TodoList'


function App() {
  const items = [
    {
      title: "List Item 1",
      description: "Some text",
      datecreated: Date.now(),
      complete:true,
      datecompleted:false
   
    },
    {
      title: "List Item 2",
      description: "Some text",
      datecreated: Date.now(),
      complete:false,
      datecompleted:false
    },
    {
      title:"List Item 3",
      description: "Some text",
      datecreated: Date.now(),
      complete:false,
      datecompleted:false
    }
  ]
  return (
    <div>
      <UserBar />
    <br/><br/><hr/><br/> 
    <CreateTodo user="Haider" /> 
    <br/><br/><hr/><br/> 
    <TodoList itemslist={items} />
    </div>
  )
}

export default App;

