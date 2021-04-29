gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray("section");

sections.forEach(section => {
  const text = section.querySelector("p"),
        image = section.querySelector(".img");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      pin: true,
      anticipatePin: 1,
      scrub: 1,
      start: "top top",
      end: "+=500"
    }
  });
  tl.from(text, {opacity: 0, y: 100})
    .from(image, {scale: 0, ease: "power1.inOut", duration: 1})
    .to(text, {opacity: 0, y: -100, ease: "power1.in"});
});