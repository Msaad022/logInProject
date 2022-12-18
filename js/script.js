var mybutton = document.querySelector(".btn-scroll");

// When the user clicks on the button, scroll to the top of the document
document
  .querySelector(".btn-scroll")
  .addEventListener("click", () => (document.documentElement.scrollTop = 0));

window.onscroll = function () {

  if (document.documentElement.scrollTop > 820) {
    mybutton.style.opacity = 1;
  } else {
    mybutton.style.opacity = 0;
  }

};
