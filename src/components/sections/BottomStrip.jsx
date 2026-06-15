'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import styles from '../../styles/BottomStrip.module.css';

const currentlyTags = ['Building', 'Learning', 'Volleyball', 'Anime', 'Discipline', 'Gym', 'Entrepreneurship'];

const goals = [
  'Help 1,000+ creators',
  'Build in public',
  'Financial freedom',
  'Travel the world',
];

const findMe = [
  { label: '@by.lebo', sub: 'Instagram', href: 'https://instagram.com/by.lebo', icon: '◎' },
  { label: 'LebohangDev', sub: 'GitHub', href: 'https://github.com/LebohangDev', icon: '⬡' },
  { label: 'by-lebo.com', sub: 'Website', href: '#', icon: '◈' },
];

export default function BottomStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className={styles.section} id="contact" ref={ref}>
      <div className={styles.inner}>

        {/* Daily reminder */}
        <motion.div
          className={styles.reminder}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>DAILY REMINDER</span>
          <div className={styles.reminderContent}>
            <div className={styles.jpBlock}>
              <span className={styles.jpMain}>君のままで</span>
              <span className={styles.jpSub}>keep being you.</span>
            </div>
            <span className={styles.reminderStar}>✦</span>
          </div>
        </motion.div>

        {/* Now playing */}
        <motion.div
          className={styles.nowPlaying}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08, duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>NOW PLAYING</span>
          <div className={styles.player}>
            <div className={styles.albumArt}>
              <span>🎵</span>
            </div>
            <div className={styles.trackInfo}>
              <span className={styles.trackName}>EGOIST (Brazilian Phonk)</span>
              <span className={styles.trackArtist}>Blue Lock Mix</span>
            </div>
          </div>
          <div className={styles.bars}>
            {[60, 90, 100, 70, 80, 50, 75].map((h, i) => (
              <span key={i} className={styles.bar} style={{ '--h': `${h}%`, '--delay': `${i * 0.1}s` }} />
            ))}
          </div>
        </motion.div>

        {/* Currently */}
        <motion.div
          className={styles.currently}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.16, duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>CURRENTLY</span>
          <div className={styles.tags}>
            {currentlyTags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Goals */}
        <motion.div
          className={styles.goals}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.24, duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>GOALS</span>
          <div className={styles.goalList}>
            {goals.map((g) => (
              <div key={g} className={styles.goalItem}>
                <span className={styles.goalCheck}>✓</span>
                <span className={styles.goalText}>{g}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Find me */}
        <motion.div
          className={styles.findMe}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.32, duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>FIND ME</span>
          <div className={styles.links}>
            {findMe.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <span className={styles.linkIcon}>{l.icon}</span>
                <div>
                  <span className={styles.linkLabel}>{l.label}</span>
                  <span className={styles.linkSub}>{l.sub}</span>
                </div>
              </a>
            ))}
          </div>
          <div className={styles.globeWrap}><GlobeSmall /></div>
        </motion.div>

      </div>
    </section>
  );
}

function GlobeSmall() {
  return (
    <svg width="64" height="64" viewBox="0 0 40 40" fill="none" style={{ opacity: 0.12 }}>
      <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="1.2" />
      <ellipse cx="20" cy="20" rx="9" ry="18" stroke="white" strokeWidth="1.2" />
      <line x1="2" y1="20" x2="38" y2="20" stroke="white" strokeWidth="1.2" />
      <path d="M4 13 Q20 19 36 13" stroke="white" strokeWidth="1.2" fill="none" />
      <path d="M4 27 Q20 21 36 27" stroke="white" strokeWidth="1.2" fill="none" />
    </svg>
  );
}
