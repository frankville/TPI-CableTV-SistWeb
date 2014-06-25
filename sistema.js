

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
	$("#mlistrec").click(function(event){
		event.preventDefault();
		$("#contenido").fadeOut("fast", function(){
			$("#lrpan").fadeIn("fast");
		})
	});
	$("#arform").submit(function(event){
		event.preventDefault();
		$("#arpan").fadeOut("fast", function(){
			$("#regrecpan").fadeIn("fast");
		})
	});
	$("#mservbasico").click(function(event){
		event.preventDefault();
		$("#contenido").fadeOut("fast", function(){
			$("#sbpan").fadeIn("fast");
		})
	});
	$("#atmap").click(function(event){
		event.preventDefault();
		$("#contenido").fadeOut("fast", function(){
			$("#atmappan").fadeIn("fast");

		});
	});
	
	$("#athojaruta").click(function(event){
		event.preventDefault();
		$("#contenido").fadeOut("fast", function(){
			$("#athrpan").fadeIn("fast");

		});
	});
	$("#atreghr").click(function(event){
		event.preventDefault();
		$("#contenido").fadeOut("fast", function(){
			$("#atreghrpan").fadeIn("fast");

		});
	});


	$("#sbform").submit(function(event){
		event.preventDefault();
		$("#arpan").fadeOut("fast", function(){
			$("#regrecpan").fadeIn("fast");
		})
	});
	
});

