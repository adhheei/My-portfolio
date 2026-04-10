import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const CustomNavbar = () => {
    const location = useLocation();
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Navbar
            expanded={expanded}
            onToggle={(expanded) => setExpanded(expanded)}
            expand="lg"
            variant="dark"
            className="navbar-custom py-3"
            sticky="top"
        >
            <Container>
                <Navbar.Brand href="#home" onClick={() => setExpanded(false)} className="d-flex align-items-center fw-bold text-accent">
                    <Code2 className="me-2" size={32} />
                    <span style={{ fontSize: '1.5rem' }}>ADITHYA MV</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" onClick={() => setExpanded(false)} className="nav-link-custom">Home</Nav.Link>
                        <Nav.Link href="#about" onClick={() => setExpanded(false)} className="nav-link-custom">About</Nav.Link>
                        <Nav.Link href="#skills" onClick={() => setExpanded(false)} className="nav-link-custom">Skills</Nav.Link>
                        <Nav.Link href="#projects" onClick={() => setExpanded(false)} className="nav-link-custom">Projects</Nav.Link>
                        <Nav.Link href="#contact" onClick={() => setExpanded(false)} className="nav-link-custom">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
