const ratio = 0.4;
let observer = null;

// Selectionner les element
const spies = document.querySelectorAll(".data-spy");
/**
 *  Fait appel a la fonction activate sur l'element intercepté
 * 
 * @param {IntersectionObserverEntry[]} entries
 * @param {intersectionObserver} observer
 */
const callback = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
        activate(entry.target);
    }
  });
};

/**
 *  Ajoute une nouvelle classe à chaque element  
 * en supprimant les anciens 
 * 
 * @param {HTMLElement} element
 */
const activate = function (element) {
  const id = element.getAttribute("id");
  const anchor = document.querySelector(`a[href="#${id}"]`);

  if (anchor === null) {
    return null;
  }
  anchor.parentElement.parentElement
    .querySelectorAll(".active ")
    .forEach((node) => node.classList.remove("active"));

  anchor.classList.add("active");
};

/**
 *  Update l'observer de chaque element si la taille
 *  fenetre a été modifiée
 * 
 * @param {NodeListof.<Element>} elems
 */
const scrollspy = function (elems) {
  if (observer !== null) {
    elems.forEach((elem) => {
      observer.unobserve(elem);
    });
  }
  const y = Math.round(window.innerHeight * ratio);

  observer = new IntersectionObserver(callback, {
    rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`

  })
  spies.forEach((spy) => observer.observe(spy));
}

if (spies.length > 0) {
  scrollspy(spies);
  window.addEventListener("resize", () => {
    scrollspy(spies);
  });
}


/* ***************************Contact form requirement***************************** */

const btn = document.querySelector('button')

btn.addEventListener("click", 
  (event) => {
    let nom = document.getElementById('nom').value
    let mail = document.getElementById('email').value
    let message = document.getElementById('message').value
    console.log(nom)
    console.log(mail)
    console.log(message)
    if (nom.lenght < 0 || mail.lenght < 0 || message.length < 0){
    }
    // event.preventDefault()
})
