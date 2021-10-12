import React from "react";
import Image from "next/image";
import styles from "./jobs.module.css";
import dribble from "../../public/dribble_logo.png";
import paypal from "../../public/paypal_logo.png";
import apple from "../../public/apple_logo.png";
import starbuck from "../../public/starbucks_logo.png";
import dell from "../../public/dell_logo.png";
import slack from "../../public/slack_logo.png";

const Jobs = () => {
  return (
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
  );
};

export default Jobs;
