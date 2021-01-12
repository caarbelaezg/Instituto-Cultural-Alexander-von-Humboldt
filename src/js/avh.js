let nHorario = (clase) => {
  let idName = document.getElementsByClassName(clase)[0].innerHTML;
  let disp = document.getElementsByClassName("actual-disp")[0];
  if (idName === "A1.1") {
    disp.innerHTML = "A1.1";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Martes y jueves";
    document.getElementsByClassName("day-2")[0].innerHTML = "Martes y jueves";
    document.getElementsByClassName("day-3")[0].innerHTML = "Sábados";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "10:00am - 12:00pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "6:30pm  - 8:30pm";
    document.getElementsByClassName("hor-3")[0].innerHTML = "8:00am - 12:30pm";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-3")[0].innerHTML = "Virtual";
  } else if (idName === "A1.2") {
    disp.innerHTML = "A1.2";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Lunes y miércoles";
    document.getElementsByClassName("day-2")[0].innerHTML = "Martes y jueves";
    document.getElementsByClassName("day-3")[0].innerHTML = "Sábados";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML =
      "10:00am - 12:00pm<br/>6:30pm  - 8:30pm";
    document.getElementsByClassName("hor-3")[0].innerHTML = "8:00am - 12:30pm";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-3")[0].innerHTML = "Virtual";
  } else if (idName === "A1 - Completo") {
    disp.innerHTML = "A1";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML =
      "Lunes, miércoles y viernes";
    document.getElementsByClassName("day-2")[0].innerHTML = "";
    document.getElementsByClassName("day-3")[0].innerHTML = "";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:00pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "";
    document.getElementsByClassName("hor-3")[0].innerHTML = "";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "";
    document.getElementsByClassName("sed-3")[0].innerHTML = "";
  } else if (idName === "A1 - Intensivo") {
    disp.innerHTML = "A1 - Intensivo";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Lunes a viernes";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:00pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "A2.1") {
    disp.innerHTML = "A2.1";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Lunes - miércoles";
    document.getElementsByClassName("day-2")[0].innerHTML = "Martes - Jueves";
    document.getElementsByClassName("day-3")[0].innerHTML = "Sábados";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "6:30pm - 8:30pm";
    document.getElementsByClassName("hor-3")[0].innerHTML = "8:00am - 12:30pm";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-3")[0].innerHTML = "Virtual";
  } else if (idName === "A2.2") {
    disp.innerHTML = "A2.2";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Martes - Jueves";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "Sábados";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "8:00am - 12:30pm";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "Virtual";
  } else if (idName === "A2 - Completo") {
    disp.innerHTML = "A2";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML =
      "Lunes, miércoles y viernes";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:00pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "B1.1") {
    disp.innerHTML = "B1.1";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Lunes y miércoles";
    document.getElementsByClassName("day-2")[0].innerHTML = "Sábado";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "8:00am - 12:30pm";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "B1.2") {
    disp.innerHTML = "B1.2";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Martes - jueves";
    document.getElementsByClassName("day-2")[0].innerHTML = "Sábado";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "8:00am - 12:30pm";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "B1 - Completo") {
    disp.innerHTML = "B1 - Completo";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML =
      "Lunes - Miercoles - Viernes";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "B1 +") {
    disp.innerHTML = "B1 +";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Lunes - Miercoles";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "B2.1") {
    disp.innerHTML = "B2.1";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Martes - Jueves";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "B2.2") {
    disp.innerHTML = "B2.2";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Martes - Jueves";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm - 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "B2.3") {
    disp.innerHTML = "B2.3";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Sábado";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "8:00am - 12:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "C1") {
    disp.innerHTML = "C1";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "";
    document.getElementsByClassName("day-2")[0].innerHTML = "Se oferta nuevamente en Agosto";
    document.getElementsByClassName("day-3")[0].innerHTML = "";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "";
    document.getElementsByClassName("hor-2")[0].innerHTML = "";
    document.getElementsByClassName("hor-3")[0].innerHTML = "";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "";
    document.getElementsByClassName("sed-2")[0].innerHTML = "";
    document.getElementsByClassName("sed-3")[0].innerHTML = "";
  }
};
