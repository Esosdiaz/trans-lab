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
				window.location.href = "opciones.html"; //redirecciona una vez que se cumplamn las validaciones. 
				}	
        	}      				
	}
	//esconde y muestra el menu lateral
	$("#open-hide").click(function(){
		$(this).toggleClass("show");
	});

	//imprimir las tarjetas
	  $("#boton-agregar").click(function(){
		var tarjetaNueva = $("#numero-tarjeta").val();//rescata el valor ingresao en el input
		$("#imprimirTarjetas").append('<li class="tarjetas">'+ tarjetaNueva +'</li>'); //crea dinámicamente la nueva tarea
		$("#numero-tarjeta").val(""); // mantiene el input vacio luego de enviar el contenido
	}); //evento al click del boton

	  //API saldo
	  $("#boton-saldo").click(function(){
	  var inputBip = $("#input-bip").val();
	  console.log(inputBip);
	  $.ajax({
		url: 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+inputBip,
		type: 'GET',
		datatype: 'JSON',
	})
		.done(function(response) {
            console.log(response);
            $("#resultado-saldo").append("<div class='resultado-saldo text-center' id='resultado-saldo'><div class= 'row'><div class= 'col-xs-12 col-sm-12 text-center caja-titulo'><p class='saldo-total'>SALDO TOTAL</p></div><div class= 'col-xs-12 col-sm-12 text-center caja-saldo'><h1 class='saldo-valor'>" + response.saldoTarjeta + "</h1></div></div></div>");
            $("#resultado-saldo").val("")
        })
        .fail(function() {
            console.log('Error')
        })
        .always(function() {
            console.log('Completado')
        });

        //API tarifa
        $("#boton-tarifa").click(function(){
	  		var inputBip = $("#input-bip").val();
        	console.log(inputTarifa);
        	var inputHorario =$("#input-horario").val();
        	console.log(inputHorario);
        })

})
	  
	  
	  





});