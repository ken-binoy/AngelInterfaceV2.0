import React from "react";
import Card from "react-bootstrap/Card";

function WhyChooseUsCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
                Angelinterface stands out as a leader in IT services due to
                our commitment to excellence, innovation, and client
                satisfaction.
              </p>
              <ul style={{ textAlign: "justify" }}>
                <li>Excellence in service delivery</li>
                <li>Innovative solutions</li>
                <li>Client-focused approach</li>
                <li>Global presence</li>
                <li>Continuous innovation</li>
                <li>Quality assurance</li>
              </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WhyChooseUsCard;
