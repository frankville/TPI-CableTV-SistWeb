$(document).ready(function(){
	$("#csservicio1").click(function(event){

		event.preventDefault();
		$("#csservicio1").addClass("btn-success");
		$("#csservicio2").removeClass("btn-success");
		$("#csservicio3").removeClass("btn-success");
		$("#csservicioinfo").text("El servicio éstandar consiste en 80 canales que incluyen canales locales");
		$("#csservicioinfo").removeClass("alert-info");
		$("#csservicioinfo").addClass("alert-success");

	});
		$("#csservicio2").click(function(event){
		
		event.preventDefault();
		$("#csservicio2").addClass("btn-success");
		$("#csservicio1").removeClass("btn-success");
		$("#csservicio3").removeClass("btn-success");
		$("#csservicioinfo").text("El servicio Plus consiste en 80 canales que incluyen canales locales más 4 canales de películas y 2 canales HD");
		$("#csservicioinfo").removeClass("alert-info");
		$("#csservicioinfo").addClass("alert-success");
	});
		$("#csservicio3").click(function(event){
		
		event.preventDefault();
		$("#csservicio3").addClass("btn-success");
		$("#csservicio1").removeClass("btn-success");
		$("#csservicio2").removeClass("btn-success");
		$("#csservicioinfo").text("El servicio Premium consiste en 80 canales que incluyen canales locales más 6 canales de películas y 4 canales HD");
		$("#csservicioinfo").removeClass("alert-info");
		$("#csservicioinfo").addClass("alert-success");
	});

});