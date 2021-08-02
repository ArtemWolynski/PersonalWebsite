export const particlesStyle = {
  'position': 'fixed',
  'width': '100%',
  'height': '100%',
  'z-index': -1,
  'top': 0,
  'left': 0,
  'right': 0,
  'bottom': 0,
};


export const particlesSettings = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
      },
      value: 0
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "triangle"
    },
    size: {
      random: true,
      value: 5
    }
  },
  detectRetina: true
};
