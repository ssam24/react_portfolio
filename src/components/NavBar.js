import React, { Component } from 'react'
import { Container,  Navbar } from 'react-bootstrap/'

export default class NavBar extends Component {
    render() {
        return (
          <Container className="navbar mw-100"> 
            <Navbar expand="lg">
              <Navbar.Brand href="#welcome">Welcome</Navbar.Brand>
              <Navbar.Brand href="#projects">Projects</Navbar.Brand>
              <Navbar.Brand href="#work_with">Let's Work</Navbar.Brand>
              <Navbar.Brand href="#footer">Footer</Navbar.Brand>
            </Navbar>
           </Container> 
        )
    }
}
