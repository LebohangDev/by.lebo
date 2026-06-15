'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '../../styles/ui.module.css';

const items = [
  {
    year: '2020',
    title: 'First Class Honours',
    body: 'Graduated with First Class Honours in Computer Science. Built the foundation.',
  },
  {
    year: '2022',
    title: 'MSc Networking & Cloud Computing',
    body: 'Explored cloud architecture, distributed systems, Kubernetes, Docker, GCP & AWS.',
  },
  {
    year: '2022',
    title: 'Volleyball Captain',
    body: 'Led the team. Learned leadership, discipline, and how to perform under pressure.',
  },
  {
    year: '2023',
    title: 'SaaS Builder',
    body: 'Began building Creators Blueprint — an AI SaaS for content creators.',
  },
  {
    year: 'Now',
    title: 'Building in Public',
    body: 'Shipping products, learning cloud, and documenting the journey.',
  },
];

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      {items.map((item, i) => (
        <TimelineItem key={i} item={item} index={i} />
      ))}
    </div>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });

  return (
    <motion.div
      ref={ref}
      className={styles.timelineItem}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.timelineDot} />
      <div className={styles.timelineContent}>
        <span className={styles.timelineYear}>{item.year}</span>
        <h4 className={styles.timelineTitle}>{item.title}</h4>
        <p className={styles.timelineBody}>{item.body}</p>
      </div>
    </motion.div>
  );
}
