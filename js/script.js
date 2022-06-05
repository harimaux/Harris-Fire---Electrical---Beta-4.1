//Mobile Menu
const mobileBtn = document.querySelector(".mobileMenuBtn");
const mobileNav = document.querySelector(".mobileNav");

//Hides and show mobile menu
mobileBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("navToggle");

  //Applies animation on button when clicked
  const menuLine1 = document.getElementById("mobileBtnLine1");
  const menuLine2 = document.getElementById("mobileBtnLine2");
  const menuLine3 = document.getElementById("mobileBtnLine3");

  menuLine1.classList.toggle("mobileBtnLine1X");
  menuLine2.classList.toggle("mobileBtnLine2X");
  menuLine3.classList.toggle("mobileBtnLine3X");

  menuLine1.classList.toggle("mobileBtnColor");
  menuLine2.classList.toggle("mobileBtnColor");
  menuLine3.classList.toggle("mobileBtnColor");

  mobileBtn.classList.toggle("mobileBtnBackground");
});
