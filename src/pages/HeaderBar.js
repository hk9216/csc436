import { Link } from 'react-navi'
import React, {useContext} from 'react'
import { Navbar, Nav, Container ,Button} from 'react-bootstrap'
import UserBar from '../user/UserBar'
import { StateContext } from '../context'
import { useHistory } from 'react-router'

export default function HeaderBar ({setTheme }) {
    
    const {state} = useContext(StateContext)

    const {user} = state;
    const history = useHistory()

    
    return (
        <Navbar bg="light" expand="lg">
        
          <Navbar.Brand href="/" >Blog App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user.username && <Nav.Link><Link href="/Todo/create">Create New Todo</Link></Nav.Link>}
              {user.username &&  <Nav.Link><Link href="/Todo/Remove/">Remove Todo</Link></Nav.Link>}
              {user.username && <Nav.Link><Link href="/users">List users</Link></Nav.Link>}
              {user.username && <Nav.Link><Link href="/users/:id">View User Todos Profile</Link></Nav.Link>}
              
            </Nav>
            <React.Suspense fallback={"Loading..."}>
              <UserBar />
            </React.Suspense>
          </Navbar.Collapse>
        
        </Navbar>

    )
}
