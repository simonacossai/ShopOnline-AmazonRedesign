import React, { Component } from 'react'
import {Navbar, Form, Button, Nav, FormControl, InputGroup} from 'react-bootstrap';
import {HiSearch} from 'react-icons/hi';
import logo from '../../assets/amazonlogo.png';
import './Navbar.css';
import { Link, withRouter } from 'react-router-dom'

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" className="navbarAmazon">
            <Navbar.Brand href="#home"><img src={logo} className="navbarBrand mt-1"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-3">
              <Link to="/">
              <div className="nav-link">Home</div>
              </Link>
              <Link to="/addForm">
              <div className="nav-link">Add product</div>
              </Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <InputGroup style={{ width: "240px" }}>
                  <Form.Control
                    style={{ backgroundColor: "#EEF3F8", border: "none", borderTopLeftRadius:"10px", borderBottomLeftRadius:"10px" }}
                    type="text"
                    placeholder="Search"
                  />
                  <InputGroup.Prepend>
                    <InputGroup.Text
                      style={{ backgroundColor: "#EEF3F8", border: "none", borderTopRightRadius:"10px", borderBottomRightRadius:"10px" }}
                    >
                      <HiSearch  style={{color:"#010101"}}/>
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                </InputGroup>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
export default withRouter(NavBar); 
