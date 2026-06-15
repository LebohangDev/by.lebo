'use client';
import { motion } from 'framer-motion';
import styles from '../../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.grid}>
        
        {/* Top layer: annotations */}
        <div className={styles.topNav}>
          <div className={styles.navLeft}>
            <span className={styles.badge}>VER 1.0.0</span>
          </div>
          <div className={styles.navRight}>
            <span className={styles.jpText}>クラウドエンジニア</span>
            <span className={styles.monoLight}>ZA // DUBAI</span>
          </div>
        </div>

        {/* Center: Massive Typography & Pinterest collage */}
        <div className={styles.centerStage}>
          {/* Background Orbits */}
          <div className={styles.orbitContainer}>
            <div className={styles.orbitLine} />
            <div className={styles.orbitLine2} />
          </div>

          <div className={styles.titleWrapper}>
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className={styles.firstName}>LEBOHANG</span>
              <span className={styles.lastName}>KHASIPE.</span>
            </motion.h1>
            
            {/* Floating Pinterest style abstract card */}
            <motion.div 
              className={styles.floatCard}
              initial={{ opacity: 0, y: 30, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.floatCardInner}>
                 <div className={styles.floatHeader}>
                   <span className={styles.floatLabel}>IDENTITY</span>
                   <span className={styles.floatDot}></span>
                 </div>
                 <p className={styles.floatDesc}>
                   MSc Cloud Computing & Full-Stack Builder. Engineering scalable systems with a ruthless focus on execution and aesthetics.
                 </p>
                 <div className={styles.floatLine} />
                 <span className={styles.floatSub}>FOCUS · EXECUTE · ELEVATE</span>
              </div>
            </motion.div>

            {/* Stars */}
            <span className={styles.star1}>✦</span>
            <span className={styles.star2}>★</span>
          </div>
        </div>

        {/* Bottom layer */}
        <motion.div 
          className={styles.bottomNav}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className={styles.bottomLeft}></div>
          <div className={styles.bottomRight}>
            <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
