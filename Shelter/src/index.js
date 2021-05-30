const menu = document.querySelector(".header__menu")

menu.onmouseenter = function() {
  document.querySelector(".header__menu-item_active").classList.remove("header__menu-item_active");
}

menu.onmouseleave = function() {
  document.querySelector(".header__menu-item").classList.add("header__menu-item_active");
}