/* ---- particles.js config ---- */

let amp
let volHistory = []
let song
let slider
let buttonPlay
let buttonStop
let currentTimeElement
let totalTimeElement

function preload() {
  song = loadSound(`assets/music/Iron Ore_04.mp3`)
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight)
  // canvas.parent('graph-canvas')
  amp = new p5.Amplitude()

  slider = createSlider(0, 1, 1, 0.01)
  buttonPlay = document.getElementById('play-button')
}

stopSong = () => {
  song.stop()
  buttonPlay.classList.remove('pause')
}

togglePlay = () => {
  if (song.isPlaying()) {
    song.pause()
    buttonPlay.classList.remove('pause')
  } else {
    song.play()
    buttonPlay.classList.add('pause')
  }
}

songLoaded = id => {
  let current = document.getElementsByClassName('current')
  let newElement = document.getElementById(id)
  current[0].classList.remove('current')
  newElement.classList.add('current')

  song.play()
  buttonPlay.classList.add('pause')
}

setCurrentSong = (id, filename) => {
  song.stop()
  buttonPlay.classList.remove('pause')
  console.log(filename)
  song = ''
  song = loadSound(`assets/music/${filename}`, songLoaded(id))
}

draw = () => {
  // background('rgba(0,0,0,0.1)')
  // // song.setVolume(slider.value())
  // let vol = amp.getLevel()
  // volHistory.push(vol)

  // stroke(255)
  // // noFill()
  // fill(10)
  // beginShape()
  // for (let i = 0; i < volHistory.length; i++) {
  //   let y = map(volHistory[i], 0, 1, height, 0)
  //   vertex(i, y)
  // }
  // clear()
  // endShape()

  // if (volHistory.length > width) {
  //   volHistory.splice(0, 1)
  // }

  let progress = document.getElementById('progress')
  progress.max = song.duration()
  progress.value = song.currentTime()
}

function pad(num) {
  return ('0' + num).slice(-2)
}
function hhmmss(secs) {
  var minutes = Math.floor(secs / 60)
  secs = secs % 60
  // var hours = Math.floor(minutes / 60)
  // minutes = minutes % 60
  return `${pad(minutes)}:${pad(secs)}`
}

particlesJS('particles-js', {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#aaa'
    },
    shape: {
      type: 'square',
      stroke: {
        width: 10,
        color: '#fff'
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#aaa',
      opacity: 0.4,
      width: 1
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
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
})
