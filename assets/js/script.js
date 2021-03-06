let keysArray = [
  { key: 'AfHn3', value: "Ink Music's" },
  { key: 'UdTe2', value: "Cut Surface's" },
  { key: 'Pfa9d', value: "Phat Penguin's" },
  { key: 'Fa4rb', value: "Fabrique's" },
  { key: 'We4ms', value: "WERK Music's" },
  { key: 'IfH3r', value: "Anna's" },
  { key: 'JevY2', value: "Laurin's" },
]

let param
let paramLine = document.getElementById('paramLine')
param = window.location.search

inspectParam = (param, keys) => {
  for (let item of keys) {
    if (param.includes(item.key)) {
      paramLine.innerHTML = paramLine.innerHTML.replace('your', item.value)
    }
  }
}

inspectParam(param, keysArray)

/* ---- particles.js config ---- */

particlesJS('particles-js', {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#aaa',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#fff',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 100,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#aaa',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 240,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 50,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
})
