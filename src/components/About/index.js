import React from "react";

import "./style.css";

function About() {
  const styling = {
    marginTop: "50px",
  };

  return (
    <div className="container" style={styling}>
      <div className="card border-info">
        <div className="card-body">
          <h3 className="card-title">About Me:</h3>
          <div className="card-text">
            Hello and welcome to my page!
            <br />
            <br />
            Graduated from the Full Stack Coding Bootcamp, UofT, Toronto,
            Canada. My tech skills include, but are not limited to: JavaScript
            (ES6, both vanilla and using libraries such as JQuery), HTML5 and
            CSS3, React, NodeJS, SQL, and MongoDB. My journey into programming
            is just beginning but I consider my passion for knowledge and
            constant improvement an invaluable asset for the field.
            <br />
            <br />
            In my previous career I was an hospitality professional, in the past
            10 years I went from Front of the House to the Back of the House,
            this journey made me appreciate all the different aspects of the
            restaurant business, from providing excellent service and working in
            direct contact with the customers, to managing the kitchen staff,
            monitoring the storage and dealing with suppliers. The intense
            workload and fast paced environment of the industry made me develop
            a great sense of Time Management, Problem-Solving, Teamwork,
            Communication, Effectiveness and Resilience.
            <br />
            <br />
            When I'm not coding or learning something new, I like exercising,
            reading, and cooking. From time to time I get obsessed with a new
            subject.. in the last few months it's been anything related to space
            and astronomy.
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
