// src/components/BackgroundParticles.jsx
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundParticles() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Initial check
    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute top-0 left-0 w-full h-full -z-10"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
          number: { value: 40, density: { enable: true, area: 800 } },
          color: { value: isDark ? "#60a5fa" : "#2563eb" }, // light blue in dark mode, deep blue in light mode
          links: {
            enable: true,
            color: isDark ? "#60a5fa" : "#2563eb",
            distance: 150,
            opacity: 0.3,
            width: 1,
          },
          move: { enable: true, speed: 1, outModes: { default: "out" } },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}
