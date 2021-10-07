import React from "react";
import Image from "next/image";
import styles from "./Slider.module.css";
import logo2 from "../../public/logo_2.jpg";
import logo1 from "../../public/logo_1.jpg";
import logo3 from "../../public/logo_3.jpg";
import { SliderData } from "./SliderData";
import { useState } from "react";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const firstSlider = () => {
    setCurrent(0);
  };
  const secondSlider = () => {
    setCurrent(1);
  };
  const thirdSlider = () => {
    setCurrent(2);
  };

  return (
    <>
      <div className={styles.testimonials_wrapper}>
        {SliderData.map((t, i) => (
          <div className={current === i ? styles.active : styles.hide} key={i}>
            <div className={styles.testi_image}>
              <Image src={t.image} alt="image" />
            </div>
            <p>{t.text}</p>
            <div className={styles.name}>{t.name}</div>
            <div className={styles.job}>{t.job}</div>
          </div>
        ))}
      </div>
      <div className={styles.btns}>
        <div
          className={styles.btn_active}
          onClick={() => {
            firstSlider();
          }}
        ></div>
        <div
          onClick={() => {
            secondSlider();
          }}
        ></div>
        <div
          onClick={() => {
            thirdSlider();
          }}
        ></div>
      </div>
    </>
  );
};

export default Slider;
