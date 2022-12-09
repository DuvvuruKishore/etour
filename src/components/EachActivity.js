import React from 'react';

import Card from 'react-bootstrap/Card';
import Eimg from '../images/etour.png';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useDrag } from "react-dnd";



function EachActivity({ id, activity ,TimeDuration}) {
//  console.log(activity,"activity")
 const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
   
  return (<div style={{marginBottom:"10px",marginTop:"10px"}} ref={drag}>        
    <Card style={{ width: '12rem',height:'15rem' }}>
  <img variant="top" src={Eimg} style={{height:'120px'}}/>
  <Card.Body >
    <Card.Title>{activity}</Card.Title>
    <p>TimeDuration: {TimeDuration}</p>
    {/* <Button variant="primary">know more</Button> */}
  </Card.Body>
</Card>
</div>
  )
}

export default EachActivity