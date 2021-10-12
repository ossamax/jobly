import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.wrapper}>
        <div className={styles.span}>Contact Us</div>
        <h1>Got a question?</h1>
        <p>
          We are here to help. Check out our <span>FAQs</span>, send us an{" "}
          <span>email</span> or call us at <span>+1 800 444 111</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
