function irASeccion(seccionID) {
  var seccion = document.getElementById(seccionID);
  seccion.scrollIntoView({ behavior: "smooth" });
}

const nav = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
  nav.classList.toggle('active', window.scrollY > 0);
});
