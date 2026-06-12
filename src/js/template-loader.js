document.addEventListener("DOMContentLoaded", function () {
  fetch("../templates/header.html")
    .then(response => response.text())
    .then(data => { document.getElementById("header-container").innerHTML = data; });
  fetch("../templates/footer.html")
    .then(response => response.text())
    .then(data => { document.getElementById("footer-container").innerHTML = data; });
});