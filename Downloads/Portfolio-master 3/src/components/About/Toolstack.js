import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNetlify,
  SiVisualstudiocode,
  SiHeroku,
  SiPostman
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <div className="overlay">
          <div className="fadeText">
            Netlify
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
        <div className="overlay">
          <div className="fadeText">
            GitHub
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="overlay">
          <div className="fadeText">
            VS Code
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <div className="overlay">
          <div className="fadeText">
            Heroku
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="overlay">
          <div className="fadeText">
            Postman
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;

