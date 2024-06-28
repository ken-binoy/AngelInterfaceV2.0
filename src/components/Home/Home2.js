import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import service1 from "./svg1.svg";
import service2 from "./svg2.svg";
import service3 from "./svg3.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Heading Section */}
        <Row>
          <Col>
            <div className="services-heading">
              <h2 style={{ marginBottom: "60px" }}>Our Services</h2>
              <p>
                Angelinterface provides a full spectrum of IT services,
                including AI solutions, software development, cybersecurity,
                cloud computing, and IT consulting. Whether you're looking to
                optimize operations, implement AI-driven insights, or secure
                your digital assets, we have the expertise to exceed your
                expectations.
              </p>
            </div>
          </Col>
        </Row>

        {/* Services Items Section */}
        <Row>
          <Col md={6}>
            <div className="services-images">
              <div className="service-item">
                <img src={service1} alt="Service 1" />
                <div>
                  <h3>AI Solutions</h3>
                  <p>
                    A range of technologies and services that leverage
                    artificial intelligence to solve business problems
                  </p>
                </div>
              </div>
              <div className="service-item">
                <img src={service2} alt="Service 2" />
                <div>
                  <h3>Software Development</h3>
                  <p>
                    The process of designing, creating, deploying, and
                    maintain software applications and systems.
                  </p>
                </div>
              </div>
              <div className="service-item">
                <img src={service3} alt="Service 3" />
                <div>
                  <h3>Cybersecurity</h3>
                  <p>
                    Cybersecurity refers to the practice of protecting systems,
                    networks, and data from digital attacks.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="services-images">
              <div className="service-item">
                <img src={service1} alt="Service 4" />
                <div>
                  <h3>Cloud Computing</h3>
                  <p>
                    Cloud computing provides access to computing resources over
                    the internet, offering scalability, flexibility, and
                    cost-efficiency for businesses.
                  </p>
                </div>
              </div>
              <div className="service-item">
                <img src={service3} alt="Service 5" />
                <div>
                  <h3>IT Consulting</h3>
                  <p>
                    IT consulting services provide expert advice and guidance
                    on technology strategies, implementations, and optimizations
                    to drive business success.
                  </p>
                </div>
              </div>
              <div className="service-item">
                <img src={service2} alt="Service 6" />
                <div>
                  <h3>Data Analytics</h3>
                  <p>
                    Data analytics involves examining large datasets to uncover
                    trends, patterns, and insights that can inform business
                    decisions and strategies.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
