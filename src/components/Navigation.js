import React from 'react'
import PropTypes from 'prop-types'
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';


const Navigation = (props) => {
  return (
    <>
       <Navbar bg="light" expand="lg">
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
            <NavDropdown.Item href="/AboutPage">About</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
  
}
Navigation.prototypes = {title : PropTypes.string}

export default Navigation
