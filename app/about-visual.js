"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AboutVisual() {
  const visualRef = useRef(null);

  useEffect(() => {
    const visual = visualRef.current;

    if (!visual) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    visual.classList.add("is-observing");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visual.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(visual);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={visualRef} className="about-visual">
      <div className="about-visual-stack">
        <Image
          className="about-visual-image"
          src="/about-training.webp"
          alt="Hands-on technology training on a laptop with digital learning icons"
          width={440}
          height={300}
          sizes="(max-width: 700px) 100vw, (max-width: 900px) 45vw, 40vw"
        />
        <Image
          className="about-visual-image about-visual-image-secondary"
          src="/about-learning.webp"
          alt="Learners collaborating around a laptop during technology training"
          width={440}
          height={300}
          sizes="(max-width: 700px) 78vw, (max-width: 900px) 36vw, 31vw"
        />
      </div>
      <span className="about-visual-badge">
        <span className="about-visual-badge-number">15+</span>
        <span className="about-visual-badge-copy">
          <span>Years of</span>
          <span>Experience</span>
        </span>
      </span>
    </div>
  );
}
