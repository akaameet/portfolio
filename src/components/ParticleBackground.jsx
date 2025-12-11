import React, { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Resize canvas to device pixels for crisp rendering
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // scale drawing operations
    };

    // initial resize (make sure canvas has layout size)
    // If canvas has no layout yet, fallback to window sizes
    if (!canvas.getBoundingClientRect().width) {
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle count scales with viewport area (keeps perf balanced)
    const area = window.innerWidth * window.innerHeight;
    const particleCount =
      area < 600 * 800 ? 100 : area < 1200 * 900 ? 300 : 500;

    // Build a fullscreen grid (cols x rows)
    const particles = [];
    const cols = Math.ceil(Math.sqrt(particleCount));
    const rows = cols;
    const gapX = canvas.width / cols;
    const gapY = canvas.height / rows;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (particles.length >= particleCount) break;
        const px = c * gapX + gapX / 2;
        const py = r * gapY + gapY / 2;
        particles.push({
          x: px,
          y: py,
          originalX: px,
          originalY: py,
          vx: 0,
          vy: 0,
          size: 1.0 + Math.random() * 3,
          z: 1 + Math.random() * 2,
        });
      }
    }

    // Mouse / touch handlers
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouse.current.x = e.touches[0].clientX;
        mouse.current.y = e.touches[0].clientY;
      }
    };
    const handlePointerLeave = () => {
      // on leave, place mouse far away so particles return
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("pointerout", handlePointerLeave);
    window.addEventListener("mouseleave", handlePointerLeave);

    // Animation loop using requestAnimationFrame
    const animate = () => {
      // clear full size (use logical pixels)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw each particle
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // distance to mouse; if mouse not set, use big distance
        const mx = mouse.current.x == null ? -9999 : mouse.current.x;
        const my = mouse.current.y == null ? -9999 : mouse.current.y;

        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.hypot(dx, dy) + 0.0001; // avoid zero

        const influence = 160 * p.z; // explosion radius (scaled by depth)

        if (dist < influence) {
          // push away (explosion)
          const force = (influence - dist) / influence; // 0..1
          // stronger push for nearer particles and shallower depth
          p.vx += (dx / dist) * force * (5.5 / p.z);
          p.vy += (dy / dist) * force * (5.5 / p.z);
        } else {
          // return to original grid position smoothly
          p.vx += (p.originalX - p.x) * 0.025 * (1 / p.z);
          p.vy += (p.originalY - p.y) * 0.025 * (1 / p.z);
        }

        // velocity damping
        p.vx *= 0.88;
        p.vy *= 0.88;

        // integrate
        p.x += p.vx;
        p.y += p.vy;

        // draw with neon-green glow
        ctx.beginPath();
        ctx.shadowBlur = 14 / p.z;
        ctx.shadowColor = "rgba(0,255,102,0.9)";
        ctx.fillStyle = `rgba(0,255,102,${0.2 + 0.55 / p.z})`;
        ctx.arc(p.x, p.y, p.size * (1 / p.z), 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // kick off animation
    rafRef.current = requestAnimationFrame(animate);

    // cleanup handler
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("pointerout", handlePointerLeave);
      window.removeEventListener("mouseleave", handlePointerLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  // Canvas sits absolutely. Keep pointerEvents: "auto" so it receives mouse/touch.
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        pointerEvents: "auto",
        background: "transparent",
        display: "block",
      }}
    />
  );
}
