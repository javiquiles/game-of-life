var listado, estado, activos, cuenta = 0
var dim = {
  ancho: 10,
  alto: 10
};

function cambiarCelda(celda) {
    if(celda.className == '') {
        celda.className = 'vivo'
    }
    else {
        celda.className = ''
    }
}
