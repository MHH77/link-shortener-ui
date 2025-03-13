// src/components/HeroSection/HeroSection.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsLink45Deg, BsQrCode } from "react-icons/bs"; // Import icons

const HeroSection = () => {
  return (
    <Container className="py-5 text-center text-white">
      <Row>
        <Col>
          <h1 className="display-4 fw-bold mb-4">
            Build stronger digital connections
          </h1>
          <p className="lead mb-5">
            Use our URL shortener, QR Codes, and landing pages to engage your
            audience and connect them to the right information. Build, edit, and
            track everything inside the Bitly Connections Platform.
          </p>
          <div className="d-flex justify-content-center">
            <Button variant="light" className="me-3 text-primary">
              <BsLink45Deg className="me-2" size={24} />
              Short link
            </Button>
            <Button variant="light" className="text-primary">
              <BsQrCode className="me-2" size={24} />
              QR Code
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
