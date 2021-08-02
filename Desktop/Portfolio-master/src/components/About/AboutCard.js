import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple"> Nira Patel </span>
            from <span className="purple"> New Jersey, USA.</span>
            <br />BLANK FOR NOW
            <br />
            <br />
            BLANK FOR NOW
          </p>
          <ul>npm
            <li className="about-activity">
              <ImPointRight /> BLANK FOR NOW
            </li>
            <li className="about-activity">
              <ImPointRight /> BLANK FOR NOW
            </li>
            <li className="about-activity">
              <ImPointRight /> BLANK FOR NOW
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "BLANK FOR NOW"{" "}
          </p>
          <footer className="blockquote-footer">BLANK FOR NOW</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
