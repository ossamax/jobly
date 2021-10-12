import React from "react";
import { useState } from "react";
import styles from "./questions.module.css";

function Questions() {
  const [faqs, setfaqs] = useState([
    {
      question: " Why wont my payment go through?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      open: false,
    },
    {
      question: "How long does it take to get a free job opening approved?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      open: false,
    },
    {
      question: "Are there bulk discounts for featured job openings?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      open: false,
    },
    {
      question: "What's the cost to post a featured job opening on Jobly?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      open: false,
    },
    {
      question: "Why won't my payment go through?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      open: false,
    },
    {
      question: "How do I redeem a coupon?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className={styles.faq}>
      <div className={styles.wrapper}>
        <div className={styles.faq_header}>
          <div className={styles.faq_span}>F.A.Q</div>
          <h1>Things people often ask about</h1>
        </div>
        <div className={styles.faq_questions}>
          {faqs.map((faq, i) => (
            <div className={styles.question_wrp} key={i}>
              <div className={styles.qst} onClick={() => toggleFAQ(i)}>
                <div className={!faq.open ? styles.plusicon : styles.rotate}>
                  +
                </div>
                <div className={styles.main_qst}>{faq.question}</div>
              </div>
              <div
                className={
                  !faq.open ? styles.respond_nonactive : styles.respond_active
                }
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
