'use client';
import { motion } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import { staggerContainer, fadeUp } from '../../lib/animations';
import styles from '../../styles/Volleyball.module.css';

const traits = [
  { label: 'Captain', icon: 'C', desc: 'Led the team on and off the court.' },
  { label: 'Leadership', icon: '◈', desc: 'Decisions under pressure. Setting the standard.' },
  { label: 'Teamwork', icon: '⬡', desc: 'Great products, like great teams, need every part.' },
  { label: 'Discipline', icon: '⬟', desc: 'Show up every day. Do the reps. Build the habit.' },
];

export default function Volleyball() {
  return (
    <section id="volleyball" className={styles.section}>
      {/* Background text */}
      <div className={styles.bgText} aria-hidden="true">VOLLEYBALL</div>

      <div className={styles.inner}>

        <SectionReveal>
          <span className={styles.sectionLabel}>// beyond the screen</span>
        </SectionReveal>

        <div className={styles.split}>
          {/* Left */}
          <div className={styles.leftCol}>
            <SectionReveal>
              <div className={styles.captainBadge}>C</div>
              <h2 className={styles.headline}>
                More than a<br />
                <span className={styles.accent}>developer.</span>
              </h2>
              <p className={styles.body}>
                I served as <strong>Volleyball Captain</strong> — and the lessons from
                that court floor follow me everywhere. Strategy. Leadership. Reading the room.
                Pushing through when energy drops.
              </p>
              <p className={styles.body}>
                Being an athlete isn't separate from being a builder. It's the same muscle.
                Discipline, resilience, and the belief that consistent reps compound over time.
              </p>
            </SectionReveal>
          </div>

          {/* Right: trait cards */}
          <motion.div
            className={styles.traits}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {traits.map((trait) => (
              <motion.div key={trait.label} variants={fadeUp} className={styles.traitCard}>
                <span className={styles.traitIcon}>{trait.icon}</span>
                <h3 className={styles.traitLabel}>{trait.label}</h3>
                <p className={styles.traitDesc}>{trait.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote strip */}
        <SectionReveal delay={0.3}>
          <div className={styles.quoteStrip}>
            <span className={styles.quoteText}>
              "The best team wins. Not the best individual."
            </span>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
