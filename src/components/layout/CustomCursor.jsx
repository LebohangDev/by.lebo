'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let raf;
    let mx = -100, my = -100, rx = -100, ry = -100;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };

    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      }
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(tick);

    const handleEnter = () => ringRef.current?.classList.add('cursor-hover');
    const handleLeave = () => ringRef.current?.classList.remove('cursor-hover');
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, [data-cursor]')) handleEnter();
      else handleLeave();
    });

    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0, width: 8, height: 8,
        background: 'var(--electric)', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 'var(--z-cursor)', willChange: 'transform'
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', top: 0, left: 0, width: 40, height: 40,
        border: '1.5px solid var(--electric)', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 'var(--z-cursor)', willChange: 'transform',
        opacity: 0.5, transition: 'width 0.2s, height 0.2s, margin 0.2s'
      }} />
    </>
  );
}
