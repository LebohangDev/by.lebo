'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '../../styles/WorkExperience.module.css';

const experience = [
  {
    id: 'cb',
    role: 'Co-Founder & Technical Lead',
    company: 'CreatorsBlueprint',
    period: '2025 — Present',
    type: 'Primary Role',
    url: 'https://app.creatorsblueprint.io',
    desc: 'Co-founded and lead all technical development of an AI-powered SaaS platform that helps creators generate, launch, and sell digital products through personalised storefronts.',
    responsibilities: [
      'Leading full-stack architecture and technical roadmap for the platform',
      'Building AI-powered product generation and ebook creation workflows',
      'Designing and implementing creator onboarding and account management flows',
      'Building creator storefronts and digital product delivery systems',
      'Managing cloud infrastructure, deployments, and CI/CD on GCP',
      'Integrating authentication, payment systems, and database architecture',
    ],
    tags: ['Next.js', 'React', 'Node.js', 'MySQL', 'GCP', 'Cloud Run', 'Cloud SQL', 'AI APIs'],
    flagship: true,
  },
  {
    id: 'freelance',
    role: 'Freelance Web Developer',
    company: 'CreatorsBlueprint Clients',
    period: '2025 — 2026',
    type: 'Freelance',
    url: null,
    desc: 'Built client-facing platforms for creators to showcase their brand, present digital products, and sell directly to followers — before formally joining CreatorsBlueprint as Co-Founder.',
    responsibilities: [
      'Developed custom landing pages and digital product hubs for creator clients',
      'Implemented product pages, payment integrations, and responsive layouts',
      'Translated client visions into functional, user-friendly online platforms',
      'Attended client meetings and managed project delivery end-to-end',
    ],
    tags: ['React', 'JavaScript', 'Node.js', 'Responsive Design'],
    flagship: false,
  },
  {
    id: 'svo',
    role: 'Student Voice Leader',
    company: 'Middlesex University Dubai',
    period: 'Sep 2025 — Present',
    type: 'Leadership',
    url: null,
    desc: 'Acting as liaison between students, academic staff, and faculty to improve teaching quality, course delivery, and the overall academic experience.',
    responsibilities: [
      'Communicating student feedback professionally to faculty and management',
      'Developing leadership, stakeholder management, and problem-solving skills',
    ],
    tags: ['Leadership', 'Communication', 'Stakeholder Management'],
    flagship: false,
  },
];

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${exp.flagship ? styles.cardFlagship : styles.cardStandard}`}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Top row */}
      <div className={styles.cardTop}>
        <div className={styles.cardMeta}>
          <span className={`${styles.typeBadge} ${exp.flagship ? styles.typeFlagship : ''}`}>
            {exp.type}
          </span>
          <span className={styles.period}>{exp.period}</span>
        </div>
        {exp.url && (
          <a href={exp.url} target="_blank" rel="noopener noreferrer" className={styles.visitLink}>
            Visit ↗
          </a>
        )}
      </div>

      {/* Role + Company */}
      <div className={styles.cardTitle}>
        <h3 className={styles.role}>{exp.role}</h3>
        <span className={styles.company}>@ {exp.company}</span>
      </div>

      {/* Description */}
      <p className={styles.desc}>{exp.desc}</p>

      {/* Responsibilities */}
      <ul className={styles.responsibilities}>
        {exp.responsibilities.map((r, i) => (
          <li key={i} className={styles.responsibilityItem}>
            <span className={styles.bullet}>—</span>
            <span>{r}</span>
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className={styles.tags}>
        {exp.tags.map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function WorkExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>

        <motion.div
          ref={ref}
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>// experience</span>
          <h2 className={styles.headline}>
            Where I've been<br />
            <span className={styles.accent}>building.</span>
          </h2>
        </motion.div>

        <div className={styles.list}>
          {experience.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
