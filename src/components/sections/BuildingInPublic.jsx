'use client';
import { motion } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import { staggerContainer, fadeUp } from '../../lib/animations';
import styles from '../../styles/BuildingInPublic.module.css';

const cards = [
  {
    category: 'reading',
    icon: '📚',
    label: '// currently reading',
    items: [
      { title: 'Zero to One', sub: 'Peter Thiel' },
      { title: 'The Mom Test', sub: 'Rob Fitzpatrick' },
    ],
  },
  {
    category: 'learning',
    icon: '⚡',
    label: '// currently learning',
    items: [
      { title: 'GCP Professional Cloud Architect', sub: 'Certification prep' },
      { title: 'Kubernetes & Cloud Run', sub: 'Production patterns' },
    ],
  },
  {
    category: 'wins',
    icon: '🏆',
    label: '// recent wins',
    items: [
      { title: 'Launched Creators Blueprint beta', sub: 'June 2025' },
      { title: 'First paying user', sub: 'Building confidence' },
    ],
  },
  {
    category: 'challenges',
    icon: '🔧',
    label: '// current challenges',
    items: [
      { title: 'Balancing full-time work & SaaS', sub: 'Time management' },
      { title: 'Cloud cost optimisation', sub: 'Keeping infra lean' },
    ],
  },
];

export default function BuildingInPublic() {
  return (
    <section id="building" className={styles.section}>
      <div className={styles.inner}>

        <SectionReveal className={styles.header}>
          <span className={styles.sectionLabel}>// building in public</span>
          <h2 className={styles.headline}>
            No filter.<br />
            <span className={styles.accent}>Real progress.</span>
          </h2>
          <p className={styles.sub}>
            What I'm learning, reading, winning, and struggling with — right now.
          </p>
        </SectionReveal>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {cards.map((card) => (
            <motion.div key={card.category} variants={fadeUp} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{card.icon}</span>
                <span className={styles.cardLabel}>{card.label}</span>
              </div>
              <div className={styles.cardItems}>
                {card.items.map((item) => (
                  <div key={item.title} className={styles.item}>
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.itemSub}>{item.sub}</span>
                  </div>
                ))}
              </div>
              <div className={styles.cardCursor} aria-hidden="true">_</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
