$(document).ready(function(){
	$("#formulario").submit(function(event){
		event.preventDefault();
		window.location.href = "vistacliente.html"
	});
});