'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/Header.module.css';

import Link from 'next/link';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Now', href: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          by.lebo<span className={styles.logoStar}>✦</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href="mailto:lkhasipe39@gmail.com" className={styles.navCta}>Say hello →</a>
        </nav>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnActive : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </motion.header>
  );
}
