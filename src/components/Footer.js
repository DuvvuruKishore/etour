import React from 'react';
// import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import '../App.css';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <div id="contact" class="navbar bg-light">
    <h5 style={{marginLeft:"10%",marginBottom:"2%"}}>CONTACT ME</h5>
    {/* <Jumbotron className="contact-jumbotron"> */}
    <Container>
      <Row >
        <Col className="d-flex justify-content-center flex-wrap" xs="4">
          <div className="m-2">
           <h6>Address</h6>
           <Col xs="8">
           218-B, Aguada - Siolim Rd Gauravaddo Aguada - Siolim Rd, Gauravaddo
           </Col>
           </div>
         
          
          
        </Col>
    <Col xs="6">
        <h6>social media</h6>
        <Col className="d-flex justify-content-center flex-wrap" >
       
        
            
          <div className="m-2">
            <a href="mailto:duvvurukishore100@gmail.com" target="Gmail" rel="noopener noreferrer">
              <Button variant="outline-danger" title="duvvurukishore100@gmail.com">
                <i className="fas fa-envelope-square"></i> Email Me
              </Button>
            </a>
          </div>
          <div className="m-2">
            <a href="https://www.facebook.com/officialgoatourism/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline-primary" title="Visit facebook page">
                <i className="fab fa-linkedin"></i> facebook
              </Button>
            </a>
</div>
<div className="m-2">
            <a href="https://www.instagram.com/goatourism/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline-primary" title="Visit facebook page">
                <i className="fab fa-linkedin"></i> insta
              </Button>
            </a>
</div>


          </Col>
          
        </Col>
        
      </Row>
      </Container>
    {/* </Jumbotron> */}
  </div>

  )
}

export default Footer