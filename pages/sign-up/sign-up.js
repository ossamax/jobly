import React from "react";
import head from "next/head";
import Link from "next/link";
import logo from "../../public/main_logo.png";
import Image from "next/image";
import styles from "./signup.module.css";

const Signup = () => {
  return (
    <>
      <head>
        <title>Jobly - find your dream job </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <div className={styles.logo_wrapper}>
        <Link href="/" passHref>
          <Image src={logo} alt="jobly logo" />
        </Link>
      </div>
      <div className={styles.form_wrapper}>
        <div className={styles.wrapper}>
          <div className={styles.form_label}>
            <h1>Create Account</h1>
            <div className={styles.form_btns}>
              <button className={styles.active}>Condidate</button>
              <button>Employer</button>
            </div>
          </div>
          <form action="">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Last name" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Repeat Password" />
            <button type="submit">Sign Up</button>
            <div className={styles.terms}>
              <div>
                <input type="checkbox" name="" id="" />
              </div>
              <div>I agree to our Terms & Conditions.</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
