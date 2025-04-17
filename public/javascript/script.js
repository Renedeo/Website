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
[...$(".animate-on-visible")].forEach((el) => {
  observer.observe(el);
});

/** form */

const sendBtn = document.getElementById("send-btn");
console.log(sendBtn);


const xhr = new XMLHttpRequest() 
$("form").on('submit', (event) => {
  event.preventDefault()
  const url = "./server/send-mail.php?test=test";
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log(xhr.response)
      } else {
        console.error("Erreur " + xhr.status + " : " + xhr.statusText);
      }
    }
  });
  
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
  let post = "phase=send&mes=ee"
  xhr.send(post);
})
