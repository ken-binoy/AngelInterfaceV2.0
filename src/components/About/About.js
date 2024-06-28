import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import WhyChooseUsCard from "./WhyChooseUsCard";
import whyimg from "../../Assets/why-choose-us.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About Us
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
            md={5}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Why Us
            </h1>
            <WhyChooseUsCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px", paddingLeft:"90px", paddingTop:"50px" }}
            className="about-img"
          >
            <img src={whyimg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
