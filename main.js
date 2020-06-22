//EA = esperando azul
//A = jugando azul
//ER = esperando rojo
//R = jugando rojo
var estado = "EA"

var tiempoSinTexto = 2000
var tiempoConTexto = 2000
var puntajeR = 0
var puntajeA = 0
var puntosEnJuego = 0
var index

var clearOrder = false

var cardRojo = $('#cardRojo')
var cardAzul = $('#cardAzul')
var puntajeAzul = $('#puntajeAzul')
var puntajeRojo = $('#puntajeRojo')
var cardPrincipal = $('#cardPrincipal')
var btnPrincipal = $('#btnPrincipal')
var btnsCI = $('#btnsCI')
var btnCorrecto = $('#btnCorrecto')
var btnIncorrecto = $('#btnIncorrecto')
var reloj = $('#timer')
var textoP = $('#pregunta')
var textoT = $('#textoBiblico')
var body = $(document.body)
var btnmasrojo = $('#masrojo')
var btnmenosrojo = $('#menosrojo')
var btnmasazul = $('#masazul')
var btnmenosazul = $('#menosazul')
var btncambiar = $('#cambiar')
var btnpasar = $('#pasar')
var btnModificarTiempo = $('#modificarTiempo')

btnPrincipal.on('click', function () {
    principal()
})
btnModificarTiempo.on('click', function () {
    tiempoSinTexto = Number(window.prompt("Tiempo sin ayuda (en segundos)", "")) * 100;
    tiempoConTexto = Number(window.prompt("Tiempo con ayuda (en segundos)", "")) * 100;
})

btnpasar.on('click', function () {
    if (estado == 'A') {
        principal()
        terminarMano(0)
        cambiar()
        textoP.text("")
        textoT.text("")
    } else if (estado == 'R') {
        principal()
        terminarMano(0)
        cambiar()
        textoP.text("")
        textoT.text("")
    }
})
btncambiar.on('click', function () {
    cambiar()
})
btnmasazul.on('click', function () {
    puntajeAzul.text(++puntajeA)
})
btnmenosazul.on('click', function () {
    puntajeAzul.text(--puntajeA)
})
btnmasrojo.on('click', function () {
    puntajeRojo.text(++puntajeR)
})
btnmenosrojo.on('click', function () {
    puntajeRojo.text(--puntajeR)
})
btnCorrecto.on('click', function () {
    terminarMano(puntosEnJuego)
})

btnIncorrecto.on('click', function () {
    terminarMano(0)
})

function principal() {
    if (estado == 'EA') {
        cargarPregunta()
        estado = 'A'
    } else if (estado == 'A') {
        reloj.addClass('invisible')
        clearOrder = true
        btnPrincipal.addClass('oculto')
        btnsCI.removeClass('oculto')
        textoT.removeClass('invisible')
        textoT.text(preguntas[index].r)
        
    } else if (estado == 'ER') {
        cargarPregunta();
        estado = 'R'
    } else if (estado == 'R') {
        reloj.addClass('invisible')
        clearOrder = true
        btnPrincipal.addClass('oculto')
        btnsCI.removeClass('oculto')
        textoT.removeClass('invisible')
        textoT.text(preguntas[index].r)
    }
}

function cambiar() {
    if (estado == 'EA') {
        cardAzul.removeClass('extra')
        cardRojo.addClass('extra')
        body.addClass('bodyrojo')
        body.removeClass('bodyazul')
        estado = 'ER'
    } else if (estado == 'ER') {
        cardRojo.removeClass('extra')
        cardAzul.addClass('extra')
        body.addClass('bodyazul')
        body.removeClass('bodyrojo')
        estado = 'EA'
    } else if (estado == 'A') {
        cardAzul.removeClass('extra')
        cardRojo.addClass('extra')
        body.addClass('bodyrojo')
        body.removeClass('bodyazul')
        estado = 'R'
    } else if (estado == 'R') {
        cardRojo.removeClass('extra')
        cardAzul.addClass('extra')
        body.addClass('bodyazul')
        body.removeClass('bodyrojo')
        estado = 'A'
    }
}

function cargarPregunta() {
    reloj.removeClass('invisible')
    btnPrincipal.text('Ver respuesta')
    index = Math.floor(Math.random() * preguntas.length)
    textoP.text(preguntas[index].p)
    textoT.addClass('invisible')
    textoT.text(preguntas[index].t)
    startTimer(tiempoConTexto + tiempoSinTexto, reloj)
    puntosEnJuego = 3
}

function terminarMano(params) {
    preguntas.splice(index, 1)
    if (estado == 'A') {
        puntajeA = puntajeA + params
        puntajeAzul.text(puntajeA)
        btnsCI.addClass('oculto')
        btnPrincipal.removeClass('oculto')
        cardAzul.removeClass('extra')
        cardRojo.addClass('extra')
        body.addClass('bodyrojo')
        body.removeClass('bodyazul')
        estado = 'ER'
        btnPrincipal.text('Ver Pregunta')
    }
    else if (estado == 'R') {
        puntajeR = puntajeR + params
        puntajeRojo.text(puntajeR)
        btnsCI.addClass('oculto')
        btnPrincipal.removeClass('oculto')
        cardRojo.removeClass('extra')
        cardAzul.addClass('extra')
        body.addClass('bodyazul')
        body.removeClass('bodyrojo')
        estado = 'EA'
        btnPrincipal.text('Ver Pregunta')
    }
    textoP.text("")
    textoT.text("")
}


function mostrarTexto() {
    textoT.removeClass('invisible')
    puntosEnJuego = 1
}

function tiempoAgotado() {
    reloj.textContent = 'TIEMPO AGOTADO'
    puntosEnJuego = 0
}

function startTimer(duration, display) {
    reloj.removeClass('invisible')
    var timer = duration,
        minutes, seconds;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 100, 10);
        seconds = parseInt(timer % 100, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);


        var a = 1
        if (clearOrder) {
            clearInterval(interval);
            reloj.addClass('invisible')
            clearOrder = false
        } else {
            if (timer < tiempoConTexto & a == 1) {
                mostrarTexto()
                a = 0
            }
            if (--timer <= 0) {
                timer = 1;
                display.text('TIEMPO AGOTADO')
                puntosEnJuego = 0;
            }
        }
    }, 10);
}
