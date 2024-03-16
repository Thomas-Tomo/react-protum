import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import Navigationbar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import styles from "./App.module.css";
import Contact from "./components/Contact";
import RisingDamp from "./pages/RisingDamp";

function App() {
  return (
    <Router>
      <div>
        <Navigationbar />
        <Container className={styles.Main}>
          <Routes>
            {" "}
            {/* Use Routes instead of Switch */}
            <Route path="/" element={<HomePage />} />{" "}
            {/* Use "element" prop instead of "component" */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/rising-damp" element={<RisingDamp />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
