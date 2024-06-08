 let btnRegresar =document.getElementById("btnRegresar");

 btnRegresar.addEventListener("click", function() {
        window.location.href = "/auth/login";
    });


$(document).on("click", "#btnguardar", function(){
    $.ajax({
        type: "POST",
        url: "/seguridad/usuario",
        contentType: "application/json",
        data: JSON.stringify({
            idusuario: $("#hddidusuario").val(),
            nomusuario: $("#txtusuario").val(),
            nombres: $("#txtnombre").val(),
            apellidos: $("#txtapellido").val(),
            email: $("#txtemail").val(),
            password: $("#txtpassword").val(),
            activo: $("#cbactivo").prop("checked")
        }),
        success: function(resultado){
            if(resultado.respuesta){
                listarUsuarios()
            }
            alert(resultado.mensaje);
        }
    });
   //  $("#modalusuario").modal("hide");
});
/*
function listarUsuarios(){
    $.ajax({
        type: "GET",
        url: "/seguridad/usuario/lista",
        dataType: "json",
        success: function(resultado){
            $("#tblusuario > tbody").html("");
            $.each(resultado, function(index, value){
                $("#tblusuario > tbody").append(`<tr>`+
                `<td>${value.nombres}</td>`+
                `<td>${value.apellidos}</td>`+
                `<td>${value.nomusuario}</td>`+
                `<td>${value.email}</td>`+
                `<td>${value.activo}</td>`+
                `<td><button type='button' class='btn btn-primary btnactualizar' `+
                    `data-usuid="${value.idusuario}">Actualizar`+
                `</button></td>`+
                `</tr>`);
            });
        }
    });
}

*/