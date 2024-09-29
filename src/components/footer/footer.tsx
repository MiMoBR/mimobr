import React from 'react';
import style from './style.module.css';
import Button from 'react-bootstrap/Button';
import { Container, Col, Row } from 'react-bootstrap';

interface FooterProps {
  copyrightText?: string; // Optional prop for copyright text
}

const defaultCopyrightText = '© 2024 MiMoBR.Ltd';

export default function Footer( {copyrightText= defaultCopyrightText} ) {
  return (
    <footer className={style.component_footer}>
      <Container>
        <Row>
            <Col xs={12} md={6}>
                <p className={style.font_special_ux}>{copyrightText}</p>
            </Col>
            <Col xs={12} md={6}>
                <div className={style.menu_links}>
                    <a target='_blank' href="https://www.linkedin.com/in/reinaldonani/" className={style.font_special_ux}>
                        LinkedIn
                    </a>
                    <p className={style.font_special_ux}> / </p>
                    <a target='_blank' href="https://www.instagram.com/iamreinaldonani/" className={style.font_special_ux}>
                        Instagram
                    </a>
                    <p className={style.font_special_ux}> / </p>
                    <a target='_blank' href="https://twitter.com/iamreinaldonani" className={style.font_special_ux}>
                        X Twitter
                    </a>
                </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
