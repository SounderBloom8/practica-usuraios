document.addEventListener('DOMContentLoaded', () => {
    var txtName = $("#txtName");
    var txtApellidoMat = $('#txtApellidoMat');
    var txtApellidoPat = $('#txtApellidoPat');
    var txtDate = $('#txtDate');
    var txtCalle = $('#txtCalleID');
    var txtColonia = $('#txtColoniaId');
    var txtCP = $('#txtCPid');
    var txtMunicipio = $('#txtMunicipio');
    var txtNumInt = $('#txtNumInt');
    var txtNumExt = $('#txtNumExt')

    var btnAddRegistro = $('#addRegistro');
    var btnAddTelefono = $('#addTelefono');

    txtApellidoMat.prop('disabled', true);
    txtApellidoPat.prop('disabled', true);
    txtDate.prop('disabled', true);
    txtCalle.prop('disabled', true);
    txtColonia.prop('disabled', true);
    txtCP.prop('disabled', true);
    txtMunicipio.prop('disabled', true);
    txtNumInt.prop('disabled', true);
    txtNumExt.prop('disabled', true);

    btnAddRegistro.prop('disabled', true);
    btnAddTelefono.prop('disabled', true);

    var txtPhone = $('#txtPhone');
    var txtCelular = $('#txtCelular');
    var txtPhoneWork = $('#txtPhoneWork');

    var selectEstado = $('#selectEstado');

    var chkNumInt = $('#chkNumInt');
    var chkNumExt = $('#chkNumExt');

    chkNumInt.prop('disabled', true);
    chkNumExt.prop('disabled', true);
    selectEstado.prop('disabled', true);


    // Inicio Validacion de Campos Vacios en Seccion Datos Personales ---------------------------------
    document.addEventListener('input', () => {
        if (txtName.val().trim() != '') {
            txtApellidoPat.prop('disabled', false);
            if (txtApellidoPat.val().trim() != '') {
                txtApellidoMat.prop('disabled', false);
                if (txtApellidoMat.val().trim() != '') {
                    txtDate.prop('disabled', false);
                } else {
                    txtDate.prop('disabled', true);
                    deshabilitarCamposDireccion();
                }
            } else {
                txtApellidoMat.prop('disabled', true);
                txtDate.prop('disabled', true);
                deshabilitarCamposDireccion();
            }
        } else {
            txtApellidoPat.prop('disabled', true);
            txtApellidoMat.prop('disabled', true);
            txtDate.prop('disabled', true);
            deshabilitarCamposDireccion();
        }


        if (isDatosPersonalesCompletado()) {
            document.getElementById('subtituloDireccion').innerHTML = '';
        } else {
            document.getElementById('subtituloDireccion').innerHTML = 'Completa primero la seccion de <strong>Datos Personales<strong>';
        }
    });

    var isDatosPersonalesCompletado = () => {
        return (
            txtName.val().trim() != '' &&
            txtApellidoMat.val().trim() != '' &&
            txtApellidoPat.val().trim() != '' &&
            txtDate.val().trim()
        );
    };
    // Fin Validacion de Campos Vacios en Seccion Datos Personales ---------------------------------



    // Inicio Validacion de Campos Vacios en Seccion Direccion ---------------------------------
    document.addEventListener('input', () => {
        if (isDatosPersonalesCompletado()) {
            if (txtDate.val().trim() != '') {
                txtCalle.prop('disabled', false);

                if (txtCalle.val().trim() != '') {
                    txtColonia.prop('disabled', false);

                    if (txtColonia.val().trim() != '') {
                        txtCP.prop('disabled', false);

                        if (txtCP.val().trim() != '') {
                            selectEstado.prop('disabled', false);

                            if (selectEstado.val().trim() != '') {
                                txtMunicipio.prop('disabled', false);

                                if (txtMunicipio.val().trim() != '') {
                                    txtNumInt.prop('disabled', false);
                                    txtNumExt.prop('disabled', false);
                                    chkNumInt.prop('disabled', false);
                                    chkNumExt.prop('disabled', false);

                                    if ($('#chkNumInt:checked').val()) {
                                        txtNumInt.prop('disabled', true);
                                    } else {
                                        txtNumInt.prop('disabled', false);
                                    }

                                    if ($('#chkNumExt:checked').val()) {
                                        txtNumExt.prop('disabled', true);
                                    } else {
                                        txtNumExt.prop('disabled', false);
                                    }

                                    if (txtNumInt.val() != 0 || $('#chkNumInt:checked').val()) {
                                        if (txtNumExt.val() != 0 || $('#chkNumEnt:checked').val()) {
                                            btnAddRegistro.prop('disabled', false);
                                            btnAddTelefono.prop('disabled', false);
                                        } else {
                                            btnAddRegistro.prop('disabled', true);
                                            btnAddTelefono.prop('disabled', true);
                                        }
                                    } else {
                                        btnAddRegistro.prop('disabled', true);
                                        btnAddTelefono.prop('disabled', true);
                                    }
                                }
                            }

                        } else {
                            txtMunicipio.prop('disabled', true);
                            txtNumInt.prop('disabled', true);
                            txtNumExt.prop('disabled', true);
                            btnAddTelefono.prop('disabled', true);
                            btnAddRegistro.prop('disabled', true);
                            chkNumInt.prop('disabled', true);
                            chkNumExt.prop('disabled', true);
                            selectEstado.prop('disabled', true);
                        }

                    } else {
                        txtCP.prop('disabled', true);
                        txtMunicipio.prop('disabled', true);
                        txtNumInt.prop('disabled', true);
                        txtNumExt.prop('disabled', true);
                        btnAddTelefono.prop('disabled', true);
                        btnAddRegistro.prop('disabled', true);
                        chkNumInt.prop('disabled', true);
                        chkNumExt.prop('disabled', true);
                        selectEstado.prop('disabled', true);
                    }

                } else {
                    txtColonia.prop('disabled', true);
                    txtCP.prop('disabled', true);
                    txtMunicipio.prop('disabled', true);
                    txtNumInt.prop('disabled', true);
                    txtNumExt.prop('disabled', true);
                    btnAddTelefono.prop('disabled', true);
                    btnAddRegistro.prop('disabled', true);
                    chkNumInt.prop('disabled', true);
                    chkNumExt.prop('disabled', true);
                    selectEstado.prop('disabled', true);
                }

            } else {
                deshabilitarCamposDireccion();
            }

        } else {
            deshabilitarCamposDireccion();
        }
    });

    var deshabilitarCamposDireccion = () => {
        txtCalle.prop('disabled', true);
        txtColonia.prop('disabled', true);
        txtCP.prop('disabled', true);
        txtMunicipio.prop('disabled', true);
        txtNumInt.prop('disabled', true);
        txtNumExt.prop('disabled', true);
        btnAddRegistro.prop('disabled', true);
        btnAddTelefono.prop('disabled', true);
        btnAddRegistro.prop('disabled', true);
        chkNumInt.prop('disabled', true);
        chkNumExt.prop('disabled', true);
        selectEstado.prop('disabled', true);
    };
    // Fin Validacion de Campos Vacios en Seccion Direccion ---------------------------------
});