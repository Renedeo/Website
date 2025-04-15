const elToAnimate = ["text-container"];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        console.log("intersect");
        console.log([...el.target.classList]);
        if ([...el.target.classList].includes("animate-on-visible")) {
          observer.unobserve(el.target);
          el.target.classList.remove("animate-on-visible");
          el.target.classList.add("visible");
          el.target.style.opacity = 1;
        }
      }
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll(".animate-on-visible").forEach((el) => {
  observer.observe(el);
});

/** form */
