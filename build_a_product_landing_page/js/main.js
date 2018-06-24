document.addEventListener("DOMContentLoaded", function() {
  var toggler = document.getElementById("nav__toggler");
  var header = document.getElementById("header");
  var links = document.getElementsByClassName("nav-link");

  toggler.addEventListener("click", function() {
    header.classList.toggle("active");
  });
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      header.classList.toggle("active");
    });
  }
});
