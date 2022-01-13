import React from "react";
import Card from "react-bootstrap/Card";
import { FaPlane } from "react-icons/fa";
import { GiRetroController, GiBasketballBasket } from "react-icons/gi";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Niraj Patel </span>
            from <span className="blue"> New Jersey. </span>
            I am a Software Engineer with experience 
            in building and maintaining responsive websites.
            <br />
            <br />
            <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            Proficient in HTML, CSS, JavaScript, Ruby and plus modern 
            libraries and frameworks such as ReactJs, NextJs and Rails.
          </p>
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <GiRetroController /> Playing Games
            </li>
            <li className="about-activity">
              <FaPlane /> Traveling
            </li>
            <li className="about-activity">
              <GiBasketballBasket /> Playing Basketball
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
