import React, {  } from 'react'
import PropTypes from 'prop-types'
import {Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';


const Navigation = (props) => {



  return (
    <>
       <Navbar bg={`${props.mode}`} expand="lg" className='text=light'>
      <Container fluid>
        <Navbar.Brand href="/">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <NavDropdown title="Application" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/">TextForm</NavDropdown.Item>
            <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form>
           <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label='set dark mode'
            onClick={props.toggleMode}
           />
            </Form>      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
  
}
Navigation.prototypes = {title : PropTypes.string}

export default Navigation
