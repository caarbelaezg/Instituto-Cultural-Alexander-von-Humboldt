let nHorarioI = (clase) => {
  let idName = document.getElementsByClassName(clase)[0].innerHTML;
  let disp = document.getElementsByClassName("actual-disp")[0];
  console.log(idName);

  disp.innerHTML =
    idName === "A1.1"
      ? "A1.1"
      : idName === "A1.2"
      ? "A1.2"
      : idName === "A2.1"
      ? "A2.1"
      : idName === "A2.2"
      ? "A2.2"
      : idName === "B1.1"
      ? "B1.1"
      : idName === "B1.2"
      ? "B1.2"
      : idName === "B1 +"
      ? "B1 +"
      : idName === "B2.1"
      ? "B2.1"
      : idName === "C1"
      ? "C1"
      : idName === "A1 - Super Intensivo"
      ? "A1 - Super Intensivo"
      : "A2 - Super Intensivo";

  if (idName === "A1.1" || idName === "A1.2") {
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Lunes a viernes";
    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "9:30am - 12:00pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "6:00pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].style.display = "block";
    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
  } else if (
    idName === "A1 - Super Intensivo" ||
    idName === "A2 - Super Intensivo"
  ) {
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Lunes a sábado";
    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "8:00am - 12:00pm";
    document.getElementsByClassName("hor-2")[0].style.display = "none";
    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
  } else if (
    idName === "A2.1" ||
    idName === "A2.2" ||
    idName === "B1.1" ||
    idName === "B1.2" ||
    idName === "B1 +"
  ) {
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Lunes a viernes";
    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:00pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].style.display = "none";
    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
  } else if (idName === "B2.1") {
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Lunes a viernes";
    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:00pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].style.display = "none";
    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
  } else {
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML =
      "Se ofertará nuevamente en Febrero";
    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "";
    document.getElementsByClassName("hor-2")[0].style.display = "none";
    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "";
  }
};
