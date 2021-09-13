// set up Modal functionality
const content = {
  carreer: {
    title: "Karrierewege",
    copy: "Der Weg zur Professur ist nicht nur steinig, sondern auch vielfältig: befristete oder unbefristete Stellen, Stellen an Universitäten oder außeruniversitären Forschungseinrichtungen, Stellen im In- oder Ausland, Stipendien, Nachwuchsgruppen – welcher Weg lässt sich am besten mit Familie und Partnerschaft vereinbaren? Was sind die Voraussetzungen dafür, dass sich wissenschaftliche Karriere auf der einen Seite und Familie und Partnerschaft auf der anderen Seite unter einen Hut bringen lassen?",
  },
  promotion: {
    title: "Promotion",
    copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
  },
  habilitation: {
    title: "Habilitation",
    copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
  },
  juniorprof: {
    title: "Juniorprofessur",
    copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
  },
  berufung: {
    title: "Berufungsverfahren",
    copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
  },
  arbeitsplatz: {
    title: "Arbeitsplatz",
    copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  },
  familie: {
    title: "Familie, Partnerschaft, Alltag",
    copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.",
  },
  mobilität: {
    title: "Mobilität",
    copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  },
  ausland: {
    title: "Blick aus dem Ausland",
    copy: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  },
  allgemein: {
    title: "Allgemein",
    copy: "Der Weg zur Professur ist nicht nur steinig, sondern auch vielfältig: befristete oder unbefristete Stellen, Stellen an Universitäten oder außeruniversitären Forschungseinrichtungen, Stellen im In- oder Ausland, Stipendien, Nachwuchsgruppen – welcher Weg lässt sich am besten mit Familie und Partnerschaft vereinbaren? Was sind die Voraussetzungen dafür, dass sich wissenschaftliche Karriere auf der einen Seite und Familie und Partnerschaft auf der anderen Seite unter einen Hut bringen lassen?",
  },
};

const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("open-btn");

const categories = document.querySelectorAll(".categories");
const headline = document.querySelector("#js-headline");
const copyText = document.querySelector("#js-copy");
const firstElement = categories[0];

openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.classList.add("is-open");
  firstElement.classList.add("active");

  const keys = Object.keys(content);

  headline.textContent = content[keys[0]].title;
  copyText.textContent = content[keys[0]].copy;
});

// callback function to reset active class of category
function resetActive() {
  const activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");
}

function setUp() {
  categories.forEach((element) => {
    element.addEventListener("click", (e) => {
      resetActive();
      e.target.classList.add("active");
      // get data-key from e.target
      const key = e.target.getAttribute("data-key");
      // retrieve data from object
      const data = content[key];
      // select elements in textfield and apply content
      headline.textContent = data.title;
      copyText.textContent = data.copy;
    });
  });
}

setUp();

const closeBtn = document.getElementById("js-close");
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resetActive();
  overlay.classList.remove("is-open");
});
