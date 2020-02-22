/*
OBJETO CON LAS PROPIEDADES DE LA CALCULADORA
*/

var p = {
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadSignos: 0,
    cantidadDecimal: false,
    resultado: false
};

/*
OBJETO CON LOS METODOS DE LA CALCULADORA 
*/

var m = {
    inicio: () => {
        for (var i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimirTecla);
        }
    },
    teclado: () => {
        document.addEventListener("keydown", m.oprimir);
    },
    oprimir: t => {
        if (t.keyCode == 48 || t.keyCode == 96) {
            p.accion = "numero";
            p.digito = 0;
        }

        if (t.keyCode == 49 || t.keyCode == 97) {
            p.accion = "numero";
            p.digito = 1;
        }

        if (t.keyCode == 50 || t.keyCode == 98) {
            p.accion = "numero";
            p.digito = 2;
        }

        if (t.keyCode == 51 || t.keyCode == 99) {
            p.accion = "numero";
            p.digito = 3;
        }

        if (t.keyCode == 52 || t.keyCode == 100) {
            p.accion = "numero";
            p.digito = 4;
        }

        if (t.keyCode == 53 || t.keyCode == 101) {
            p.accion = "numero";
            p.digito = 5;
        }

        if (t.keyCode == 54 || t.keyCode == 102) {
            p.accion = "numero";
            p.digito = 6;
        }

        if (t.keyCode == 55 || t.keyCode == 103) {
            p.accion = "numero";
            p.digito = 7;
        }

        if (t.keyCode == 56 || t.keyCode == 104) {
            p.accion = "numero";
            p.digito = 8;
        }

        if (t.keyCode == 57 || t.keyCode == 105) {
            p.accion = "numero";
            p.digito = 9;
        }

        if (t.keyCode == 187 || t.keyCode == 107) {
            p.accion = "signo";
            p.digito = "+";
        }

        if (t.keyCode == 189 || t.keyCode == 109) {
            p.accion = "signo";
            p.digito = "-";
        }

        if (t.keyCode == 88 || t.keyCode == 106) {
            p.accion = "signo";
            p.digito = "*";
        }

        if (t.keyCode == 111) {
            p.accion = "signo";
            p.digito = "/";
        }

        if (t.keyCode == 190 || t.keyCode == 110) {
            p.accion = "decimal";
            p.digito = ".";
        }

        if (t.keyCode == 13) {
            p.accion = "igual";
        }

        if (t.keyCode == 8) {
            m.limpiar();
        }

        m.calculadora(p.accion, p.digito);
    },
    oprimirTecla: e => {
        p.accion = e.target.getAttribute("class");
        p.digito = e.target.innerHTML;
        m.calculadora(p.accion, p.digito);
    },
    calculadora: (a, d) => {
        switch (a) {
            case "numero":
                p.cantidadSignos = 0;

                if (p.operaciones.innerHTML == 0) {
                    p.operaciones.innerHTML = d;
                } else {
                    if (p.resultado) {
                        p.resultado = false;
                        p.operaciones.innerHTML = d;
                    } else {
                        p.operaciones.innerHTML += d;
                    }
                }
                break;

            case "signo":
                p.cantidadSignos++;

                if (p.cantidadSignos == 1) {
                    if (p.operaciones.innerHTML == 0) {
                        p.operaciones.innerHTML = 0;
                    } else {
                        p.operaciones.innerHTML += d;
                        p.cantidadDecimal = false;
                        p.resultado = false;
                    }
                }
                break;

            case "decimal":
                if (!p.cantidadDecimal) {
                    p.operaciones.innerHTML += d;
                    p.cantidadDecimal = true;
                    p.resultado = false;
                }
                break;

            case "igual":
                p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
                p.resultado = true;
                break;
        }
    },

    limpiar: () => {
        p.operaciones.innerHTML = 0;
    }
};

m.inicio();
m.teclado();