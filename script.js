/* $(document).ready(function () {
  var personaje = $("#personaje-container");

  $(document).mousemove(function (event) {
    var mouseX = event.pageX; // Obtén la posición horizontal del puntero
    var mouseY = event.pageY; // Obtén la posición vertical del puntero

    // Mueve el contenedor del personaje para que siga al puntero
    personaje.css({
      left: mouseX + "px",
      top: mouseY + "px"
    });
  });
});*/
// Obtén el modal y el botón para cerrarlo
// Obtén el elemento del personaje
// Obtén el elemento del personaje

document.addEventListener("DOMContentLoaded", function () {
  var popupContainer = document.getElementById("popup-container");

  // Mostrar la ventana emergente al cargar la página
  popupContainer.style.display = "block";

  // Cierra la ventana emergente al hacer clic en cualquier parte del cuerpo
  document.body.addEventListener("click", function () {
    popupContainer.style.display = "none";
  });

  // Evita que el clic en la ventana emergente la cierre
  popupContainer.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

var personajeContainer = document.getElementById("personaje-container");

// Agrega un evento para escuchar el desplazamiento de la página
window.addEventListener("scroll", function () {
  // Obtén la posición actual del desplazamiento vertical
  var scrollTop = window.scrollY;

  // Calcula la nueva posición vertical para el personaje
  var newPositionY = 50 + scrollTop / 150; // Ajusta el factor de desplazamiento para un movimiento más lento

  // Aplica la nueva posición al elemento del personaje
  personajeContainer.style.top = newPositionY + "%";
});

var modal = document.getElementById("videoModal");
var closeModal = document.getElementById("closeModal");

// Agrega un evento de clic para cerrar el modal
closeModal.onclick = function () {
  modal.style.display = "none";
};

// Función para abrir el modal y mostrar el video
function openVideo(videoSrc) {
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = videoSrc;
  modal.style.display = "block";
}

// Escucha los clics en los botones "Ver" y abre el modal con el video correspondiente
var verButtons = document.querySelectorAll(".bnt-more");
verButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var videoSrc = this.getAttribute("data-video-src");
    openVideo(videoSrc);
  });
});

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800
  });
});
