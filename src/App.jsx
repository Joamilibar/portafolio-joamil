import { useState } from "react";
import avatar from "./assets/img/avatar.svg";
import "./logo.css";
import fondo from "./assets/img/fondo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container fluid>
        <Row className="">
          <Col></Col>
          <Col>
            <div className="container">
              <img src={fondo} alt="Fondo" className="background" />
              <div className="overlay">
                <img src={avatar} alt="avatar" className="avatar" />
                <div className="titulo">
                  <h1>Full Stack Developer</h1>
                  <h2>Joamil Ibarra</h2>
                </div>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
