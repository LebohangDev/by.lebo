'use client';
import { useEffect, useRef, useCallback } from 'react';
import styles from '../../styles/ui.module.css';

export default function MagneticButton({ children, className = '', onClick, href, ...props }) {
  const ref = useRef(null);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    el.style.transform = `translate(${dx * 0.28}px, ${dy * 0.28}px)`;
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0px, 0px)';
    el.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1)';
  }, []);

  const onEnter = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = 'transform 0.15s ease-out';
  }, []);

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      className={`${styles.magneticBtn} ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
      data-magnetic
      {...props}
    >
      {children}
    </Tag>
  );
}
