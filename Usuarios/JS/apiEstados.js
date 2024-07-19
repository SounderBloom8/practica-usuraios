document.addEventListener('DOMContentLoaded', () => {

    var createElementoHTML = (etiqueta, idPadre, idHijo = '', contenido = '') => {
        var elemento = document.createElement(etiqueta);
        if (idHijo != '') {
            elemento.id = idHijo;
        }
        document.getElementById(idPadre).appendChild(elemento);
        if (contenido != '') {
            elemento.innerHTML = contenido;
        }
        return elemento;
    };

    function capitalizarPalabras(str) {
        return str.split(' ').map(palabra => {
            if (palabra.toLowerCase() === 'de') {
                return palabra.toLowerCase();
            } else {
                return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
            }
        }).join(' ');
    }

    var urlJSON1 = '../JSON/estados-municipios.json';
    var urlJSON2 = '../JSON/estados.json';
    var Estados = [];

    async function obtenerEstadoMunicipios() {

        try {
            var response1 = await fetch(urlJSON1);
            var response2 = await fetch(urlJSON2);

            if (!response1.ok || !response2.ok) {
                return;
            }

            const datos1 = await response1.json();
            const datos2 = await response2.json();

            datos2.forEach(estadoI => {
                var ObjMunicipio = datos1[capitalizarPalabras(estadoI.nombre)];
                var ObjEstado = {
                    nombre: estadoI.nombre,
                    clave: estadoI.clave,
                    municipios: ObjMunicipio
                };
                Estados.push(ObjEstado);
            });

            for (var i = 0; i < Estados.length; i++) {
                var e = createElementoHTML('option', 'selectEstado', i+'EstID', capitalizarPalabras(Estados[i].nombre));
                e.setAttribute('value', i);
                e.setAttribute('name', capitalizarPalabras(Estados[i].nombre));
            }

            document.getElementById('txtMunicipio').innerHTML = '';
            for (var a = 0; a < Estados[0].municipios.length; a++) {
                var e = createElementoHTML('option', 'txtMunicipio', '', capitalizarPalabras(Estados[0].municipios[a]));
            }

        } catch (error) {
            console.log('Error al procesar el JSON:', error);
        }
    };

    obtenerEstadoMunicipios();



    document.getElementById('selectEstado').addEventListener('change', () => {
        var idEstado = document.getElementById('selectEstado').selectedIndex;
        document.getElementById('txtMunicipio').innerHTML = '';
        for (var a = 0; a < Estados[idEstado].municipios.length; a++) {
            var e = createElementoHTML('option', 'txtMunicipio', '', capitalizarPalabras(Estados[idEstado].municipios[a]));
        }
    });
});