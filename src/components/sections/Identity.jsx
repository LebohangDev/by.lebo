'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import styles from '../../styles/Identity.module.css';

const lines = ['creator.', 'builder.', 'explorer.'];

export default function Identity() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className={styles.section} id="about">
      <div className={styles.inner} ref={ref}>

        {/* Left: Brand block */}
        <div className={styles.leftCol}>
          {/* Logo */}
          <motion.div
            className={styles.logoRow}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.logo}>by.lebo</span>
            <span className={styles.logoStar}>✦</span>
          </motion.div>

          {/* Japanese */}
          <motion.div
            className={styles.jpRow}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className={styles.jpMain}>君のままで</span>
            <span className={styles.jpSub}>keep being you.</span>
          </motion.div>

          {/* Big headline */}
          <div className={styles.headline} aria-label="creator. builder. explorer.">
            {lines.map((line, i) => (
              <motion.span
                key={line}
                className={`${styles.headlineWord} ${i === lines.length - 1 ? styles.blue : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            ))}
          </div>

          {/* Globe icon */}
          <motion.div
            className={styles.globeRow}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <GlobeIcon />
          </motion.div>
        </div>

        {/* Right: Bio */}
        <motion.div
          className={styles.rightCol}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.location}>
            <span className={styles.locationDot} />
            <span style={{ letterSpacing: '0.3em', fontSize: '1.1rem' }}>🇦🇪 🇿🇦 🇱🇸</span>
          </p>
          <div className={styles.titles}>
            <span className={styles.titleChip}>Full-Stack Developer</span>
            <span className={styles.divider}>|</span>
            <span className={styles.titleChip}>SaaS Builder</span>
          </div>
          <p className={styles.bio}>Still learning.</p>

          <div className={styles.dividerLine} />

          <p className={styles.storyText}>
            First Class Honours BSc Information Technology from Middlesex University Dubai. MSc in Networking & Cloud Computing.
            Volleyball Captain. Now building <strong>Creators Blueprint</strong> — an AI
            SaaS that helps creators package and sell their knowledge.
          </p>
          <p className={styles.storyText}>
            Cloud enthusiast — GCP & AWS. Relentless problem solver. Always moving forward.
          </p>

          {/* Stats */}
          <div className={styles.stats}>
            {[
              { v: '1st', l: 'Class Honours' },
              { v: 'MSc', l: 'Networking & Cloud' },
              { v: 'GCP', l: '+ AWS' },
              { v: '15+', l: 'Projects shipped' },
            ].map((s) => (
              <div key={s.l} className={styles.stat}>
                <span className={styles.statVal}>{s.v}</span>
                <span className={styles.statLabel}>{s.l}</span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className={styles.ctas}>
            <a href="#projects" className={styles.btnPrimary}>View Projects</a>
            <a href="#bento" className={styles.btnOutline}>My Journey</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function GlobeIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ opacity: 0.18 }}>
      <circle cx="28" cy="28" r="26" stroke="#3071F7" strokeWidth="1.5"/>
      <ellipse cx="28" cy="28" rx="13" ry="26" stroke="#3071F7" strokeWidth="1.5"/>
      <line x1="2" y1="28" x2="54" y2="28" stroke="#3071F7" strokeWidth="1.5"/>
      <path d="M6 18 Q28 26 50 18" stroke="#3071F7" strokeWidth="1.5" fill="none"/>
      <path d="M6 38 Q28 30 50 38" stroke="#3071F7" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}
