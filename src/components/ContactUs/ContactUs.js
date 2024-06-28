import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import contactus from "../../Assets/81732-contact-us.gif"

function ContactUs() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Contact Us
        </h1>
        <p style={{ color: "gray" }}>
          Whether you have questions, feedback, or inquiries, simply click on the social icons. Your thoughts matter to us,

          and we are here to assist you every step of the way.Reach out today!
        </p>
        <SocialIcon
          url="https://www.linkedin.com/in/athundev-sudevan-4b7306248/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="mailto: support@thegreenyoga.com"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.x.com"
          fgColor="grey"
          bgColor="transparent"
        />
        <Row style={{ justifyContent: "center" }}>
        <Col md={5} style={{ paddingBottom: 10 }}>
              <img
                src={contactus}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactUs;
