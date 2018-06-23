document.addEventListener("DOMContentLoaded", function() {
  var toggler = document.getElementById("navbar-toggler");
  var navbar = document.getElementById("navbar");
  var links = document.getElementsByClassName("nav-link");

  toggler.addEventListener("click", function() {
    navbar.classList.toggle("active");
  });
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      navbar.classList.toggle("active");
    });
  }
});
