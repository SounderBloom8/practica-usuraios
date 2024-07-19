var imagenFuncion = (e) => {
    var imagen = document.getElementById('fileImgUsr').files;
    if (imagen.length > 0) {
        var fileReader = new FileReader();
        fileReader.onload = e => {
            document.getElementById('imgMostrar').setAttribute('src', e.target.result);
        };
        fileReader.readAsDataURL(imagen[0]);
    }
};

var eliminarRegistroTabla = (id) => {
    $(id).remove();
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    });
    Toast.fire({
        icon: "success",
        title: "Registro Eliminado Correctamente",
        iconColor: '#971919',
        showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
        },
        hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
        }
    });
};

var EliminarTabla = () => {
    document.getElementById('tablaRegistros').innerHTML = '';
    Swal.fire({
        title: "Tabla Borrada",
        text: "¡Todos los registros fueron borrados con Éxito!",
        icon: "success",
        timer: 1000,
        showConfirmButton: false
    });
};


