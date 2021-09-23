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

  return (
    <div className={styles.container}>
      <Head>
        <title>Jobly - find your dream job </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.navigation}>
          <Link href="/">
            <div className={styles.logo}>
              <Image src={logo} alt="Jobly logo brand" />
            </div>
          </Link>

          <div className={styles.bar_container}>
            <Image
              src={barMenu}
              alt="Jobly logo brand"
              className={styles.barMenu}
            />
          </div>

          <div className={styles.nav_links}>
            <div className={styles.link}>Home </div>

            <div className={styles.link}>Jobs</div>

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
                <div>Customer Services</div>
                <div>Project Management</div>
                <div>Development</div>
                <div>Design</div>
                <div>Marketing</div>
                <div>Accounting / Finance</div>
              </div>
            </div>
          </div>
          <div className={styles.cta_container}>
            <button className={styles.cta_login}>Login / Register</button>
          </div>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
};

export default Layout;
