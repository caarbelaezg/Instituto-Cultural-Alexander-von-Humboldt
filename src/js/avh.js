let nHorario = (clase) => {
  let idName = document.getElementsByClassName(clase)[0].innerHTML;
  let disp = document.getElementsByClassName("actual-disp")[0];

  if (idName === "A1.1") {
    disp.innerHTML = "A1.1";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Martes y jueves";
    document.getElementsByClassName("day-2")[0].innerHTML = "Martes y jueves";
    document.getElementsByClassName("day-3")[0].innerHTML = "Sábados (incl. 30 min descanso)";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "10:00am a 12:00pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "6:30pm a 8:30pm";
    document.getElementsByClassName("hor-3")[0].innerHTML = "8:00am a 12:30pm";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-3")[0].innerHTML = "Virtual";

  } else if (idName === "A1.2") {
    disp.innerHTML = "A1.2";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Martes y jueves";
    document.getElementsByClassName("day-2")[0].innerHTML = "Martes y jueves";
    document.getElementsByClassName("day-3")[0].innerHTML = "Sábados (incl. 30 min descanso)";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "10:00am a 12:00pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "6:30pm a 8:30pm";
    document.getElementsByClassName("hor-3")[0].innerHTML = "8:00am a 12:30pm";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-3")[0].innerHTML = "Virtual";

  } else if (idName === "A1 semi-intensivo") {
    disp.innerHTML = "A1 completo</br>semi-intensivo";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML =
      "Lunes, miércoles y viernes";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:00pm a 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";

  } else if (idName === "A1 - Intensivo") {
    disp.innerHTML = "A1 completo</br>Intensivo";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Lunes a viernes";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:00pm a 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";

  } else if (idName === "A2.1") {
    disp.innerHTML = "A2.1";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Lunes y miércoles";
    document.getElementsByClassName("day-2")[0].innerHTML = "Martes y Jueves";
    document.getElementsByClassName("day-3")[0].innerHTML = "Sábados (incl. 30 min descanso)";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm a 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "6:30pm a 8:30pm";
    document.getElementsByClassName("hor-3")[0].innerHTML = "8:00am a 12:30pm";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-3")[0].innerHTML = "Virtual";

  } else if (idName === "A2.2") {
    disp.innerHTML = "A2.2";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Lunes y miércoles";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "Sábados (incl. 30 min descanso)";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm a 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "8:00am a 12:30pm";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "Virtual";

  } else if (idName === "A2 semi-intensivo") {
    disp.innerHTML = "A2 completo</br>semi-intensivo";
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

  } else if (idName === "A2+ NUEVO!") {
    disp.innerHTML = "Alemán para</br>profesionales</br>de la salud";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML =
      "Sábados";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "2:00pm a 4:00pm";
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
    document.getElementsByClassName("day-2")[0].innerHTML = "Sábados (incl. 30 min descanso)";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm a 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "8:00am a 12:30pm";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "B1.2") {
    disp.innerHTML = "B1.2";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Lunes y miércoles";
    document.getElementsByClassName("day-2")[0].innerHTML = "Sábados (incl. 30 min descanso)";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm a 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "8:00am a 12:30pm";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "B1 - Completo") {
    disp.innerHTML = "B1 completo</br>semi-intensivo";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML =
      "Lunes - Miercoles - Viernes";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:00pm a 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "B1 +") {
    disp.innerHTML = "B1 +";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Lunes y Miercoles";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm a 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "B2.1") {
    disp.innerHTML = "B2.1";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Martes y Jueves";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm a 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "B2.2") {
    disp.innerHTML = "B2.2";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Martes y Jueves";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm a 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  } else if (idName === "B2.3") {
    disp.innerHTML = "B2.3";
    //Tratamiento especial días
    document.getElementsByClassName("day-1")[0].innerHTML = "Martes y Jueves";
    document.getElementsByClassName("day-2")[0].innerHTML = "-";
    document.getElementsByClassName("day-3")[0].innerHTML = "-";

    //Tratamiento especial horas
    document.getElementsByClassName("hor-1")[0].innerHTML = "6:30pm a 8:30pm";
    document.getElementsByClassName("hor-2")[0].innerHTML = "-";
    document.getElementsByClassName("hor-3")[0].innerHTML = "-";

    //Tratamiento especial sedes
    document.getElementsByClassName("sed-1")[0].innerHTML = "Virtual";
    document.getElementsByClassName("sed-2")[0].innerHTML = "-";
    document.getElementsByClassName("sed-3")[0].innerHTML = "-";
  }
};
