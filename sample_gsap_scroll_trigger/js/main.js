gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  x: 800, 
  rotation: 360, 
  ease: "power1.inOut", 
  scrollTrigger: {
    trigger: ".box",
    pin: true,
    start: 0,
    scrub: 0.5,
    end: "+=500"
  }
});

document.querySelector("button").addEventListener("click", () => {
  gsap.to(window, {scrollTo: {y: 500, autoKill: true}, duration: 2.5});
});
