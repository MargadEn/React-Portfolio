import React from 'react'

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi</h1>
        <p className={styles.description}>My name is Margad and I come from Mongolia.</p>
        <p className={styles.description}>I'm a student of Computer Science at the University of Debrecen.</p>
        <a href="mailto:enkhbayarmargad79@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/giphy.webp")} alt="Mayuri" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  );
};
