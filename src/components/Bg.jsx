import { useEffect, useRef } from "react";

const Bg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width, height, nodes, dpr;
    let animationId;

    const NODE_COUNT_BASE = 60;
    const LINK_DISTANCE = 150;
    const BRAND = "10, 132, 255"; 

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const count = Math.max(24, Math.min(90, Math.round((area / 1_000_000) * NODE_COUNT_BASE)));

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
      }));
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${BRAND}, 0.55)`;
        ctx.fill();
      });
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.18;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${BRAND}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // titik node
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${BRAND}, 0.7)`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(step);
    };

    resize();
    if (prefersReducedMotion) {
      drawStatic();
    } else {
      animationId = requestAnimationFrame(step);
    }

    const handleResize = () => {
      resize();
      if (prefersReducedMotion) drawStatic();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50 bg-ink-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-dot bg-grid-dot opacity-40" />
      <div className="absolute inset-0 bg-radial-fade" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default Bg;
