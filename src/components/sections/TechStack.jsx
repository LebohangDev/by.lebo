'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import { staggerContainer, fadeUp, scaleIn } from '../../lib/animations';
import styles from '../../styles/TechStack.module.css';

const categories = {
  Cloud: [
    { name: 'Google Cloud', icon: '☁️' },
    { name: 'AWS', icon: '⬡' },
    { name: 'Cloud Run', icon: '▶' },
    { name: 'Kubernetes', icon: '◈' },
    { name: 'Docker', icon: '🐳' },
  ],
  Frontend: [
    { name: 'React', icon: '⚛' },
    { name: 'Next.js', icon: '▲' },
    { name: 'CSS Modules', icon: '◧' },
    { name: 'Framer Motion', icon: '●' },
  ],
  Backend: [
    { name: 'Node.js', icon: '⬡' },
    { name: 'Express', icon: '◉' },
    { name: 'REST API', icon: '⊕' },
    { name: 'Python', icon: '🐍' },
  ],
  Databases: [
    { name: 'MySQL', icon: '◫' },
    { name: 'PostgreSQL', icon: '◩' },
    { name: 'Redis', icon: '◈' },
    { name: 'Firestore', icon: '◆' },
  ],
  DevOps: [
    { name: 'GitHub Actions', icon: '⚡' },
    { name: 'Terraform', icon: '◊' },
    { name: 'Nginx', icon: '⬟' },
    { name: 'Linux', icon: '🐧' },
  ],
};

export default function TechStack() {
  const [active, setActive] = useState('Cloud');
  const tabs = Object.keys(categories);

  return (
    <section id="stack" className={styles.section}>
      <div className={styles.inner}>

        <SectionReveal className={styles.header}>
          <span className={styles.sectionLabel}>// tech stack</span>
          <h2 className={styles.headline}>
            Tools I<br />
            <span className={styles.accent}>trust.</span>
          </h2>
        </SectionReveal>

        {/* Tabs */}
        <div className={styles.tabs} role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              className={`${styles.tab} ${active === tab ? styles.tabActive : ''}`}
              onClick={() => setActive(tab)}
            >
              {tab}
              {active === tab && (
                <motion.div className={styles.tabIndicator} layoutId="tab-indicator" />
              )}
            </button>
          ))}
        </div>

        {/* Icons grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={styles.grid}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
          >
            {categories[active].map((tech) => (
              <motion.div key={tech.name} variants={scaleIn} className={styles.techCard}>
                <span className={styles.techIcon}>{tech.icon}</span>
                <span className={styles.techName}>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
