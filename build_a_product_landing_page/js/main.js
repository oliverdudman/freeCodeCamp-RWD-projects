document.addEventListener("DOMContentLoaded", function() {
  var toggler = document.getElementById("nav__toggler");
  var header = document.getElementById("header");
  toggler.addEventListener("click", function() {
    header.classList.toggle("active");
  });
});
