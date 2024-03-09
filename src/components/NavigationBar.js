import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../styles/NavigationBar.module.css";
import logo from "../assets/logo-protum.jpg";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className={styles.NavigationBar}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.logo}>
          <img src={logo} alt="Protum Services ltd. Logo" height="70" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navItems}>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown title="Damp Proofing" id="basic-nav-dropdown-sub">
                <NavDropdown.Item href="#action/3.4.1">
                  Rising Damp
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Penetrating Damp
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Damp Floors
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Lectros
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Chemical Injection
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">DPM</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Timber Treatment" id="basic-nav-dropdown-sub">
                <NavDropdown.Item href="#action/3.4.1">
                  Wet Rot
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Dry Rot
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Woodworm
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Chemical Treatment
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Wood Paste
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Boron Gel / Boron Rods
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Waterproofing" id="basic-nav-dropdown-sub">
                <NavDropdown.Item href="#action/3.4.1">
                  Basements / Cellars / New Builds
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Concrete Decks
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Tanking Systems
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Cavity Drain Systems
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Bitumen & Liquid Membranes
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Radon Protection
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Crack Injection
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Condensation" id="basic-nav-dropdown-sub">
                <NavDropdown.Item href="#action/3.4.1">
                  Condensation Problems
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Moisture Monitoring
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Heat Recovery Units
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Loft Units
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Ventilation
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Masonry" id="basic-nav-dropdown-sub">
                <NavDropdown.Item href="#action/3.4.1">
                  Damaged Masonry
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Pointing/Cleaning/Sealing
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Rotec Cleaning System
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Concrete Repair" id="basic-nav-dropdown-sub">
                <NavDropdown.Item href="#action/3.4.1">
                  Damaged Concrete
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Construction Joints
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Crack Injection
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Surface Impregnation
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Surface Coating
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Corrosion Inhibitors
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Repair Mortars
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Plastering" id="basic-nav-dropdown-sub">
                <NavDropdown.Item href="#action/3.4.1">
                  Damaged Renders
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  Specialist Lime Mortar Repair
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4.2">
                  IQ Therm
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown.Divider />

            <Nav.Link href="#link1">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
