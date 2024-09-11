import React from 'react'

import styles from "./Hobby.module.css";
import { getImageUrl } from '../../utils'

export const Hobby = () => {
  return (
    <section className={styles.container} id="hobby">
        <h2 className={styles.title}>Hobby</h2>
        <div className={styles.content}>
            <img src={getImageUrl("hobby/mayuri.png")} alt="mayurifull" className={styles.hobbyImage} />
            <ul className={styles.hobbyItems}>
                <li className={styles.hobbyItem}>
                    <img src={getImageUrl("hobby/ball.png")} alt="ball icon" className={styles.hobbyPng} />
                    <div className={styles.hobbyItemText}>
                        <h3>Sport</h3>
                        <p>Basketball is more than just a sport for me, it's a passionate pursuit that blends athleticism, strategy, and teamwork.</p>
                    </div>
                </li>
                <li className={styles.hobbyItem}>
                    <img src={getImageUrl("hobby/music.png")} alt="music icon" className={styles.hobbyPng} />
                    <div className={styles.hobbyItemText}>
                        <h3>Music</h3>
                        <p>Rave techno is more than just a genre of electronic music, it's a vibrant subculture that revolves around pulsating beats, hypnotic rhythms, and immersive sensory experiences.</p>
                    </div>
                </li>
                <li className={styles.hobbyItem}>
                    <img src={getImageUrl("hobby/anime.png")} alt="anime icon" className={styles.hobbyPng} />
                    <div className={styles.hobbyItemText}>
                        <h3>Anime</h3>
                        <p>The storytelling in anime is renowned for its intricate plots, character development, and emotional depth.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
