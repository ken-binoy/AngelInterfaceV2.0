import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Angelinterface provides a full spectrum of IT services, including AI solutions, software development, cybersecurity, cloud computing, and IT consulting. Whether you're looking to optimize operations, implement AI-driven insights, or secure your digital assets, we have the expertise to exceed your expectations.Angelinterface stands out as a leader in IT services due to our commitment to excellence, innovation, and client satisfaction.</p>
            
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
