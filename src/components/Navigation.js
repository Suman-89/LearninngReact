import React, {  } from 'react'
import PropTypes from 'prop-types'
import {Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';


const Navigation = (props) => {



  return (
    <>
       <Navbar bg={`${props.mode}`} expand="lg" className='text-dark'>
      <Container fluid>
        <Navbar.Brand className={props.mode === 'light' ? ('text-dark'):('text-light')} href="/">{props.title}</Navbar.Brand>
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
            className={props.mode === 'light' ? ('text-dark'):('text-light')}
            label={props.mode === 'light'? ('set to dark mode'):('set to light mode')}
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
