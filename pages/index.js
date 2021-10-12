import Link from "next/link";
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
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import checkmark from "../public/checkmark.svg";
import Jobs from "../components/jobsPosts/jobsposts";
import Questions from "../components/questions/questions";
import Contact from "../components/contact/contact";

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

        <Jobs />

        <Questions />
        <div className={styles.testimonials}>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <div className={styles.testimonials_span}>What They Think</div>
              <h1>Testimonials</h1>
            </div>
            <Slider slides={SliderData} />

            <div className={styles.app_download}>
              <div className={styles.ipad_image}></div>
              <div className={styles.download_details}>
                <div className={styles.span}>Download Jobly Today</div>
                <h1>You can find Jobly on App and Play store</h1>
                <p>Advertise your jobs to millions of monthly users</p>

                <div className={styles.flex_list}>
                  <div className={styles.wrpflex}>
                    <div className={styles.checkmark}>
                      <Image src={checkmark} alt="checkmark svg" />
                    </div>
                    <p>Ecommerce</p>
                  </div>
                  <div className={styles.wrpflex}>
                    <div className={styles.checkmark}>
                      <Image src={checkmark} alt="checkmark svg" />
                    </div>
                    <p>Responsive Design</p>
                  </div>
                  <div className={styles.wrpflex}>
                    <div className={styles.checkmark}>
                      <Image src={checkmark} alt="checkmark svg" />
                    </div>
                    <p>Web development</p>
                  </div>
                  <div className={styles.wrpflex}>
                    <div className={styles.checkmark}>
                      <Image src={checkmark} alt="checkmark svg" />
                    </div>
                    <p>Business</p>
                  </div>
                  <div className={styles.wrpflex}>
                    <div className={styles.checkmark}>
                      <Image src={checkmark} alt="checkmark svg" />
                    </div>
                    <p>Marketing</p>
                  </div>
                  <div className={styles.wrpflex}>
                    <div className={styles.checkmark}>
                      <Image src={checkmark} alt="checkmark svg" />
                    </div>
                    <p>Designers</p>
                  </div>
                </div>

                <div className={styles.btns_wrp}>
                  <Link href="https://www.apple.com/app-store/" passHref>
                    <button className={styles.appStore}>App Store</button>
                  </Link>
                  <Link
                    href="https://play.google.com/store/apps?hl=en_US&gl=US"
                    passHref
                  >
                    <button className={styles.playStore}>Play Store</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blog}>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <div className={styles.text}>
                <h1>From Blog</h1>
                <p>Check out our latest blog posts</p>
              </div>
              <button>View All Posts</button>
            </div>
            <div className={styles.posts}>
              <div className={styles.post_one}>
                <div className={styles.overlay}></div>
                <div className={styles.post_text}>
                  <p>April 30, 2020 / Announcement</p>
                  <div className={styles.blog_title}>
                    Why your client needs a responsive website
                  </div>
                  <button>Read More</button>
                </div>
              </div>
              <div className={styles.post_two}>
                <div className={styles.overlay}></div>
                <div className={styles.post_text}>
                  <p>April 17, 2020 /Inspiration </p>
                  <div className={styles.blog_title}>
                    How to bring Jobly to your company
                  </div>
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </Layout>
    </div>
  );
}
