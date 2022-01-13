import React from "react";
import { Col, Row } from "react-bootstrap";
import {Rubyonrails, Nextdotjs} from '@styled-icons/simple-icons'

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiRuby,
  DiGit,
  DiPostgresql,
  DiHtml5,
  DiCss3
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiRuby />
        <div className="overlay">
          <div className="fadeText">
            Ruby
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Rubyonrails size="98"/>
        <div className="overlay">
          <div className="fadeText">
            Rails
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Nextdotjs size="60"/>
        <div className="overlay">
          <div className="fadeText">
            NextJs
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql  />
        <div className="overlay">
          <div className="fadeText">
            PostgreSQL
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="overlay">
          <div className="fadeText">
            JavaScript
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="overlay">
          <div className="fadeText">
            ReactJS
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="overlay">
          <div className="fadeText">
            NodeJS
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <div className="overlay">
          <div className="fadeText">
            HTML
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <div className="overlay">
          <div className="fadeText">
            CSS
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="overlay">
          <div className="fadeText">
            Git
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;

