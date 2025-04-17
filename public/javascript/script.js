const elToAnimate = ["text-container"];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        console.log("intersect");
        let targetClassList = Array.from(el.target.classList);
        if (targetClassList.includes("animate-on-visible")) {
          observer.unobserve(el.target);
          el.target.classList.remove("animate-on-visible");
          el.target.classList.add("visible");
        }
      }
    });
  },
  { threshold: 0.3 }
);

Array.from($(".animate-on-visible")).forEach((el) => {
  observer.observe(el);
});

/** form */

const form = $("#contact-form");
const data = {
  name: form.find("#name").val(),
  email: form.find("#email").val(),
  message: form.find("#message").val(),
};
form.on("submit", async (e) => {
  e.preventDefault();

  fetch("http://localhost:3000/", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
    
  })
    .then((res) => res.text())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
