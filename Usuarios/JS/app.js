// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

document.addEventListener('DOMContentLoaded', () => {

    // Configuracion de FireBase
    const firebaseConfig = {
        apiKey: "AIzaSyCj1B8eqbWlPwKR1feEfbPvu1FF3bt3CZA",
        authDomain: "usuariobd-7c89f.firebaseapp.com",
        projectId: "usuariobd-7c89f",
        storageBucket: "usuariobd-7c89f.appspot.com",
        messagingSenderId: "441003555524",
        appId: "1:441003555524:web:05076beca0db4c90236791"
    };

    // Inicializar Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    // Funcion que agrega a FireBase usuarios
    var Add2BD = (
        nombre,
        apPat,
        apMat,
        fechaNacimiento,
        calle,
        colonia,
        cp,
        Estado,
        Municipio,
        numInt,
        numExt,
        phoneCasa,
        phoneCelular,
        phoneTrabajo
    ) => {
        set(ref(db, 'usuarios/' + nombre), {
            nombre: nombre,
            apellidoPaterno: apPat,
            apellidoMaterno: apMat,
            fechaNacimiento: fechaNacimiento,
            direccion_calle: calle,
            direccion_colonia: colonia,
            direccion_cp: cp,
            direccion_estado: Estado,
            direccion_municipio: Municipio,
            direccion_numInt: numInt,
            direccion_numExt: numExt,
            telCasa: phoneCasa,
            telCelular: phoneCelular,
            telTrabajo: phoneTrabajo
        });
    };

    var btnAddRegistro = $('#addRegistro');
    var btnAddTelefono = $('#addTelefono');

    var ArrayPersonas = [];

    btnAddRegistro.on('click', () => {

        var txtName = $("#txtName");
        var txtApellidoMat = $('#txtApellidoMat');
        var txtApellidoPat = $('#txtApellidoPat');
        var txtDate = $('#txtDate');
        var txtCalle = $('#txtCalleID');
        var txtColonia = $('#txtColoniaId');
        var txtCP = $('#txtCPid');
        var txtNumInt = $('#txtNumInt');
        var txtNumExt = $('#txtNumExt')
        var txtPhone = $('#txtPhone');
        var txtCelular = $('#txtCelular');
        var txtPhoneWork = $('#txtPhoneWork');

        var txtMunicipio = $('#txtMunicipio');
        var selectEstado= $('#selectEstado');

        var NumeroInterior = () => {
            if ($('#chkNumInt:checked').val()) {
                return 'S/N';
            } else {
                return txtNumInt.val();
            }
        };

        var NumeroExterior = () => {
            if ($('#chkNumExt:checked').val()) {
                return 'S/N';
            } else {
                return txtNumExt.val();
            }
        };

        var TelCelular = () => {
            if (txtCelular.val().trim() != '') {
                return txtCelular.val();
            } else {
                return 'S/N';
            }
        };

        var TelTrabajo = () => {
            if (txtPhoneWork.val().trim() != '') {
                return txtPhoneWork.val();
            } else {
                return 'S/N';
            }
        };

        var Direccion = {
            calle: txtCalle.val(),
            colonia: txtColonia.val(),
            cp: txtCP.val(),
            municipio: txtMunicipio.val(),
            numInt: NumeroInterior(),
            numExt: NumeroExterior(),
            estado: $('#'+selectEstado.val()+'EstID').attr('name')
        };

        var Telefono = {
            telefono: txtPhone.val(),
            celular: TelCelular(),
            trabajo: TelTrabajo()
        };

        var Persona = {
            nombre: txtName.val(),
            apellidoPat: txtApellidoMat.val(),
            apellidoMat: txtApellidoPat.val(),
            nacimiento: txtDate.val(),
            Direccion: Direccion,
            Telefono: Telefono
        };
        ArrayPersonas.push(Persona);
        AddRowTabla(Persona);
        
        try{
            Add2BD(
                Persona.nombre,
                Persona.apellidoMat,
                Persona.apellidoPat,
                Persona.nacimiento,
                Persona.Direccion.calle,
                Persona.Direccion.colonia,
                Persona.Direccion.cp,
                Persona.Direccion.estado,
                Persona.Direccion.municipio,
                Persona.Direccion.numInt,
                Persona.Direccion.numExt,
                Persona.Telefono.telefono,
                Persona.Telefono.celular,
                Persona.Telefono.trabajo
            );

            Swal.fire({
                title: "Registro Agregado",
                text: "¡El registro fue añadido con exito!",
                icon: "success",
                timer: 1000,
                showConfirmButton: false
            });
        }catch(e){
            Swal.fire({
                title: "Error en el Registro",
                text: "¡El registro no fue añadido!",
                icon: "error",
                timer: 1000,
                showConfirmButton: false
            });
        }

        
    });

    var AddRowTabla = (Persona) => {
        var col = crearElementoHTML('tr', 'tablaRegistros', 'Registro' + (ArrayPersonas.length + 1));
        crearElementoHTML('td', col.id, '', Persona.nombre);
        crearElementoHTML('td', col.id, '', Persona.apellidoMat);
        crearElementoHTML('td', col.id, '', Persona.apellidoPat);
        crearElementoHTML('td', col.id, '', Persona.nacimiento);
        crearElementoHTML('td', col.id, '', Persona.Direccion.calle);
        crearElementoHTML('td', col.id, '', Persona.Direccion.colonia);
        crearElementoHTML('td', col.id, '', Persona.Direccion.cp);
        crearElementoHTML('td', col.id, '', Persona.Direccion.estado);
        crearElementoHTML('td', col.id, '', Persona.Direccion.municipio);
        crearElementoHTML('td', col.id, '', Persona.Direccion.numInt);
        crearElementoHTML('td', col.id, '', Persona.Direccion.numExt);
        crearElementoHTML('td', col.id, '', Persona.Telefono.telefono);
        crearElementoHTML('td', col.id, '', Persona.Telefono.celular);
        crearElementoHTML('td', col.id, '', Persona.Telefono.trabajo);
        crearElementoHTML('td', col.id, col.id + 'btnDel', '<button><ion-icon name="trash"></ion-icon></button>').classList = 'text-center';
        $('#' + col.id + 'btnDel').attr('onClick', 'eliminarRegistroTabla(' + col.id + ')');
    };

    var crearElementoHTML = (etiqueta, idPadre, idHijo = '', contenido = '') => {
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
});