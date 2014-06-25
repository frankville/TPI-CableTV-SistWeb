$(document).ready(function(){
	$("#loaderContainer").fadeOut("slow");
	$("#marco").fadeIn("fast");
	$("#formulario").submit(function(event){
		event.preventDefault();
		$("#marco").fadeOut("fast", function(){
			$("#menu").fadeIn("fast");
		});
	});
	$("#mreclamos").click(function(event){
		event.preventDefault();
		$("#contenido").fadeOut("fast", function(){
			$("#arpan").fadeIn("fast");
		})
	});
	$("#arform").submit(function(event){
		event.preventDefault();
		$("#arpan").fadeOut("fast", function(){
			$("#regrecpan").fadeIn("fast");
		})
	});
});