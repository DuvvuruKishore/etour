import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Eimg from '../images/etour.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";



function Header() {
  return (
    <div style={{marginBottom:"30px"}}>
        <nav class="navbar bg-light">
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">
          <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={4} >
        <img src={Eimg} alt="Avatar" class="avatar"></img>
        </Col>
        <Col xs={4} >
        <h3>ETOUR GOA</h3>
        
        </Col>
     
         </Row>
         
        
         <Row>
         
         </Row>
      </Container>
          {/* <img src={Eimg} class="rounded-circle" style="width: 150px;"/> */}
         
          
          </Navbar.Brand>
        </Container>
        
      </Navbar>
      <Row>
        <Col xs={8}>
            <Link to="/About">About</Link>
        </Col>

        </Row>
    </Container>

</nav>
    
    </div>
  )
}

export default Header