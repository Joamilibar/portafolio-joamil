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
      {/* <Container fluid>
        <Row>
          <Col>
            {" "}
            <img src={fondo} alt="Fondo" className="background" />
            <img src={avatar} alt="Avatar" className="avatar" />
            <h1 className="titulo">Full Stack Developer</h1>
          </Col>
        </Row>
      </Container> */}

      <div className="header">
        <div className="container">
          <img src={fondo} alt="Fondo" className="background" />
          <img src={avatar} alt="Avatar" className="avatar" />
          <h1 className="titulo">Full Stack Developer</h1>
        </div>
      </div>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  );
}

export default App;
