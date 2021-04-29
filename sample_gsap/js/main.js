gsap.
timeline({
  defaults: {
    duration: 1.5 } }).


to(".ball", {
  x: 200,
  scale: 2,
  ease: "bounce" }).

to(".ball", {
  x: 0,
  scale: 1,
  ease: "back.inOut(3)" });