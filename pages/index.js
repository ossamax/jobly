import Layout from "../components/Layouts/Layout";
import styles from "../styles/Home.module.scss";

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
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
