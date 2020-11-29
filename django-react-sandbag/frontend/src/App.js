import { React, Component } from "react";
import Root from "./Root";
import { Route, Switch } from "react-router-dom"; 

import {
  Container,
  Nav, Navbar, NavDropdown,
  Row, Col,
  Button,
  Form, FormControl
} from "react-bootstrap";

import Home from "./components/Home";
import NotFound from "./components/404";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.css';

// https://saasitive.com/tutorial/

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar variant="dark" bg="dark" expand="lg" className="mb-4">
            <Navbar.Brand href="#home">SaaS UI</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <NavDropdown title="Authentication" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        {/* Replaces BrowserRouter */}
        <Root>
          <Switch>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>

            <Route exact path="/" component={Home}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </Root>
      </div>
    );
  }
}

export default App;
