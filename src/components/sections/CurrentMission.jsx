'use client';
import { motion } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import { staggerContainer, fadeUp } from '../../lib/animations';
import styles from '../../styles/CurrentMission.module.css';

const progressCards = [
  {
    icon: '☁️',
    title: 'Cloud Architecture',
    desc: 'Deep-diving into GCP services, Cloud Run, and distributed systems design patterns.',
    progress: 65,
  },
  {
    icon: '🚀',
    title: 'Building in Public',
    desc: 'Shipping Creators Blueprint openly — learning by doing, documenting the process.',
    progress: 80,
  },
  {
    icon: '🧠',
    title: 'Scaling SaaS',
    desc: 'Growing the platform from zero to paying customers. Learning every step of the way.',
    progress: 40,
  },
];

export default function CurrentMission() {
  return (
    <section id="mission" className={styles.mission}>
      <div className={styles.inner}>

        <SectionReveal className={styles.labelRow}>
          <span className={styles.sectionLabel}>// current mission</span>
        </SectionReveal>

        <SectionReveal>
          <div className={styles.statement}>
            <h2 className={styles.statementText}>
              Building{' '}
              <span className={styles.highlight}>Creators Blueprint.</span>
            </h2>
            <h2 className={styles.statementText}>
              Helping creators package their knowledge.
            </h2>
            <p className={styles.subStatement}>
              Learning cloud. Building in public. Shipping every week.
            </p>
          </div>
        </SectionReveal>

        <motion.div
          className={styles.cards}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {progressCards.map((card) => (
            <motion.div key={card.title} variants={fadeUp} className={styles.card}>
              <span className={styles.cardIcon}>{card.icon}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
              <div className={styles.progressTrack}>
                <motion.div
                  className={styles.progressFill}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${card.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <span className={styles.progressLabel}>{card.progress}% there</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
