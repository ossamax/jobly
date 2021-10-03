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
import dribble from "../public/dribble_logo.png";
import paypal from "../public/paypal_logo.png";
import apple from "../public/apple_logo.png";
import starbuck from "../public/starbucks_logo.png";
import dell from "../public/dell_logo.png";
import slack from "../public/slack_logo.png";
import plusIcon from "../public/plus_icon.png";

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
        <div className={styles.jobs}>
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <div className={styles.header_text}>
                <h1>Featured Jobs</h1>
                <p>Know your worth and find the job that qualify your life</p>
              </div>
              <button>View All Listing</button>
            </div>
            <div className={styles.jobs_ctegories}>
              <div className={styles.allCategories}>All Categories :</div>
              <div className={styles.Categories}>
                <div>Customer Services</div>
                <div>Project Management</div>
                <div>Development</div>
                <div>Design</div>
                <div>Marketing</div>
                <div>Accounting / Finance</div>
              </div>
            </div>

            <div className={styles.jobsList}>
              <div className={styles.job}>
                <div className={styles.partTime}>Part Time</div>
                <Image src={dribble} alt="dribble logo" />
                <p>Dribbble</p>
                <h2>Customer Support Agent</h2>
                <div className={styles.description}>
                  <div>$40,000 - $200,000/year</div>
                  <div>/</div>
                  <div>Remote</div>
                  <div>/</div>
                  <div>Project Management</div>
                  <div>/</div>
                  <div>Part Time</div>
                </div>
                <button>Apply For Job</button>
              </div>
              <div className={styles.job}>
                <div className={styles.partTime}>Part Time</div>
                <div className={styles.featured}>Featured</div>
                <Image src={paypal} alt="paypal logo" />
                <p>PayPal</p>
                <h2>General Ledger Accountant</h2>
                <div className={styles.description}>
                  <div>$40,000 - $200,000/year</div>
                  <div>/</div>
                  <div>Miami,FL</div>
                  <div>/</div>
                  <div>Accounting / Finance</div>
                  <div>/</div>
                  <div>Part Time</div>
                </div>
                <button>Apply For Job</button>
              </div>
              <div className={styles.job}>
                <div className={styles.partTime}>Part Time</div>
                <Image src={apple} alt="apple logo" />
                <p>Apple</p>
                <h2>Senior Product Designer</h2>
                <div className={styles.description}>
                  <div>$40,000 - $200,000/year</div>
                  <div>/</div>
                  <div>London, UK</div>
                  <div>/</div>
                  <div>Design</div>
                  <div>/</div>
                  <div>Part Time</div>
                </div>
                <button>Apply For Job</button>
              </div>
              <div className={styles.job}>
                <div className={styles.partTime}>Part Time</div>
                <Image src={starbuck} alt="sturbucks logo" />
                <p>Starbuck</p>
                <h2>Product Manager</h2>
                <div className={styles.description}>
                  <div>$40,000 - $200,000/year</div>
                  <div>/</div>
                  <div>Manhattan, NY</div>
                  <div>/</div>
                  <div>Development</div>
                  <div>/</div>
                  <div>Full Time</div>
                </div>
                <button>Apply For Job</button>
              </div>
              <div className={styles.job}>
                <div className={styles.partTime}>Full Time</div>
                <Image src={dell} alt="dell logo" />
                <p>Dell</p>
                <h2>Software Engineer</h2>
                <div className={styles.description}>
                  <div>$40,000 - $200,000/year</div>
                  <div>/</div>
                  <div>Remote</div>
                  <div>/</div>
                  <div>Development</div>
                  <div>/</div>
                  <div>Full Time</div>
                </div>
                <button>Apply For Job</button>
              </div>
              <div className={styles.job}>
                <div className={styles.partTime}>Part Time</div>
                <div className={styles.featured}>Featured</div>
                <Image src={slack} alt="apple logo" />
                <p>Slack</p>
                <h2>Senior Product Designer</h2>
                <div className={styles.description}>
                  <div>$40,000 - $200,000/year</div>
                  <div>/</div>
                  <div>London, UK</div>
                  <div>/</div>
                  <div>Design</div>
                  <div>/</div>
                  <div>Part Time</div>
                </div>
                <button>Apply For Job</button>
              </div>
            </div>
            <div className={styles.selectLocation}>Select By Location</div>
            <div className={styles.locations}>
              <div className={styles.miami}>
                <h3>Miami,FL</h3>
                <div className={styles.locationOverlay}></div>
              </div>
              <div className={styles.morocco}>
                <h3>Morocco ,RB</h3>
                <div className={styles.locationOverlay}></div>
              </div>
              <div className={styles.france}>
                <h3>France,PR</h3>
                <div className={styles.locationOverlay}></div>
              </div>
              <div className={styles.remote}>
                <h3>Remote</h3>
                <div className={styles.locationOverlay}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.faq}>
          <div className={styles.wrapper}>
            <div className={styles.faq_header}>
              <div className={styles.faq_span}>F.A.Q</div>
              <h1>Things people oftenask about</h1>
            </div>
            <div className={styles.faq_questions}>
              <div className={styles.question_wrp}>
                <div className={styles.qst}>
                  <div className={styles.plusicon}>
                    <Image src={plusIcon} alt="plus icon" />
                  </div>
                  <div className={styles.main_qst}>
                    Why wont my payment go through?
                  </div>
                </div>
                <div className={styles.respond_active}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique
                </div>
              </div>
              <div className={styles.question_wrp}>
                <div className={styles.qst}>
                  <div className={styles.plusicon}>
                    <Image src={plusIcon} alt="plus icon" />
                  </div>
                  <div className={styles.main_qst}>
                    Why wont my payment go through?
                  </div>
                </div>
                <div className={styles.respond_active}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique
                </div>
              </div>
              <div className={styles.question_wrp}>
                <div className={styles.qst}>
                  <div className={styles.plusicon}>
                    <Image src={plusIcon} alt="plus icon" />
                  </div>
                  <div className={styles.main_qst}>
                    How do I redeem a coupon?
                  </div>
                </div>
                <div className={styles.respond_active}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique
                </div>
              </div>
              <div className={styles.question_wrp}>
                <div className={styles.qst}>
                  <div className={styles.plusicon}>
                    <Image src={plusIcon} alt="plus icon" />
                  </div>
                  <div className={styles.main_qst}>
                    How long does it take to get a free job opening approved?
                  </div>
                </div>
                <div className={styles.respond_active}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique
                </div>
              </div>
              <div className={styles.question_wrp}>
                <div className={styles.qst}>
                  <div className={styles.plusicon}>
                    <Image src={plusIcon} alt="plus icon" />
                  </div>
                  <div className={styles.main_qst}>
                    Are there bulk discounts for featured job openings?
                  </div>
                </div>
                <div className={styles.respond_active}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique
                </div>
              </div>
              <div className={styles.question_wrp}>
                <div className={styles.qst}>
                  <div className={styles.plusicon}>
                    <Image src={plusIcon} alt="plus icon" />
                  </div>
                  <div className={styles.main_qst}>
                    Whats the cost to post a featured job opening on Jobly?
                  </div>
                </div>
                <div className={styles.respond_active}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
