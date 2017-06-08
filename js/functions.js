var listado, estado, activos, cuenta = 0
var dim = {
  ancho: 10,
  alto: 10
};

function createTable() {
    estado = [];

    for (var x = 0; x < dim.alto; x++) {
        document.write("<tr>");
        estado[x] = [];

        for (var y = 0; y < dim.ancho; y++) {
            estado[x][y] = false;
            document.write("<td class='' onclick='cambiarCelda(this)'></td>");
        }
        document.write("</tr>");
    }
}

function cambiarCelda(celda) {
    if(celda.className == '') {
        celda.className = 'vivo'
    }
    else {
        celda.className = ''
    }
}

function sgtePaso() {
    listado = document.getElementsByTagName('td');
    console.log(listado[3]);

    var bool;

    activos = 0;

    for (var i = 0; i < dim.alto; i++) {
        for (var j = 0; j < dim.ancho; j++) {
            bool = (listado[dim.ancho * i + j].className == 'vivo');
            estado[i][j] = bool;

            if(bool) activos++;
        }
    }
}
