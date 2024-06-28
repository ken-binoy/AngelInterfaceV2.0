import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import Home2 from "./Home2";
import Footer from "../Footer";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <p className="home-about-body">
                Implement AI-driven insights, or secure your digital assets, we have the expertise to exceed your expectations
                </p>
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
        <Home2/ >
      </Container>
      <Container fluid className="home-about-section" id="about">
      </Container>
    </section>
  );
}

export default Home;
