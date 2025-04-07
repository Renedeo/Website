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
const obs2 = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {
    const imgs = entry.target.querySelectorAll("img");
    const ref_size= document.getElementsByClassName("reference").offsetHeight

    // if (entry.isIntersecting) {
    //   imgs.forEach((node) => node.classList.add("img-animation2"));
    //   return;
    // }
    // imgs.forEach((node) => node.classList.remove("img-animation2"));
  });
}, {
  rootMargin:`0px `
    
});

document.querySelectorAll(".reference").forEach((elem) => obs.observe(elem));
window.addEventListener("resize", 
    () => {
        let ddm = document.querySelector(".dropdow-menu-content")
        let nb = document.querySelector("#nav-bar")
})
