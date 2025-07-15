function mostrarInfo(boton) {
  const info = boton.nextElementSibling;
  if (info.style.display === "block") {
    info.style.display = "none";
  } else {
    info.style.display = "block";
  }
}