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

$("#contact-form").on("submit", async (e) => {
  e.preventDefault();
  const data = {
    name: $("#contact-form").find("#name").val(),
    email: $("#contact-form").find("#email").val(),
    message: $("#contact-form").find("#message").val(),
  };
  $("#contact-form").find("#name").val("");
  $("#contact-form").find("#email").val("");
  $("#contact-form").find("#message").val("");
  $("#contact-form").find("#response").html("");
  console.log("test");

  fetch("https://website-3zpn.onrender.com/api/send", {
  // fetch("http://localhost:3000/api/send", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.text())
    .then((data) => {
      $("#contact-form").find("#response").html(data).css({
        color: "green",
      });
    })
    .catch((err) => {
      console.log(err);
      $("#contact-form").find("#response").html("Email not sent").css({
        color: "red",
      });
    });
});
