import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send email using emailJS
    emailjs
      .sendForm(
        "",
        "",
        event.target,
        ""
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // Clear form fields after submission
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <h2>Contact</h2>
        <p>
          <strong>Address:</strong> Protum Services Ltd. Bruce, Ballygarett,
          Co.Wexford.
        </p>
        <p>
          <strong>Phone:</strong> 053 94 31 003 / 087 660 1428
        </p>
        <p>
          <strong>Fax:</strong> 053 94 27 908
        </p>

        <h3>Contact Form</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Enter your Name:</label>
            <input
              type="text"
              id="name"
              name="name" // Add 'name' attribute for emailJS
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail address:</label>
            <input
              type="email"
              id="email"
              name="email" // Add 'name' attribute for emailJS
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Message Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject" // Add 'name' attribute for emailJS
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Enter your Message:</label>
            <textarea
              id="message"
              name="message" // Add 'name' attribute for emailJS
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={styles.textarea}
            ></textarea>
          </div>
          <div className={styles.formGroup}></div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
