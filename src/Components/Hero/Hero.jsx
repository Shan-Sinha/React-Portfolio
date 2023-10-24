import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../Utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shan</h1>
        <p className={styles.description}>
        I'm an aspiring Full Stack Developer with a focus on the MERN stack, eager to contribute to innovative projects. Proficient in HTML, CSS, and JavaScript, I'm ready to learn and adapt. Let's connect to discuss my work and potential collaborations!
        </p>
        <a href="mailto:shanshubham007@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
