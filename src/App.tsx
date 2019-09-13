import React from "react";
import logo from './images/logo.svg';
import './css/App.css';
import { BrowserRouter as Router, Route, RouteComponentProps } from "react-router-dom";

import { Container, Button } from 'react-bootstrap'
import { Nav, Navbar, Form, FormControl, Jumbotron } from 'react-bootstrap';


function Index() {
  // return <h2>Home</h2>;  
  return (
    <Container>
      <Jumbotron>
        <h2>Home!</h2>
        <p>
          Home Sweet Home! <br />
          A simple jumbotron-style component for calling
          extra attention to featured content or information.
      </p>
      </Jumbotron>
    </Container>
  );
}

type TParams = { id: string };
function Product({ match }: RouteComponentProps<TParams>) {
  // return <h2>This is a page for product with ID: {match.params.id} </h2>;
  return (
    <Container>
      <Jumbotron>
        <h2>Proudct ID: {match.params.id} </h2>
        <p>
          <br/>
          You selected - {match.params.id}  
          <br/>
        </p>
      </Jumbotron>
    </Container>
  );
}


function AppRouter() {
  return (
    <Router>
      <div>
        <Navbar>
          {/* <Navbar.Brand href="/"> <img src={logo} className="App-logo" alt="logo" /> </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href="/products/1"> First Product </Nav.Link>
              <Nav.Link href="/products/2"> Second Product </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <Route path="/" exact component={Index} />
      <Route path="/products/:id" component={Product} />
    </Router>
  );
}

export default AppRouter;