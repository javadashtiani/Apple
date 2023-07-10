let showBtnMobileMenu = document.querySelector(".show-btn-mobile-menu");
let mobileMenu = document.querySelector(".mobile-menu");
let searchBoxBtnToggle = document.querySelector(".searchBox-btn-toggle");
let searchBox = document.querySelector(".search-box");
let bagBoxBtnToggle = document.querySelector(".bagBox-btn-toggle");
let bagBox = document.querySelector(".bag-box");
// ************* MOBILE MENU *************
showBtnMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("show-mobile-menu");
});
// ********************** SEARCH BOX *****************

searchBoxBtnToggle.addEventListener("click", () => {
  searchBox.classList.toggle("show-search-box");
});
// ************************ BAG BOX*******************

bagBoxBtnToggle.addEventListener("click", () => {
  bagBox.classList.toggle("show-bag-box");
});
// ********************** MOBILE FOOTER **************
let menuTitle = document.querySelectorAll(".menu-title");
let i = 1;
menuTitle.forEach(function (val) {
  val.addEventListener("click", (e) => {
    let _ul = e.target.nextElementSibling;
    _ul.classList.toggle("menu-show");
    let _icon = e.target.children[1].children[0];
    if (i % 2) {
      _icon.innerHTML = "-";
    } else {
      _icon.innerHTML = "+";
    }
    i++;
  });
});
