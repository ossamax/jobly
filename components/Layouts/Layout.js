import { useState } from "react";
import styles from "./Layouts.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/main_logo.png";
import barMenu from "../../public/bar_menu.png";
import acArrow from "../../public/ac_arrow.png";

const Layout = ({ children }) => {
  const [activecategorie, setActivecategorie] = useState(false);
  const activeLinkcategorie = () => {
    setActivecategorie(!activecategorie);
    setActivelocation(false);
  };

  const [activelocation, setActivelocation] = useState(false);
  const activeLinklocation = () => {
    setActivelocation(!activelocation);
    setActivecategorie(false);
  };

  const [mobilelinks, setMobilelinks] = useState(false);
  const activeMobilelinks = () => {
    setMobilelinks(!mobilelinks);
  };

  return (
    <>
      <Head>
        <title>Jobly - find your dream job </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.navigation}>
            <Link href="/" passHref>
              <div className={styles.logo}>
                <Image src={logo} alt="Jobly logo brand" />
              </div>
            </Link>

            <div
              className={mobilelinks ? styles.mobile_links : styles.nav_links}
            >
              <Link href="/" passHref>
                <div className={styles.link}>Home </div>
              </Link>
              <Link href="../jobs/jobs" passHref>
                <div className={styles.link}>Jobs</div>
              </Link>

              <div className={styles.link}>
                <div
                  className={styles.flex_categories}
                  onClick={activeLinkcategorie}
                >
                  Categories
                  <div className={styles.arrow_container}>
                    <Image
                      src={acArrow}
                      alt="Jobly logo brand"
                      className={styles.arrow}
                    />
                  </div>
                </div>
                <div
                  className={
                    activecategorie
                      ? styles.sublinks_categories_active
                      : styles.sublinks_categories_noneactive
                  }
                >
                  <div>Customer Services</div>
                  <div>Project Management</div>
                  <div>Development</div>
                  <div>Design</div>
                  <div>Marketing</div>
                  <div>Accounting / Finance</div>
                </div>
              </div>
              <div className={styles.link}>
                <div
                  className={styles.flex_location}
                  onClick={activeLinklocation}
                >
                  Locations
                  <div className={styles.arrow_container}>
                    <Image
                      src={acArrow}
                      alt="Jobly logo brand"
                      className={styles.arrow}
                    />
                  </div>
                </div>
                <div
                  className={
                    activelocation
                      ? styles.sublinks_categories_active
                      : styles.sublinks_categories_noneactive
                  }
                >
                  <div>Morocco , MR</div>
                  <div>France , EU</div>
                  <div>London ,UK</div>
                  <div>Manhattan ,NY</div>
                  <div>Remote</div>
                </div>
              </div>
              <Link href="../sign-in/sign-in" passHref>
                <div className={styles.sign}>Sign in</div>
              </Link>
              <Link href="../sign-up/sign-up" passHref>
                <div className={styles.sign}>Sign up</div>
              </Link>
            </div>
            <div className={styles.cta_container}>
              <Link href="../sign-up/sign-up" passHref>
                <button className={styles.cta_login}>Login / Register</button>
              </Link>

              <div className={styles.bar_container} onClick={activeMobilelinks}>
                <Image
                  src={barMenu}
                  alt="Jobly logo brand"
                  className={styles.barMenu}
                />
              </div>
            </div>
          </div>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <Image src={logo} alt="jobly logo" />
            </div>
            <div className={styles.links_wrapper}>
              <div className={styles.navigation}>
                <h3>Navigation</h3>
                <Link href="/" passHref>
                  <div className={styles.link}>Home </div>
                </Link>
                <Link href="jobs/jobs" passHref>
                  <div className={styles.link}>Jobs</div>
                </Link>
                <div>Contact</div>
              </div>
              <div className={styles.categories}>
                <h3>Categories</h3>
                <div>Customer Services</div>
                <div>Project Management</div>
                <div>Development</div>
                <div>Design</div>
                <div>Marketing</div>
                <div>Accounting / Finance</div>
              </div>
              <div className={styles.location}>
                <h3>Navigation</h3>
                <div>Morocco , NA</div>
                <div>France ,UE</div>
                <div>London ,UK</div>
                <div>Manhattan,NY</div>
                <div>Remote</div>
              </div>
            </div>
            <div className={styles.copyrights}> @ All Rights are reserved</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
