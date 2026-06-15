'use client';
import { motion } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import Timeline from '../ui/Timeline';
import { staggerContainer, fadeUp, slideRight } from '../../lib/animations';
import styles from '../../styles/About.module.css';

const stats = [
  { value: '1st', label: 'Class Honours' },
  { value: 'MSc', label: 'Networking & Cloud' },
  { value: 'GCP', label: '+ AWS User' },
  { value: '3+', label: 'Projects Shipped' },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>

        {/* Section label */}
        <SectionReveal className={styles.labelRow}>
          <span className={styles.sectionLabel}>// about</span>
        </SectionReveal>

        {/* Top: editorial split */}
        <div className={styles.split}>
          {/* Left: headline + stats */}
          <div className={styles.leftCol}>
            <SectionReveal>
              <h2 className={styles.headline}>
                The story so<br />
                <span className={styles.accentWord}>far.</span>
              </h2>
            </SectionReveal>

            <motion.div
              className={styles.statsGrid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {stats.map((s) => (
                <motion.div key={s.label} variants={fadeUp} className={styles.statCard}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: story text */}
          <SectionReveal className={styles.rightCol} delay={0.2}>
            <p className={styles.storyText}>
              I'm <strong>Lebohang Khasipe</strong> — a Full Stack Developer and SaaS
              builder from South Africa, currently building tools that help creators
              package and monetise their knowledge.
            </p>
            <p className={styles.storyText}>
              I graduated with <strong>First Class Honours</strong> in Computer Science,
              then went on to complete an <strong>MSc in Networking & Cloud Computing</strong>
              — where I deep-dived into distributed systems, Kubernetes, Docker, and
              cloud infrastructure on GCP and AWS.
            </p>
            <p className={styles.storyText}>
              Beyond the screen, I served as <strong>Volleyball Captain</strong> —
              where I learned that building great teams isn't so different from
              building great products.
            </p>
            <p className={styles.storyText}>
              I don't separate my identities. I'm a developer, an athlete, a founder.
              All at once.
            </p>
          </SectionReveal>
        </div>

        {/* Timeline */}
        <div className={styles.timelineSection}>
          <SectionReveal>
            <h3 className={styles.timelineHeading}>The timeline</h3>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <Timeline />
          </SectionReveal>
        </div>

      </div>
    </section>
  );
}
