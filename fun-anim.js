const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const imgs = entry.target.querySelectorAll("img");
    if (entry.isIntersecting) {
      imgs.forEach((node) => node.classList.add("img-animation"));
      return;
    }
    imgs.forEach((node) => node.classList.remove("img-animation"));
  });
}, {
    
});

document.querySelectorAll(".reference").forEach((elem) => obs.observe(elem));
window.addEventListener("resize", 
    () => {
        let ddm = document.querySelector(".dropdow-menu-content")
        let nb = document.querySelector("#nav-bar")

})
