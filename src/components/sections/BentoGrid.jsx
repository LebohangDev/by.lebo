'use client';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/BentoGrid.module.css';

const lifestyleImages = [
  '/images/lifestyle/IMG_1044.png',
  '/images/lifestyle/IMG_1045.png',
  '/images/lifestyle/IMG_1047.jpeg',
  '/images/lifestyle/IMG_1048.jpeg',
  '/images/lifestyle/IMG_1049.jpeg',
  '/images/lifestyle/IMG_1050.jpeg',
];

const blueLockImages = [
  '/images/bluelock/download.png',
  '/images/bluelock/download (1).png',
  '/images/bluelock/a45c6b96e359cca845d6935c35b7eabc.jpg',
  '/images/bluelock/cdade89f45f67a64e2a6bf019b06cce2.jpg',
  '/images/bluelock/a57fd0497e1661c5268fb5e72ec16370.jpg',
];

function BentoCard({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function BentoGrid() {
  const [lifeIdx, setLifeIdx] = useState(0);
  const [manifestoIdx, setManifestoIdx] = useState(0);
  const [animeIdx, setAnimeIdx] = useState(0);

  useEffect(() => {
    const lifeTimer = setInterval(() => {
      setLifeIdx((prev) => (prev + 1) % lifestyleImages.length);
    }, 3500);
    
    const manifestoTimer = setInterval(() => {
      setManifestoIdx((prev) => (prev + 1) % blueLockImages.length);
    }, 4500);

    let animeTimer;
    // Start the anime card timer 800ms later so they show the same images but transition off-sync
    const timeout = setTimeout(() => {
      setAnimeIdx((prev) => (prev + 1) % blueLockImages.length);
      animeTimer = setInterval(() => {
        setAnimeIdx((prev) => (prev + 1) % blueLockImages.length);
      }, 4500);
    }, 800);

    return () => {
      clearInterval(lifeTimer);
      clearInterval(manifestoTimer);
      clearTimeout(timeout);
      if (animeTimer) clearInterval(animeTimer);
    };
  }, []);

  return (
    <section className={styles.section} id="bento">
      <div className={styles.inner}>

        {/* Row 1: Manifesto + Mirror + Quote */}
        <div className={styles.row1}>

          {/* Manifesto card (navy) */}
          <BentoCard className={styles.manifestoCard} delay={0}>
            {/* Background Blue Lock Crossfade */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.25, mixBlendMode: 'luminosity', zIndex: 0 }}>
              <AnimatePresence>
                <motion.img
                  key={blueLockImages[manifestoIdx]}
                  src={blueLockImages[manifestoIdx]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatePresence>
            </div>
            
            <span className={styles.cardLabel} style={{ position: 'relative', zIndex: 2 }}>FOCUS · EXECUTE · ELEVATE</span>
            <div className={styles.manifestoLines} style={{ position: 'relative', zIndex: 2 }}>
              <span>Focus.</span>
              <span>Execute.</span>
              <span>Elevate.</span>
            </div>
            <div className={styles.globeSmall} aria-hidden="true" style={{ position: 'absolute', zIndex: 2 }}>
              <GlobeSmall />
            </div>
          </BentoCard>

          {/* Mirror photo card */}
          <BentoCard className={styles.photoCard} delay={0.08}>
            <div className={styles.photoInner}>
              <div className={styles.photoPlaceholder} style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image 
                  src="/images/lebo/ChatGPT Image Jun 15, 2026, 05_28_31 PM.png"
                  alt="Lebohang Khasipe"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className={styles.photoCaption}>
              <span className={styles.photoCaptionChip}>@by.lebo</span>
            </div>
          </BentoCard>

          {/* Quote card (white) */}
          <BentoCard className={styles.quoteCard} delay={0.16}>
            <span className={styles.quoteIcon}>"</span>
            <h3 className={styles.quoteText}>
              Discipline<br />beats<br />
              <span className={styles.quoteAccent}>motivation.</span>
            </h3>
            <div className={styles.quoteRule} />
            <p className={styles.quoteSub}>commit every day.</p>
            <div className={styles.quoteGlobe}><GlobeSmall /></div>
          </BentoCard>
        </div>

        {/* Row 2: Six small cards */}
        <div className={styles.row2}>


          {/* Anime mindset card (dark) */}
          <BentoCard className={styles.animeCard} delay={0.1}>
            <div className={styles.animeBg} aria-hidden="true">
              <AnimatePresence>
                <motion.img
                  key={blueLockImages[animeIdx]}
                  src={blueLockImages[animeIdx]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5, mixBlendMode: 'luminosity' }}
                />
              </AnimatePresence>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top right, rgba(5,8,16,0.9), rgba(5,8,16,0.3))' }} />
            </div>
            <div className={styles.animeContent}>
              <p className={styles.animeQuote}>
                YOU DON'T NEED<br />
                MORE TIME.<br />
                YOU NEED MORE
              </p>
              <span className={styles.animeFocus}>FOCUS.</span>
            </div>
          </BentoCard>

          {/* Dev journey terminal card */}
          <BentoCard className={styles.terminalCard} delay={0.15}>
            <div className={styles.terminalDots}>
              <span style={{ background: '#ff5f56' }} />
              <span style={{ background: '#ffbd2e' }} />
              <span style={{ background: '#27c93f' }} />
            </div>
            <div className={styles.terminalBody}>
              <p className={styles.terminalLine}><span className={styles.prompt}>&gt;</span> commit -m</p>
              <p className={styles.terminalString}>"progress today."</p>
              <div className={styles.terminalSpacer} />
              {['code', 'learn', 'refactor', 'repeat'].map((t) => (
                <p key={t} className={styles.terminalItem}>
                  <span className={styles.prompt}>&gt;</span> {t}
                </p>
              ))}
            </div>
            <div className={styles.terminalCta}>CONSISTENCY &gt; MOTIVATION</div>
          </BentoCard>

          {/* Lifestyle card */}
          <BentoCard className={styles.lifestyleCard} delay={0.2}>
            <div className={styles.lifestyleBg} style={{ position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: 'var(--radius-xl)' }}>
              <AnimatePresence>
                <motion.img
                  key={lifestyleImages[lifeIdx]}
                  src={lifestyleImages[lifeIdx]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatePresence>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,29,81,0.5), transparent)' }} />
            </div>
            <span className={styles.lifestyleLabel} style={{ position: 'relative', zIndex: 2, color: 'var(--cream)' }}>LIFESTYLE</span>
            <div className={styles.lifestyleStar} style={{ position: 'relative', zIndex: 2 }}>✦</div>
          </BentoCard>

          {/* Creators Blueprint progress */}
          <BentoCard className={styles.projectCard} delay={0.25}>
            <span className={styles.cardLabel}>CURRENT PROJECT</span>
            <h3 className={styles.projectName}>Creators<br />Blueprint</h3>
            <div className={styles.progressSection}>
              <div className={styles.progressLabelRow}>
                <span>Progress</span>
                <span>78%</span>
              </div>
              <div className={styles.progressTrack}>
                <motion.div
                  className={styles.progressFill}
                  initial={{ width: 0 }}
                  whileInView={{ width: '78%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
            <div className={styles.projectMilestone}>
              <span className={styles.milestoneLabel}>Next Milestone</span>
              <span className={styles.milestoneValue}>v1.0.0 Launch →</span>
            </div>
          </BentoCard>

          {/* Volleyball card */}
          <BentoCard className={styles.volleyCard} delay={0.3}>
            <div className={styles.volleyBg} aria-hidden="true">
              <div className={`${styles.volleyImage} ${styles.volleyImage1}`} />
              <div className={`${styles.volleyImage} ${styles.volleyImage2}`} />
              <div className={styles.volleyOverlay} />
            </div>
            <div className={styles.volleyContent}>
              <span className={styles.volleyNum}>#11</span>
              <div className={styles.volleyMeta}>
                <span className={styles.cardLabel}>VOLLEYBALL</span>
                <span className={styles.volleyRole}>CAPTAIN</span>
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}

function GlobeSmall() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="20" cy="20" rx="9" ry="18" stroke="currentColor" strokeWidth="1.2" />
      <line x1="2" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 13 Q20 19 36 13" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M4 27 Q20 21 36 27" stroke="currentColor" strokeWidth="1.2" fill="none" />
    </svg>
  );
}
