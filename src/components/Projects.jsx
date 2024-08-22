import React, { useState } from "react";
import { projects } from "../data/data.js";
import "./styles/projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import github from "../assets/img/github.svg";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Projects() {
  const [products, setProducts] = useState(projects);

  const renderProject = (project) => {
    const {
      title,
      subtitle,
      description,
      tecnologies,
      image,
      www,
      repositorie,
    } = project;

    return (
      <Col key={image} md={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>
              <strong>{title}</strong>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {subtitle}
            </Card.Subtitle>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>{tecnologies}</ListGroup.Item>
            <ListGroup.Item>
              <Card.Link href={www} target="_blank" rel="noopener noreferrer">
                Website
              </Card.Link>
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link
              href={repositorie}
              target="_blank"
              rel="noopener noreferrer"
            >
              <a href={repositorie} target="_blank" rel="noopener noreferrer">
                <img src={github} className="button link" alt="Logo GitHub" />
                {""}
              </a>
            </Card.Link>
            <Card.Link
              href={repositorie}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub{" "}
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container>
      <Row>
        <Card className="text-center">
          <Card.Header></Card.Header>
          <Card.Body>
            <Card.Title>Personal Intro</Card.Title>
            <Card.Text>
              My name is Joamil Ibarra. I am a senior IT technician junior full
              stack developer, gaining experience in different technologies such
              as HTML, CSS, JavaScript, ReactJs, NodeJs, Express, MongoDb. I
              describe myself as a proactive person, flexible to changes, in
              constant self-development, initiative and curiosity to constantly
              learn. Passionate about process automation and problem solving.
              Ability to accept challenges. Great collaborative spirit and
              teamwork. Strong analytical and results-oriented skills. Eager for
              continue growing professionally.
            </Card.Text>
            <Card.Link
              variant="primary"
              href="https://www.linkedin.com/in/joamil-ibarra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Card.Link>
          </Card.Body>
          <Card.Footer className="text-muted"></Card.Footer>
        </Card>
      </Row>
      <Row>
        <Col className="section-container">{products.map(renderProject)}</Col>
      </Row>
    </Container>
  );
}

export default Projects;
