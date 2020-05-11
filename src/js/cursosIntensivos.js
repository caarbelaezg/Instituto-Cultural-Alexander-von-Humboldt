let nHorarioI = (clase) => {
    let idName = document.getElementsByClassName(clase)[0].innerHTML
    let disp = document.getElementsByClassName('actual-disp')[0]
    console.log(idName)

    disp.innerHTML = idName === 'A1.1' ? 'A1.1' : idName === 'A1.2' ? 'A1.2' : idName === 'A2.1' ? 'A2.1' : idName === 'A2.2' ? 'A2.2' : idName === 'B1.1' ? 'B1.1' : idName === 'B1.2' ? 'B1.2' : idName === 'B2' ? 'B2' : idName === 'C1' ? 'C1' : 'A1 Intensivo'
    if (idName !== 'A1 - Intensivo' && idName !== 'B2' && idName !== 'C1') {

        //Tratamiento especial días
        document.getElementsByClassName('day-1')[0].innerHTML = 'Lunes a viernes'
            //Tratamiento especial horas
        document.getElementsByClassName('hor-1')[0].innerHTML = '6:00pm - 8:30pm'
            //Tratamiento especial sedes
        document.getElementsByClassName('sed-1')[0].innerHTML = 'Calazans'

    } else if (idName === 'A1 - Intensivo') {
        //Tratamiento especial días
        document.getElementsByClassName('day-1')[0].innerHTML = 'Lunes a viernes'
            //Tratamiento especial horas
        document.getElementsByClassName('hor-1')[0].innerHTML = '8:00am - 1:00pm'
            //Tratamiento especial sedes
        document.getElementsByClassName('sed-1')[0].innerHTML = 'Calazans'

    } else {
        //Tratamiento especial días
        document.getElementsByClassName('day-1')[0].innerHTML = 'Se ofertará nuevamente en Agosto'
            //Tratamiento especial horas
        document.getElementsByClassName('hor-1')[0].innerHTML = ''
            //Tratamiento especial sedes
        document.getElementsByClassName('sed-1')[0].innerHTML = ''

    }
}