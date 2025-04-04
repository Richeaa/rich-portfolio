import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Bg = () => {

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000", 
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -999, 
        },
        particles: {
          number: {
            value: 25, 
          },
          size: {
            value: 2, 
          },
          move: {
            enable: true,
            speed: 1,
          },
          shape: {
            type: "circle", 
          },
        },
      }}
    />
  );
};

export default Bg;
