import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container fluid>
                    <Row>
                        <Col sm={6}>
                            {new Date().getFullYear()} © Swipe36.
                        </Col>
                       
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
};

export default Footer;