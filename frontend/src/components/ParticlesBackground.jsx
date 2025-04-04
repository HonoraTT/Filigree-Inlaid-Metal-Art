import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const GoldenParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color:"transparent"},
        particles: {
          number: { value: 60 },
          color: "rgba(243, 149, 56, 0.83)",
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 }
          },
          opacity: {
            value: 1,
            random: true,
            animation: { enable: true, speed: 1, sync: false }
          },
          size: {
            value: { min: 1, max: 3 },
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "rgba(227, 174, 29, 0.92)",
            opacity: 0.7,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      }}
    />
  );
};

export default GoldenParticles;