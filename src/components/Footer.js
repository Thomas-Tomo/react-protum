import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyName = "Protum Services LTD.";

  return (
    <footer className={`fixed-bottom ${styles.footer}`}>
      <Container>
        <p className="mb-0">
          &copy; {currentYear} {companyName}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
