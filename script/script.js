const text = ["Web Developer", "Web Designer", "Blogger"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".anim-skill").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
  typeSpeed: 100;
  backSpeed: 60;
  loop: true;
})();

// CONTENT REVEAL
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 20;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// document.getElementById("btnproject").addEventListener("click", shiwproject);
var btntpro = document.getElementById("btnproject");
var project = document.getElementById("projectId");
var home = document.getElementById("home");
var about = document.getElementById("about");
var experience = document.getElementById("experience");
var profission = document.getElementById("profission");
var service = document.getElementById("service");
var contact = document.getElementById("contact");
// function shiwproject() {
btntpro.onclick = function () {
  // project.style.display = block;
  home.style.display = none;
  about.style.display = none;
  experience.style.display = none;
  profission.style.display = none;
  service.style.display = none;
  contact.style.display = none;
};
// function darkmode() {
//   document.getElementById("topbar-id");
//   element.classList.add("darkmode");
//   element.classList.remove("lightmode");
// }

// const icon = document.getElementById("icon");
// const body = document.querySelector("body")

// icon.addEventListener( 'click , function()'){
//   this.classList.toggle("fa-moon");
//   // if(this.classList.toggle(darmode)){
//   //   body
//   // }
// }
var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("darkmode");
  // if (document.body.clssList.contains("darkmode"){

  // });
};

var input = document.getElementsByClassName("txtinput");
var title = document.getElementById("inputtitle");
if (input.active == true) {
  title.style.marginTop = 0;
}
