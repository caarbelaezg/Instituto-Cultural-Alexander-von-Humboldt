let nHorario = (clase) => {
    let idName = document.getElementsByClassName(clase)[0].innerHTML
    let disp = document.getElementsByClassName('actual-disp')[0]

    if (idName === 'A1.1' || idName === 'A1.2' || idName === 'A2.1') {
        disp.innerHTML = idName === 'A1.1' ? 'A1.1' : idName === 'A1.2' ? 'A1.2' : 'A2.1'
            //Tratamiento especial días
        document.getElementsByClassName('day-1')[0].innerHTML = 'Lunes y miércoles'
        document.getElementsByClassName('day-2')[0].innerHTML = 'Martes y jueves'
        document.getElementsByClassName('day-3')[0].innerHTML = 'Sábados'

        //Tratamiento especial horas
        document.getElementsByClassName('hor-1')[0].innerHTML = '6:30pm - 8:30pm'
        document.getElementsByClassName('hor-2')[0].innerHTML = '6:30pm  - 8:30pm'
        document.getElementsByClassName('hor-3')[0].innerHTML = '8:00am - 12:30pm'

        //Tratamiento especial sedes
        document.getElementsByClassName('sed-1')[0].innerHTML = 'Virtual'
        document.getElementsByClassName('sed-2')[0].innerHTML = 'Virtual'
        document.getElementsByClassName('sed-3')[0].innerHTML = 'Virtual'
    } else if (idName === 'A1 - Completo') {
        disp.innerHTML = 'A1'
            //Tratamiento especial días
        document.getElementsByClassName('day-1')[0].innerHTML = 'Lunes, miércoles y viernes'
        document.getElementsByClassName('day-2')[0].innerHTML = 'Lunes, miércoles y viernes'
        document.getElementsByClassName('day-3')[0].innerHTML = ''

        //Tratamiento especial horas
        document.getElementsByClassName('hor-1')[0].innerHTML = '6:00pm - 8:30pm'
        document.getElementsByClassName('hor-2')[0].innerHTML = '9:30am - 12:00m'
        document.getElementsByClassName('hor-3')[0].innerHTML = '-'

        //Tratamiento especial sedes
        document.getElementsByClassName('sed-1')[0].innerHTML = 'Virtual'
        document.getElementsByClassName('sed-2')[0].innerHTML = 'Virtual'
        document.getElementsByClassName('sed-3')[0].innerHTML = '-'
    } else if (idName === 'A2.2') {
        disp.innerHTML = 'A2.2'
            //Tratamiento especial días
        document.getElementsByClassName('day-1')[0].innerHTML = 'Lunes y miércoles'
        document.getElementsByClassName('day-2')[0].innerHTML = '-'
        document.getElementsByClassName('day-3')[0].innerHTML = 'Sábados'

        //Tratamiento especial horas
        document.getElementsByClassName('hor-1')[0].innerHTML = '6:30pm - 8:30pm'
        document.getElementsByClassName('hor-2')[0].innerHTML = '-'
        document.getElementsByClassName('hor-3')[0].innerHTML = '8:00am - 12:30pm'

        //Tratamiento especial sedes
        document.getElementsByClassName('sed-1')[0].innerHTML = 'Virtual'
        document.getElementsByClassName('sed-2')[0].innerHTML = '-'
        document.getElementsByClassName('sed-3')[0].innerHTML = 'Virtual'
    } else if (idName === 'A2 - Completo') {
        disp.innerHTML = 'A2'
            //Tratamiento especial días
        document.getElementsByClassName('day-1')[0].innerHTML = 'Lunes, miércoles y viernes'
        document.getElementsByClassName('day-2')[0].innerHTML = '-'
        document.getElementsByClassName('day-3')[0].innerHTML = '-'

        //Tratamiento especial horas
        document.getElementsByClassName('hor-1')[0].innerHTML = '6:00pm - 8:30pm'
        document.getElementsByClassName('hor-2')[0].innerHTML = '-'
        document.getElementsByClassName('hor-3')[0].innerHTML = '-'

        //Tratamiento especial sedes
        document.getElementsByClassName('sed-1')[0].innerHTML = 'Virtual'
        document.getElementsByClassName('sed-2')[0].innerHTML = '-'
        document.getElementsByClassName('sed-3')[0].innerHTML = '-'
    } else if(idName === 'B1.1'){
        disp.innerHTML = 'B1.1'
        //Tratamiento especial días
        document.getElementsByClassName('day-1')[0].innerHTML = 'Lunes y miércoles'
        document.getElementsByClassName('day-2')[0].innerHTML = 'Sábado'
        document.getElementsByClassName('day-3')[0].innerHTML = '-'
    
        //Tratamiento especial horas
        document.getElementsByClassName('hor-1')[0].innerHTML = '6:30pm - 8:30pm'
        document.getElementsByClassName('hor-2')[0].innerHTML = '8:00am - 12:30pm'
        document.getElementsByClassName('hor-3')[0].innerHTML = '-'
    
        //Tratamiento especial sedes
        document.getElementsByClassName('sed-1')[0].innerHTML = 'Virtual'
        document.getElementsByClassName('sed-2')[0].innerHTML = 'Virtual'
        document.getElementsByClassName('sed-3')[0].innerHTML = '-'

    }else if (idName === 'B1.2') {
        disp.innerHTML = 'B1.2'
            //Tratamiento especial días
        document.getElementsByClassName('day-1')[0].innerHTML = 'Lunes y miércoles'
        document.getElementsByClassName('day-2')[0].innerHTML = 'Martes y jueves'
        document.getElementsByClassName('day-3')[0].innerHTML = 'Sábado'

        //Tratamiento especial horas
        document.getElementsByClassName('hor-1')[0].innerHTML = '6:30pm - 8:30pm'
        document.getElementsByClassName('hor-2')[0].innerHTML = '6:30pm - 8:30pm'
        document.getElementsByClassName('hor-3')[0].innerHTML = '8:00am - 12:30pm'

        //Tratamiento especial sedes
        document.getElementsByClassName('sed-1')[0].innerHTML = 'Virtual'
        document.getElementsByClassName('sed-2')[0].innerHTML = 'Virtual'
        document.getElementsByClassName('sed-3')[0].innerHTML = 'Virtual'
    } else if (idName === 'B1 +') {
        disp.innerHTML = 'B1 +'
            //Tratamiento especial días
        document.getElementsByClassName('day-1')[0].innerHTML = '-'
        document.getElementsByClassName('day-2')[0].innerHTML = '-'
        document.getElementsByClassName('day-3')[0].innerHTML = 'Sábado'

        //Tratamiento especial horas
        document.getElementsByClassName('hor-1')[0].innerHTML = '-'
        document.getElementsByClassName('hor-2')[0].innerHTML = '-'
        document.getElementsByClassName('hor-3')[0].innerHTML = '8:00am - 12:30pm'

        //Tratamiento especial sedes
        document.getElementsByClassName('sed-1')[0].innerHTML = '-'
        document.getElementsByClassName('sed-2')[0].innerHTML = '-'
        document.getElementsByClassName('sed-3')[0].innerHTML = 'Virtual'
    } else if (idName === 'B2.1') {
        disp.innerHTML = 'B2.1'
            //Tratamiento especial días
        document.getElementsByClassName('day-1')[0].innerHTML = 'Lunes y miércoles'
        document.getElementsByClassName('day-2')[0].innerHTML = '-'
        document.getElementsByClassName('day-3')[0].innerHTML = '-'

        //Tratamiento especial horas
        document.getElementsByClassName('hor-1')[0].innerHTML = '6:30pm - 8:30pm'
        document.getElementsByClassName('hor-2')[0].innerHTML = '-'
        document.getElementsByClassName('hor-3')[0].innerHTML = '-'

        //Tratamiento especial sedes
        document.getElementsByClassName('sed-1')[0].innerHTML = 'Virtual'
        document.getElementsByClassName('sed-2')[0].innerHTML = '-'
        document.getElementsByClassName('sed-3')[0].innerHTML = '-'
    } else if (idName === 'B2.2') {
        disp.innerHTML = 'B2.2'
            //Tratamiento especial días
        document.getElementsByClassName('day-1')[0].innerHTML = '-'
        document.getElementsByClassName('day-2')[0].innerHTML = '-'
        document.getElementsByClassName('day-3')[0].innerHTML = 'Sábado'

        //Tratamiento especial horas
        document.getElementsByClassName('hor-1')[0].innerHTML = '-'
        document.getElementsByClassName('hor-2')[0].innerHTML = '-'
        document.getElementsByClassName('hor-3')[0].innerHTML = '8:00am - 12:30pm'

        //Tratamiento especial sedes
        document.getElementsByClassName('sed-1')[0].innerHTML = '-'
        document.getElementsByClassName('sed-2')[0].innerHTML = '-'
        document.getElementsByClassName('sed-3')[0].innerHTML = 'Virtual'
    } else if (idName === 'C1') {
        disp.innerHTML = 'C1'
            //Tratamiento especial días
        document.getElementsByClassName('day-1')[0].innerHTML = '-'
        document.getElementsByClassName('day-2')[0].innerHTML = 'Martes y jueves'
        document.getElementsByClassName('day-3')[0].innerHTML = '-'

        //Tratamiento especial horas
        document.getElementsByClassName('hor-1')[0].innerHTML = '-'
        document.getElementsByClassName('hor-2')[0].innerHTML = '6:30pm  - 8:30pm'
        document.getElementsByClassName('hor-3')[0].innerHTML = '-'

        //Tratamiento especial sedes
        document.getElementsByClassName('sed-1')[0].innerHTML = ''
        document.getElementsByClassName('sed-2')[0].innerHTML = 'Virtual'
        document.getElementsByClassName('sed-3')[0].innerHTML = ''
    }

}