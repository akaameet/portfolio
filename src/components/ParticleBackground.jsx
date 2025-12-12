import React, { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const getColors = () => ({
      shadow: getComputedStyle(document.documentElement)
        .getPropertyValue("--particle-shadow")
        .trim(),
      color: getComputedStyle(document.documentElement)
        .getPropertyValue("--particle-color")
        .trim(),
    });

    let colors = getColors();

    // Update colors when dark/light mode toggles
    const observer = new MutationObserver(() => {
      colors = getColors();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Resize canvas
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.3);

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Smart density
    const area = window.innerWidth * window.innerHeight;
    const particleCount = Math.floor(area / 3000);

    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;

      particles.push({
        x,
        y,
        originalX: x,
        originalY: y,
        vx: 0,
        vy: 0,
        size: 1 + Math.random() * 2.2,
        z: 1 + Math.random() * 2.2,
      });
    }

    // Mouse
    let lastMove = 0;
    const handleMove = (e) => {
      const now = performance.now();
      if (now - lastMove < 16) return;
      lastMove = now;

      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("touchmove", (e) => {
      if (e.touches[0]) {
        handleMove({
          clientX: e.touches[0].clientX,
          clientY: e.touches[0].clientY,
        });
      }
    });

    const resetMouse = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };

    window.addEventListener("mouseleave", resetMouse);
    window.addEventListener("pointerleave", resetMouse);

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (let p of particles) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.hypot(dx, dy) + 0.001;

        const influence = 150 * p.z;

        if (dist < influence) {
          const force = (influence - dist) / influence;
          p.vx += (dx / dist) * force * (2.8 / p.z);
          p.vy += (dy / dist) * force * (2.8 / p.z);
        } else {
          p.vx += (p.originalX - p.x) * 0.015 * (1 / p.z);
          p.vy += (p.originalY - p.y) * 0.015 * (1 / p.z);
        }

        p.vx *= 0.9;
        p.vy *= 0.9;

        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.shadowBlur = 6;
        ctx.shadowColor = colors.shadow;
        ctx.fillStyle = colors.color;
        ctx.arc(p.x, p.y, p.size / p.z, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "auto", background: "transparent" }}
    />
  );
}
