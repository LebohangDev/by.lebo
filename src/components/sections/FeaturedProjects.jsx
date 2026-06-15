'use client';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from '../../styles/FeaturedProjects.module.css';

const parkflowImages = [
  '/images/project/IMG_7400.png',
  '/images/project/IMG_7401.png',
  '/images/project/IMG_7403.png',
  '/images/project/IMG_7405.png',
  '/images/project/IMG_7406.png',
  '/images/project/IMG_7998.png',
];

const parkflowMvpImages = [
  '/images/project/mvp/Opera Snapshot_2026-06-15_163205_Final20UG.docx.pdf.png',
  '/images/project/mvp/Opera Snapshot_2026-06-15_163230_Final20UG.docx.pdf.png',
  '/images/project/mvp/Opera Snapshot_2026-06-15_163252_Final20UG.docx.pdf.png',
  '/images/project/mvp/Opera Snapshot_2026-06-15_163309_Final20UG.docx.pdf.png',
];

function StackedMockups({ images }) {
  const [cards, setCards] = useState(() => images.map((src, i) => ({ id: i, src })));

  useEffect(() => {
    const timer = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const topCard = newCards.shift();
        newCards.push(topCard);
        return newCards;
      });
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.stackedContainer}>
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          layout
          animate={{
            y: index * 30,
            scale: 1 - index * 0.08,
            zIndex: cards.length - index,
            opacity: index >= 3 ? 0 : 1 - index * 0.15,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className={styles.stackedFrame}
        >
          <div className={styles.iphoneNotch}></div>
          <div className={styles.iphoneScreen}>
            <Image src={card.src} alt="App mockup" fill className={styles.iphoneImg} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ============================================================
   CREATORS BLUEPRINT — FLAGSHIP
   ============================================================ */
function CreatorsBlueprintCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const features = [
    { icon: '✦', label: 'AI Product Generation', desc: 'Automated ebook and digital product creation from a single prompt' },
    { icon: '◈', label: 'Creator Storefronts', desc: 'Personalised storefronts for creators to sell directly to their audience' },
    { icon: '⬡', label: 'Digital Delivery', desc: 'Automated product fulfilment and customer access management' },
    { icon: '◉', label: 'Creator Dashboard', desc: 'Analytics, product management, and sales tracking in one place' },
    { icon: '⊕', label: 'Onboarding Flows', desc: 'Guided creator setup from account creation to first product launch' },
    { icon: '◫', label: 'Cloud Infrastructure', desc: 'Hosted on GCP with Cloud Run, Cloud SQL, and scalable backend' },
  ];

  return (
    <motion.div
      ref={ref}
      className={styles.flagshipCard}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header row */}
      <div className={styles.flagshipHeader}>
        <div className={styles.flagshipMeta}>
          <span className={styles.flagshipNum}>01</span>
          <div>
            <span className={styles.flagshipBadge}>Co-Founder & Technical Lead</span>
            <span className={styles.flagshipStatus}>● Live</span>
          </div>
        </div>
        <a href="https://app.creatorsblueprint.io" target="_blank" rel="noopener noreferrer" className={styles.flagshipLink}>
          app.creatorsblueprint.io ↗
        </a>
      </div>

      {/* Title + desc */}
      <div className={styles.flagshipTitle}>
        <h3 className={styles.flagshipName}>Creators Blueprint</h3>
        <p className={styles.flagshipTagline}>AI-powered SaaS · Helping creators generate, launch & sell digital products</p>
      </div>

      <p className={styles.flagshipDesc}>
        An end-to-end AI SaaS platform for creators to generate, launch, and sell digital products through custom storefronts. Built for scalability, seamless UX, and rapid execution.
      </p>

      {/* Device Mockups */}
      <div className={styles.devicesWrap}>
        {/* Laptop Mockup */}
        <div className={styles.laptopMockup}>
          <div className={styles.laptopScreen}>
            <div className={styles.laptopDisplay}>
              <Image
                src="/images/project/saas/dashbaord.png"
                alt="Creators Blueprint Dashboard"
                fill
                unoptimized={true}
                className={styles.deviceImg}
              />
            </div>
          </div>
          <div className={styles.laptopBase}>
             <div className={styles.laptopIndent}></div>
          </div>
        </div>
        
        {/* Mobile Mockup (overlapping) */}
        <div className={styles.mobileMockup}>
          <div className={styles.iphoneNotch}></div>
          <div className={styles.iphoneScreen}>
             <Image 
               src="/images/project/saas/Opera Snapshot_2026-06-15_153759_saas_non_technical_guide.pdf.png"
               alt="Creators Blueprint Mobile"
               fill
               unoptimized={true}
               className={styles.deviceImg}
             />
          </div>
        </div>
      </div>

      {/* Features grid */}
      <div className={styles.featuresGrid}>
        {features.map((f) => (
          <div key={f.label} className={styles.featureItem}>
            <span className={styles.featureIcon}>{f.icon}</span>
            <div>
              <span className={styles.featureLabel}>{f.label}</span>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className={styles.flagshipTags}>
        {['Next.js', 'React', 'JavaScript', 'Node.js', 'MySQL', 'GCP', 'Cloud Run', 'Cloud SQL', 'AI APIs', 'Stripe'].map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

/* ============================================================
   PARKFLOW — CASE STUDY
   ============================================================ */
function ParkFlowCaseStudy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const highlights = [
    'Real-time parking availability map',
    'User-centred mobile-first design',
    'Full-stack architecture (React + Node.js)',
    'MongoDB database integration',
    'Google Maps API integration',
    'Navigation and routing system',
    'Parking spot booking flow',
    'Eco-score and distance metrics',
  ];

  return (
    <motion.div
      ref={ref}
      className={styles.caseStudy}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Left: Story */}
      <div className={styles.caseStudyLeft}>
        <div className={styles.caseStudyHeader}>
          <span className={styles.caseNum}>02</span>
          <div className={styles.caseBadgeRow}>
            <span className={styles.undergrad}>Undergraduate Final Year Project</span>
          </div>
        </div>

        <h3 className={styles.caseTitle}>ParkFlow</h3>
        <p className={styles.caseTagline}>Smart Parking Platform</p>

        {/* Role badges */}
        <div className={styles.roleBadges}>
          <span className={styles.roleBadge}>
            <span className={styles.roleIcon}>◧</span> UI/UX Designer
          </span>
          <span className={styles.roleBadge}>
            <span className={styles.roleIcon}>⚡</span> Full-Stack Developer
          </span>
        </div>

        {/* Problem / Solution */}
        <div className={styles.caseSection}>
          <span className={styles.caseSectionLabel}>The Problem</span>
          <p className={styles.caseSectionText}>
            Finding parking in urban areas is slow, frustrating, and lacks real-time data.
          </p>
        </div>

        <div className={styles.caseSection}>
          <span className={styles.caseSectionLabel}>The Solution</span>
          <p className={styles.caseSectionText}>
            A mobile-first smart parking app providing real-time availability, turn-by-turn navigation, and seamless booking.
          </p>
        </div>

        {/* Stack */}
        <div className={styles.caseSection}>
          <span className={styles.caseSectionLabel}>Tech Stack</span>
          <div className={styles.caseTags}>
            {['React.js', 'Node.js', 'MongoDB', 'Google Maps API', 'Express.js', 'Figma'].map((t) => (
              <span key={t} className={styles.caseTag}>{t}</span>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className={styles.caseSection}>
          <span className={styles.caseSectionLabel}>Project Highlights</span>
          <ul className={styles.highlightList}>
            {highlights.map((h) => (
              <li key={h} className={styles.highlightItem}>
                <span className={styles.highlightDot} />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: iPhone slider */}
      <div className={styles.caseStudyRight}>
        {/* Phase 1: UI/UX */}
        <div className={styles.mockupGroup}>
          <div className={styles.mockupGroupHeader}>
            <span className={styles.mockupPhase}>Phase 01</span>
            <span className={styles.mockupPhaseTitle}>High-Fidelity UI/UX</span>
          </div>
          <div className={styles.mockupGroupDesc}>
            Figma designs focusing on core user flows and clear visual hierarchy.
          </div>
          <div className={styles.mockupImg}>
            <StackedMockups images={parkflowImages} />
          </div>
        </div>

        {/* Divider */}
        <div className={styles.phaseDivider}>
          <div className={styles.phaseDividerLine} />
          <span className={styles.phaseDividerLabel}>Design → Development</span>
          <div className={styles.phaseDividerLine} />
        </div>

        {/* Phase 2: MVP */}
        <div className={styles.mockupGroup}>
          <div className={styles.mockupGroupHeader}>
            <span className={styles.mockupPhase} style={{ color: 'var(--butter)' }}>Phase 02</span>
            <span className={styles.mockupPhaseTitle}>Full-Stack MVP</span>
          </div>
          <div className={styles.mockupGroupDesc}>
            Functional React app with live mapping and booking flows.
          </div>
          <div className={styles.mockupImg}>
            <StackedMockups images={parkflowMvpImages} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   CLOUD LATENCY — RESEARCH CARD
   ============================================================ */
function ResearchCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={styles.researchCard}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.researchMeta}>
        <span className={styles.researchNum}>03</span>
        <span className={styles.researchBadge}>MSc Project · In Progress</span>
      </div>
      <h3 className={styles.researchTitle}>Evaluating Digital Presence Techniques for Reducing Perceived Latency</h3>
      <p className={styles.researchDesc}>
        Developing a distributed cloud-based real-time application on GCP and Kubernetes to evaluate latency compensation. Implementing digital presence techniques—such as client-side prediction, smoothing, dead reckoning, and state synchronization—to improve Quality of Experience (QoE) and responsiveness without reducing actual network delay.
      </p>
      <div className={styles.researchTags}>
        {['GCP', 'Kubernetes', 'Next.js', 'Socket.IO', 'PostgreSQL', 'Cloud Gaming', 'State Synchronization'].map((t) => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

/* ============================================================
   MAIN EXPORT
   ============================================================ */
export default function FeaturedProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>

        <motion.div
          ref={ref}
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionLabel}>// projects</span>
          <h2 className={styles.headline}>
            Things I've <span className={styles.accent}>built.</span>
          </h2>
        </motion.div>

        <CreatorsBlueprintCard />
        <ParkFlowCaseStudy />
        <ResearchCard />

      </div>
    </section>
  );
}
