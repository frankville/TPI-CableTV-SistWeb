$(document).ready(function(){
	$("#menu").fadeIn("fast");

	$("#mreclamos").click(function(event){
		event.preventDefault();
				hideAllPanels();

		$("#regrecpan").fadeIn("fast");

	});

	$("#mservbasico").click(function(event){
		event.preventDefault();
				hideAllPanels();

		$("#sbpan").fadeIn("fast");

	});
	$("#mservadic").click(function(event){
		event.preventDefault();
				hideAllPanels();

		$("#sapan").fadeIn("fast");

	});
	$("#sbform").submit(function(event){
		event.preventDefault();
		hideAllPanels();
		$("#regrecpan").fadeIn("fast");

	});

	$("#regrecform").submit(function(event){
		event.preventDefault();
		cleanFormReclamo();
		mostrarMsgExito();
	});

	eventosRegReclamo();
});

function hideAllPanels(){
	$("#contenido").fadeOut("fast");
	$("#arpan").fadeOut("fast");
	$("#regrecpan").fadeOut("fast");
	$("#sbpan").fadeOut("fast");
	$("#lrpan").fadeOut("fast");
	$("#panListaRecs").fadeOut("fast");
	$("#atmappan").fadeOut("fast");
	$("#athrpan").fadeOut("fast");
	$("#atreghrpan").fadeOut("fast");
	$("#atreghrpan").fadeOut("fast");

};

function eventosRegReclamo(){
		//busqueda por nro cliente en Antencion Reclamo
	$("#rrncli").keyup(function(event){
		event.preventDefault();
		if(event.which == 13){
			
			regRecPorNroCliente();
		}
	});

	$("#rrnclisearch").click(function(event){
		event.preventDefault();			
			regRecPorNroCliente();

	});

	//busqueda por dni cliente en At Recl
	$("#rrdnitit").keyup(function(event){
		event.preventDefault();
		if(event.which == 13){
			
			regRecPorDNICliente();
		}
	});

	$("#rrdnititsearch").click(function(event){
		event.preventDefault();			
			regRecPorDNICliente();

	});
	//busq de estado de conexion
	$("#rrestcnxsearch").click(function(event){
		event.preventDefault();

		var valor = $("#rrncli").val();
		if(valor === "1"){

			$("#rrfgcnx").addClass("has-success");
			$("#rrestcnx").val("Estado de conexión correcta");

		}else{
			if(valor === "2") {

				$("#rrfgcnx").addClass("has-warning");
				$("#rrestcnx").val("Estado de conexión con problemas");
			}else{

				$("#rrfgcnx").addClass("has-error");
				$("#rrestcnx").val("Estado de conexión con corte");
			}
		}
	});	
}


function mostrarMsgExito(){
	$("#rrpanConfirm").text("El reclamo se envió con éxito! El área técnica lo evaluará y le enviará un email cuando esté en proceso.");
	$("#rrpanConfirm").removeClass("alert-info");
	$("#rrpanConfirm").addClass("alert-success");
	setTimeout(function(){
		$("#rrpanConfirm").removeClass("alert-success");
		$("#rrpanConfirm").addClass("alert-info");
		$("#rrpanConfirm").text("Rellene el siguiente formulario para enviar su reclamo");
	},5000);
}



function regRecPorNroCliente() {
				var valor = $("#rrncli").val();
			if(valor === "1"){
				$("#rrdnitit").val("1");
				$("#rrapynom").val("Juan Perez");
				$("#rrcalle").val("Liniers");
				$("#rraltura").val("630");
				$("#rrbarrio").val("Barrio 1");
				$("#rrmz").val("A");
				$("#rrpc").val("1");
				$("#rrcs").val("1");
				$("#rrpiso").val("1");
				$("#rrdpto").val("A");
				$("#rrloc").val("Resistencia");
				$("#rrzona").val("1");
				$("#rrtelf").val("03624478451");
				$("#rrtelc").val("3624854123");
			}else{
				if(valor === "2") {
					$("#rrdnitit").val("2");
					$("#rrapynom").val("Raul Benitez");
					$("#rrcalle").val("Irigoyen");
					$("#rraltura").val("302");
					$("#rrbarrio").val("Barrio 2");
					$("#rrmz").val("B");
					$("#rrpc").val("2");
					$("#rrcs").val("2");
					$("#rrpiso").val("2");
					$("#rrdpto").val("B");
					$("#rrloc").val("Fontana");
					$("#rrzona").val("2");
					$("#rrtelf").val("03624452489");
					$("#rrtelc").val("3624879654");
				}else{
					$("#rrdnitit").val("3");
					$("#rrapynom").val("Carlos Juarez");
					$("#rrcalle").val("Lopez y Planes");
					$("#rraltura").val("45");
					$("#rrbarrio").val("Barrio 3");
					$("#rrmz").val("C");
					$("#rrpc").val("3");
					$("#rrcs").val("3");
					$("#rrpiso").val("3");
					$("#rrdpto").val("C");
					$("#rrloc").val("Margarita Belén");
					$("#rrzona").val("3");
					$("#rrtelf").val("03624445612");
					$("#rrtelc").val("3624625158");
				}
			}
}

function regRecPorDNICliente() {
				var valor = $("#rrdnitit").val();
			if(valor === "1"){
				$("#rrncli").val("1");
				$("#rrapynom").val("Juan Perez");
				$("#rrcalle").val("Liniers");
				$("#rraltura").val("630");
				$("#rrbarrio").val("Barrio 1");
				$("#rrmz").val("A");
				$("#rrpc").val("1");
				$("#rrcs").val("1");
				$("#rrpiso").val("1");
				$("#rrdpto").val("A");
				$("#rrloc").val("Resistencia");
				$("#rrzona").val("1");
				$("#rrtelf").val("03624478451");
				$("#rrtelc").val("3624854123");

			}else{
				if(valor === "2") {
					$("#rrncli").val("2");
					$("#rrapynom").val("Raul Benitez");
					$("#rrcalle").val("Irigoyen");
					$("#rraltura").val("302");
					$("#rrbarrio").val("Barrio 2");
					$("#rrmz").val("B");
					$("#rrpc").val("2");
					$("#rrcs").val("2");
					$("#rrpiso").val("2");
					$("#rrdpto").val("B");
					$("#rrloc").val("Fontana");
					$("#rrzona").val("2");
					$("#rrtelf").val("03624452489");
					$("#rrtelc").val("3624879654");
				}else{
					$("#rrncli").val("3");
					$("#rrapynom").val("Carlos Juarez");
					$("#rrcalle").val("Lopez y Planes");
					$("#rraltura").val("45");
					$("#rrbarrio").val("Barrio 3");
					$("#rrmz").val("C");
					$("#rrpc").val("3");
					$("#rrcs").val("3");
					$("#rrpiso").val("3");
					$("#rrdpto").val("C");
					$("#rrloc").val("Margarita Belén");
					$("#rrzona").val("3");
					$("#rrtelf").val("03624445612");
					$("#rrtelc").val("3624625158");
				}
			}
}

function cleanFormReclamo(){
	$("#rrncli").val("")
	$("#rrdnitit").val("");
				$("#rrapynom").val("");
				$("#rrcalle").val("");
				$("#rraltura").val("");
				$("#rrbarrio").val("");
				$("#rrmz").val("");
				$("#rrpc").val("");
				$("#rrcs").val("");
				$("#rrpiso").val("");
				$("#rrdpto").val("");
				$("#rrloc").val("");
				$("#rrzona").val("");
				$("#rrtelf").val("");
				$("#rrtelc").val("");
				$("#rrdescprob").val("");
				$("#rremail").val("");
}