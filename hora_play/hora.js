/*var am_pm = window.document.getElementById('saudações')
var hours = new Date();
var hora = hours.getHours();

if (hora < 6) {
    am_pm.innerHTML = 'Boa Madrugada!'
} else if (hora < 12) {
    am_pm.innerHTML = 'Bom Dia!'
} else if (hora < 18) {
    am_pm.innerHTML = 'Boa Tarde!'
} else {
    am_pm.innerHTML = 'Boa Noite!'
}

console.log(`Agora são ${hora} Horas ${minutes} Minutos e ${seconds} Segundos.`)
if (hora < 6) {
    console.log('Boa Madrugada')
} else if (hora < 12) {
    console.log('Bom Dia')
} else if (hora <= 18) {
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}*/

function relogio() {
    var hours = new Date();
    var hora = hours.getHours();
    var minutes = hours.getMinutes();
    var seconds = hours.getSeconds();
    var am_pm = hours.getHours();

    if (am_pm < 12) {
        am_pm = 'AM'
    } else {
        am_pm = 'PM'
    }

    if (hora < 10) {
        hora = '0' + hora;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    var data = new Date();
    var day = data.getDate();
    var month = data.getMonth() + 1;
    var year = data.getFullYear();



    document.getElementById('hours').innerHTML = hora + ':' + minutes + ':' + seconds + ' ' + am_pm
    document.getElementById('data').innerHTML = month + '/' + day + '/' + year
}



window.setInterval('relogio()', 1000)

