import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

interface FooterProps {
  copyrightText?: string; // Optional prop for copyright text
}

export default function Footer({ copyrightText = '© 2024 Your Company Name' }) {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            {copyrightText}
          </Col>
          {/* Add additional content for the other column (optional) */}
        </Row>
      </Container>
    </footer>
  );
};
