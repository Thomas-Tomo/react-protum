import React from "react";
import banner from "../assets/protum-banner.jpg";
import { Container } from "react-bootstrap";
import styles from "../styles/HomePage.module.css";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import c1 from "../assets/damp-proofing.jpg";
import c2 from "../assets/timber-treatment.jpg";
import c3 from "../assets/condensation.jpg";
import c4 from "../assets/masonry.jpg";
import c5 from "../assets/new-builds.jpg";
import c6 from "../assets/plastering.jpg";
import YouTubeVideo from "../components/YouTubeVideo";

const HomePage = () => {
  return (
    <>
      <Container className={styles.container}>
        {/* Image */}
        <img src={banner} alt="Company Services" className={styles.banner} />

        {/* Text */}
        <Card>
          <Card.Body>
            Protum Services have over thirty years experience in providing
            restoration services in Ireland, carrying out preservation works on
            historic buildings ( restoring them to their former glory ) as well
            as providing solutions for modern industrial/commercial projects and
            domestic homes.
          </Card.Body>

          <Card.Body>
            New and old houses in Ireland suffer from penetrating damp, rising
            damp, wood rot and dampness.
          </Card.Body>

          <Card.Body>
            Protum Services have the solution, we will protect your family home
            or business from these problems and create a safe environment for
            all.
          </Card.Body>

          <Card.Body>
            Protum Services are Specialists in damp proofing, dry rot treatment,
            wet rot treatment, timber treatments, and stuctural waterproofing.
            We are specialists in Ireland for; damp proofing, water proofing,
            below ground tanking, and for treating woodworm, wet rot, dry rot,
            and rising damp.
          </Card.Body>
        </Card>
        <h1>Featured Services</h1>
        <div className={styles.imageGallery}>
          <div className={styles.imageContainer}>
            <div className={styles.itemContainer}>
              <img src={c1} alt="Image 1" className={styles.round} />
              <h3>Damp Proofing</h3>
            </div>
            <div className={styles.itemContainer}>
              <img src={c2} alt="Image 2" className={styles.round} />
              <h3>Timber Treatment</h3>
            </div>
            <div className={styles.itemContainer}>
              <img src={c3} alt="Image 3" className={styles.round} />
              <h3>Condensation</h3>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.itemContainer}>
              <img src={c4} alt="Image 5" className={styles.round} />
              <h3>Masonry</h3>
            </div>
            <div className={styles.itemContainer}>
              <img src={c5} alt="Image 6" className={styles.round} />
              <h3>New Builds</h3>
            </div>
            <div className={styles.itemContainer}>
              <img src={c6} alt="Image 7" className={styles.round} />
              <h3>Plastering</h3>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.itemContainer}>
            <YouTubeVideo videoId="X_3bjsyEz_U" />
            <h3>Rising Damp</h3>
          </div>
          <div className={styles.itemContainer}>
            <YouTubeVideo videoId="ZbOLZbpAIh4" />
            <h3>Wood Worm</h3>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
