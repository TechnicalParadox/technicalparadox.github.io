// To execute once the DOM is ready to be manipulated by JS
$(document).ready(function()
{
  // Handle Navbar Burger open/close
  $(".navbar-burger").click(function() // Check for click on navbar burger
  {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});
