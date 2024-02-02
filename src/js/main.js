"use strict"; // Kör i strikt läge.

document.addEventListener("DOMContentLoaded", function () {
  //--------------------------------------------------------------------------- Sidnavigering //
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navUl = document.querySelector("nav ul");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  // Växla mellan ☰ och ✖
  function toggleMenuIcon() {
    if (navUl.style.display === "block") {
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    } else {
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
  }

  hamburgerMenu.addEventListener("click", function () {
    navUl.style.display = navUl.style.display === "block" ? "none" : "block";
    toggleMenuIcon();
  });

  // Fixar så att menyn beter sig någorlunda normalt
  window.addEventListener("resize", function () {
    if (window.innerWidth > 600) {
      navUl.style.display = "flex";
    } else {
      navUl.style.display = "none";
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    }
  });

  // Stänger menyn när man klickar på ett alternativ
  navUl.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      navUl.style.display = "none";
      toggleMenuIcon();
    }
  });
});
