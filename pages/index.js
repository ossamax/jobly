import Layout from "../components/Layouts/Layout";
import styles from "../styles/Home.module.scss";
import heroLogo from "../public/logo_hero.png";
import Image from "next/image";
import partner1 from "../public/partner1.png";
import partner2 from "../public/partner2.png";
import partner3 from "../public/partner3.png";
import partner4 from "../public/partner4.png";
import feature1 from "../public/features1.png";
import feature2 from "../public/features2.png";
import feature3 from "../public/features3.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.hero}>
          <div className={styles.wrapper}>
            <div className={styles.hero_content}>
              <div className={styles.hero_span}>Build your future with us</div>
              <h1>Get your dream job with Jobly.</h1>
              <p>
                Find jobs, create trackable resumes and enrich your applications
              </p>
              <form action="">
                <input type="text" placeholder="Job Title , Keywords..." />
                <button type="submit">Find Jobs</button>
              </form>
              <div className={styles.popular_categories}>
                <div className={styles.tags_head}>Popular Categories :</div>
                <div className={styles.tags}>
                  <div>Customer Services</div>
                  <div>Project Management</div>
                  <div>Development</div>
                  <div>Design UX & UI</div>
                </div>
              </div>
            </div>
            <div className={styles.circle_wrapper}>
              <div className={styles.logo1}></div>
              <div className={styles.circle}>
                <div className={styles.hero_logo}>
                  <Image src={heroLogo} alt="Jobly Logo" />
                </div>
              </div>
              <div className={styles.logo2}></div>
              <div className={styles.logo3}></div>
              <div className={styles.logo4}></div>
              <div className={styles.logo5}></div>
              <div className={styles.logo6}></div>
            </div>
          </div>
        </div>
        <div className={styles.partners}>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <p>These companies partnered with us to drive growth</p>
            </div>
            <div className={styles.companies}>
              <div className={styles.companie_logo}>
                <Image src={partner1} alt="Friday logo" />
              </div>
              <div className={styles.companie_logo}>
                <Image src={partner2} alt="New Wave logo" />
              </div>
              <div className={styles.companie_logo}>
                <Image src={partner3} alt="The back yard logo" />
              </div>
              <div className={styles.companie_logo}>
                <Image src={partner4} alt="the retro studio" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <div className={styles.features_span}>
                Build your future with us
              </div>
              <h1>How Jobly Works</h1>
            </div>
            <div className={styles.features_grid}>
              <div className={styles.feature}>
                <Image src={feature1} alt="Resume Assessments icon" />
                <h4>Resume Assessments</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className={styles.feature}>
                <Image src={feature2} alt="Job Fit Scoring icon" />
                <h4>Job Fit Scoring</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className={styles.feature}>
                <Image src={feature3} alt="Top-Notch Help" />
                <h4>Top-Notch Help</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
