/* wabalaba dub dub */
$(document).ready(function(){
	$("#open-hide").click(function(){//esconde y muestra el menu lateral
		$(this).toggleClass("show");
	});

	var estado=false;
	$("#btn-toggle").on('click',function(){
				$('.seccion-toggle').slideToggle();
			});
	
});