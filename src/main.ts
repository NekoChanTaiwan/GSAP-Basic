import gsap from 'gsap'

gsap.to('[data-gsap="to()"]', {
  x: 100, // 100px
  duration: 2, // 2 seconds
  repeat: -1, // infinite
  repeatDelay: 1,
})

gsap.from('[data-gsap="from()"]', {
  xPercent: 200, // percentage of element's width
  rotate: 360,
  duration: 2,
  repeat: -1,
  repeatDelay: 1,
})

gsap.fromTo(
  '[data-gsap="fromTo()"]',
  {
    x: window.innerWidth,
    rotate: 180,
    opacity: 0,
    filter: 'blur(4px)',
  },
  {
    x: 0,
    rotate: 0,
    opacity: 1,
    filter: 'blur(0px)',
    duration: 2,
    repeat: -1,
    repeatDelay: 1,
  }
)

// a zero-duration gsap.to()
gsap.set('[data-gsap="set()"]', {
  x: 200,
  rotate: 45,
})

// Easing
gsap.to('[data-gsap="easing-linear"]', {
  ease: 'none', // linear
  rotate: 360,
  duration: 2,
  repeat: -1,
  repeatDelay: 2,
})
gsap.to('[data-gsap="easing-power4"]', {
  ease: 'power4.out',
  rotate: 360,
  duration: 2,
  repeat: -1,
  repeatDelay: 2,
})
gsap.to('[data-gsap="easing-bounce"]', {
  ease: 'bounce.out',
  rotate: 360,
  duration: 2,
  repeat: -1,
  repeatDelay: 2,
})
gsap.to('[data-gsap="easing-elastic"]', {
  ease: 'elastic.out(1, 0.3)',
  rotate: 360,
  duration: 2,
  repeat: -1,
  repeatDelay: 2,
})
gsap.to('[data-gsap="easing-slow"]', {
  ease: 'slow(0.7, 0.7, false)',
  rotate: 360,
  duration: 2,
  repeat: -1,
  repeatDelay: 2,
})

// Stagger
const staggerBoxs = document.querySelectorAll('[data-gsap="stagger"]')

gsap.from(staggerBoxs, {
  y: 100,
  opacity: 0,
  filter: 'blur(4px)',
  duration: 1,
  stagger: 0.1,
  repeat: -1,
  repeatDelay: 2,
  yoyo: true,
})

// Timeline
const tl = gsap.timeline({
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
  defaults: {
    duration: 0.5,
    opacity: 0,
    filter: 'blur(4px)',
  },
})

tl.from('[data-gsap="timeline()-1"]', {
  y: 50,
})
tl.from('[data-gsap="timeline()-2"]', {
  y: -50,
})
tl.from('[data-gsap="timeline()-3"]', {
  x: -50,
})
tl.from('[data-gsap="timeline()-4"]', {
  x: 50,
})
tl.from('[data-gsap="timeline()-5"]', {
  rotate: 360,
  scale: 0,
})

// Control
const tweenControl = gsap.to('[data-gsap="control-box"]', {
  x: window.innerWidth / 2,
  duration: 2,
  paused: true,
})

const btnAddEventListener = (selectors: string, callback: () => void) => {
  const btn = document.querySelector(selectors) as HTMLButtonElement
  btn.addEventListener('click', callback)
}

btnAddEventListener('[data-gsap="control-play"]', () => tweenControl.play())
btnAddEventListener('[data-gsap="control-pause"]', () => tweenControl.pause())
btnAddEventListener('[data-gsap="control-resume"]', () => tweenControl.resume())
btnAddEventListener('[data-gsap="control-reverse"]', () => tweenControl.reverse())
btnAddEventListener('[data-gsap="control-restart"]', () => tweenControl.restart())
