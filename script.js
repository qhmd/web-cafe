// Toggle class active hamburger menu

const navbar_nav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di kilk
document.querySelector("#menu").onclick = (e) => {
  navbar_nav.classList.toggle("active");
  e.preventDefault();
};

// toggle clas active untuk search form
const search_form = document.querySelector(".search-form");
const search_box = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = (e) => {
  search_form.classList.toggle("active");
  search_box.focus();
  e.preventDefault();
};

//toggle class keranjang for shopping cart
const keranjang = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-btn").onclick = (e) => {
  keranjang.classList.toggle("active");
  e.preventDefault();
};

// klik diluar elemen

const hamburger = document.querySelector("#menu");
const sb = document.querySelector("#search-btn");
const sc = document.querySelector("#shopping-cart-btn");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar_nav.contains(e.target)) {
    navbar_nav.classList.remove("active");
  }
});

document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !search_form.contains(e.target)) {
    search_form.classList.remove("active");
  }
});

document.addEventListener("click", function (e) {
  if (!sc.contains(e.target) && !keranjang.contains(e.target)) {
    keranjang.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailBtn = document.querySelectorAll(".item-detail-btn");

itemDetailBtn.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

//klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
