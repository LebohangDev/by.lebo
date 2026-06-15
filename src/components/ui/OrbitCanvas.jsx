'use client';
import { useEffect, useRef } from 'react';
import styles from '../../styles/ui.module.css';

export default function OrbitCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let width, height;

    // Particles
    const PARTICLE_COUNT = 80;
    const particles = [];

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.5 + 0.3,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          alpha: Math.random() * 0.5 + 0.1,
        });
      }
    }

    // Orbit rings config
    const orbits = [
      { rx: 0.38, ry: 0.18, tilt: -18, speed: 0.0003, phase: 0 },
      { rx: 0.55, ry: 0.26, tilt: 12, speed: 0.00018, phase: Math.PI },
    ];

    let t = 0;

    function drawOrbit(orbit) {
      const cx = width * 0.62;
      const cy = height * 0.45;
      const rx = width * orbit.rx;
      const ry = height * orbit.ry;
      const tilt = (orbit.tilt * Math.PI) / 180;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(tilt);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(48, 113, 247, 0.07)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Dot on orbit
      const angle = t * orbit.speed * 1000 + orbit.phase;
      const dotX = Math.cos(angle) * rx;
      const dotY = Math.sin(angle) * ry;
      ctx.beginPath();
      ctx.arc(dotX, dotY, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(48, 113, 247, 0.5)';
      ctx.fill();
      ctx.restore();
    }

    function draw(timestamp) {
      t = timestamp;
      ctx.clearRect(0, 0, width, height);

      // Particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(191, 199, 255, ${p.alpha})`;
        ctx.fill();
      }

      // Draw orbits
      for (const orbit of orbits) {
        drawOrbit(orbit);
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    animId = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => {
      resize();
      initParticles();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.orbitCanvas} aria-hidden="true" />;
}
