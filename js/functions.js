var listado, estados, activos, cuenta = 0
var dim = {
  ancho: 10,
  alto: 10
};

function createTable() {
    estados = []; //Definimos el array estado.

    for (var x = 0; x < dim.alto; x++) {
        document.write("<tr>");
        estados[x] = []; //Definimos la matriz estado.

        for (var y = 0; y < dim.ancho; y++) {
            estados[x][y] = false;
            document.write("<td class='' onclick='cambiarCelda(this)'></td>");
        }
        document.write("</tr>");
    }
}

function cambiarCelda(celda) {
    if (celda.className == '') {
        celda.className = 'viva'
    }
    else {
        celda.className = ''
    }
}

function sgtePaso() {
    listado = document.getElementsByTagName('td'); //Array de 100 celdas.
    console.log(listado[3]);

    var bool;

    activos = 0;

    for (var i = 0; i < dim.alto; i++) {
        for (var j = 0; j < dim.ancho; j++) {
            /* Comprobamos los estados de todas las celdas */
            bool = (listado[dim.ancho * i + j].className == 'viva');
            estados[i][j] = bool;

            if (bool) activos++;
        }
    }

    if (activos == 0) {
        console.log('No hay mas celdas vivas');
    }
}
