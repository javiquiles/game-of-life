var celdas, estados, activos, interval, cuenta = 0
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
            document.write("<td class='' onclick='changeCell(this)'></td>");
        }
        document.write("</tr>");
    }
}

function changeCell(celda) {
    if (celda.className == '') {
        celda.className = 'viva'
    }
    else {
        celda.className = ''
    }
}

function autoPlay() {
    /* Llamo a la funcion nextStep cada 1 segundo */
    interval = setInterval(nextStep, 500);

    /*
    interval = setInterval(function () {
        nextStep();
    }, 1000);
    */
}

function nextStep() {
    celdas = document.getElementsByTagName('td'); //Array de 100 celdas.

    var i, j, bool;

    activos = 0;

    for (i = 0; i < dim.alto; i++) {
        for (j = 0; j < dim.ancho; j++) {
            /* Comprobamos los estados de todas las celdas */
            bool = (celdas[dim.ancho * i + j].className == 'viva');
            estados[i][j] = bool;

            if (bool) activos++;
        }
    }

    if (activos == 0) {
        clearInterval(interval);
        console.log("No hay mas celdas vivas");
    }
    else {
        console.log("Celdas vivas");
    }

    var n, k, row, col,

    /* Matriz con las celdas adyacentes. (Celdas vecinas) */
    r = [[-1,-1], [0,-1], [1,-1], [-1,0], [1,0], [-1,1], [0,1], [1,1]];

    for (i = 0; i < dim.alto; i++) { //0 a 10
        for (j = 0; j < dim.ancho; j++) { //0 a 10
            n = 0;

            //console.log("td nro: " + i + j)
            for (k = 0; k < r.length; k++) { //0 a 8
                row = i + r[k][0];
                col = j + r[k][1];

                if (row == -1) row = 9;
                if (col == -1) col = 9;
                if (row == 10) row = 0;
                if (col == 10) col = 0;

                //console.log(row);
                //console.log(col);

                /*if(row < 0 || col < 0 || row == dim.alto || col == dim.ancho)
                    continue;*/

                if(estados[row][col])
                    n++;
            }
            bool = estados[i][j];

            // Reglas del juego
            if (!bool && n == 3)
                celdas[dim.ancho * i + j].className = 'viva';
            else if (bool && (n == 3 || n == 2))
                celdas[dim.ancho * i + j].className = 'viva';
            else
                celdas[dim.ancho * i + j].className = '';
        }
    }
}
