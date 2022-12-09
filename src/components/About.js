import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="App">
       <h1> know about us</h1>
       <p>
       First things first: if you don’t have an About page, you need to make one—soon. Don’t write them off as a cliché, or assume that customers will learn all they need to know from your homepage. As a tour operator, telling stories is second nature. So, you need to ask yourself “what’s our story?”.

Every site needs an About section; don’t conceal it or make it difficult to find. It should be part of your main navigation and accessible from every other page; it’s often one of the most-visited areas of a website.


       </p>
       <Link to="/">back home</Link>

    </div>
  )
}

export default About