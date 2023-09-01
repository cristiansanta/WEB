// Get the header element     ---> STICKY MENU
const header = document.querySelector("header");

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the "sticky" class to the header when you reach its scroll position.
function stickyMenu() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// On scroll, execute the stickyMenu function
window.onscroll = function () {
  stickyMenu();
};
