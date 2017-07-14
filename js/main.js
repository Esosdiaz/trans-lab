/* wabalaba dub dub */
var correo;
$(document).ready(function(){

//Inicio de sesión, validaciones
	$('#mensajeCorreo').hide();
	$('#mensajePass').hide();

	$('.botonInicio').click(function(){
		validateForm();
	});
	//funcion que se dispara al presionar el boton iniciar sesion
	function validateForm(){
	//expresiones regulares para establecer la comparacion con el formulario
		var correoReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var numReg = /^[0-9]/;

	//Rescatando los valores de los inputs
        correo = $('#correoE').val();

        var contrasena = $('#contrasena').val();

      	if(correo == "" || !correoReg.test(correo)){ //validaciones en if
        	$('#mensajeCorreo').fadeIn();
        	}else{
        	if(contrasena == "" || contrasena.length > 8 || !numReg.test(contrasena) ){
        		$('#mensajePass').fadeIn();
        		}else{
				window.location.href = "opciones.html";
				}	
        	}      				
	}
	//rescatar correo y ponerlo en el perfil
	 


	//imprimir las tarjetas
	  $("#boton-agregar").click(function(){
		var tarjetaNueva = $("#numero-tarjeta").val();//rescata el valor ingresao en el input
		$("#imprimirTarjetas").append('<li class="tarjetas">'+ tarjetaNueva +'</li>'); //crea dinámicamente la nueva tarea
		$("#numero-tarjeta").val(""); // mantiene el input vacio luego de enviar el contenido
	}); //evento al click del boton



$("#open-hide").click(function(){//esconde y muestra el menu lateral
		$(this).toggleClass("show");
	});

	$("#acordeon div").hide();
	$("#acordeon h2").on('click', function(){
		$("#respuestas").slideDown();

	})
	


	//var estado=false;
	//$("#btn-toggle").on('click',function(){
	//			$('.seccion-toggle').slideToggle();
	//		});

});