import React from "react";
import Layout from "../../components/Layouts/Layout";
import styles from "./jobs.module.css";
import arrowicon from "../../public/arrow-bread.svg";
import Image from "next/image";
import Link from "next/link";

const Jobs = () => {
  return (
    <>
      <Layout>
        <div className={styles.hero}>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <h1>Find your dream job</h1>
              <p>
                Find jobs, create trackable resumes and enrich your applications
              </p>
            </div>
            <div className={styles.links}>
              <div className={styles.links_wrp}>
                <Link href="/" passHref>
                  <div className={styles.home}>Home</div>
                </Link>
                <div>
                  <Image src={arrowicon} alt="arrow svg"></Image>
                </div>
                <Link href="/" passHref>
                  <div className={styles.jobs}>Jobs</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Jobs;
