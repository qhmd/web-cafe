// Toggle class active

const navbar_nav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di kilk
document.querySelector("#menu").onclick = () => {
  navbar_nav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan menunya

const hamburger = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar_nav.contains(e.target)) {
    navbar_nav.classList.remove("active");
  }
});
