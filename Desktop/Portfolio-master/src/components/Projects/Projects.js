import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="BLANK FOR NOW"
              description="BLANK FOR NOW"
              link="NOTHING TO SHOW YET"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="BLANK FOR NOW"
              description="BLANK FOR NOW"
              link="NOTHING TO SHOW YET"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="BLANK FOR NOW"
              description="BLANK FOR NOW"
              link="NOTHING TO SHOW YET"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BLANK FOR NOW"
              description="BLANK FOR NOW"
              link="NOTHING TO SHOW YET"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="BLANK FOR NOW"
              description="BLANK FOR NOW"
              link="NOTHING TO SHOW YET"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="BLANK FOR NOW"
              description="BLANK FOR NOW"
              link="NOTHING TO SHOW YET"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
