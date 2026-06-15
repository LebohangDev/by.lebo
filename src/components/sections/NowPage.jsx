'use client';
import { motion } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import { staggerContainer, fadeUp } from '../../lib/animations';
import styles from '../../styles/NowPage.module.css';

const nowItems = [
  {
    category: 'Building',
    value: 'Creators Blueprint',
    sub: 'AI SaaS — helping creators package knowledge',
    icon: '🚀',
  },
  {
    category: 'Learning',
    value: 'GCP Architecture',
    sub: 'Professional Cloud Architect certification path',
    icon: '☁️',
  },
  {
    category: 'Reading',
    value: 'Zero to One',
    sub: 'Peter Thiel — on building the future',
    icon: '📚',
  },
  {
    category: 'Listening',
    value: 'Lo-fi + Phonk',
    sub: 'Deep focus sessions',
    icon: '🎧',
  },
];

export default function NowPage() {
  return (
    <section id="now" className={styles.section}>
      <div className={styles.inner}>

        <SectionReveal className={styles.header}>
          <span className={styles.sectionLabel}>// now</span>
          <h2 className={styles.headline}>
            What I'm doing<br />
            <span className={styles.accent}>right now.</span>
          </h2>
          <p className={styles.sub}>Updated: June 2025</p>
        </SectionReveal>

        <motion.div
          className={styles.card}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className={styles.cardHeader}>
            <div className={styles.spotifyBar}>
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </div>
            <span className={styles.nowLabel}>now playing</span>
          </div>

          <div className={styles.items}>
            {nowItems.map((item) => (
              <motion.div key={item.category} variants={fadeUp} className={styles.item}>
                <span className={styles.itemIcon}>{item.icon}</span>
                <div className={styles.itemText}>
                  <span className={styles.itemCategory}>{item.category}</span>
                  <span className={styles.itemValue}>{item.value}</span>
                  <span className={styles.itemSub}>{item.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
