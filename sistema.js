

$(document).ready(function(){
	$("#formulario").submit(function(event){
		event.preventDefault();
		window.location.href = "http://localhost/TPI-CableTV-SistWeb/sistema.html";
	});
	$("#mreclamos").click(function(event){
		event.preventDefault();
		hideAllPanels();
		$("#arpan").fadeIn("fast");
	});
	$("#mlistrec").click(function(event){
		event.preventDefault();
		hideAllPanels();
		$("#lrpan").fadeIn("fast");
	});
	$("#mlistarecs").click(function(event){
		event.preventDefault();
		hideAllPanels();
		$("#panListaRecs").fadeIn("fast");
	});
	$("#arform").submit(function(event){
		event.preventDefault();
	});
	$("#arregrec").click(function(event){
		event.preventDefault();
		$("#arpan").fadeOut("fast", function(){
			$("#regrecpan").fadeIn("fast");
		});
	});
	//busqueda por nro cliente en Antencion Reclamo
	$("#arncli").keyup(function(event){
		event.preventDefault();
		if(event.which == 13){
			
			atencionRecPorNroCliente();
		}
	});

	$("#arnclisearch").click(function(event){
		event.preventDefault();			
			atencionRecPorNroCliente();

	});

	//busqueda por dni cliente en At Recl
	$("#ardnitit").keyup(function(event){
		event.preventDefault();
		if(event.which == 13){
			
			atencionRecPorDNICliente();
		}
	});

	$("#ardnititsearch").click(function(event){
		event.preventDefault();			
			atencionRecPorDNICliente();

	});
	//busq de estado de conexion
	$("#arestcnxsearch").click(function(event){
		event.preventDefault();

		var valor = $("#arncli").val();
		if(valor === "1"){

			$("#fgestcnx").addClass("has-success");
			$("#arestcnx").val("Estado de conexión correcta");

		}else{
			if(valor === "2") {

				$("#fgestcnx").addClass("has-warning");
				$("#arestcnx").val("Estado de conexión con problemas");
			}else{

				$("#fgestcnx").addClass("has-error");
				$("#arestcnx").val("Estado de conexión con corte");
			}
		}
	});	

	eventosRegReclamo();




	$("#mservbasico").click(function(event){
		event.preventDefault();
		hideAllPanels();
		$("#sbpan").fadeIn("fast");

	});
	$("#atmap").click(function(event){
		event.preventDefault();
		hideAllPanels();
		$("#atmappan").fadeIn("fast");

	});
	
	$("#athojaruta").click(function(event){
		event.preventDefault();
		hideAllPanels();
		$("#athrpan").fadeIn("fast");
	});
	$("#atreghr").click(function(event){
		event.preventDefault();
		hideAllPanels();
		$("#atreghrpan").fadeIn("fast");
	});


	$("#sbform").submit(function(event){
		event.preventDefault();
		hideAllPanels();
		$("#regrecpan").fadeIn("fast");
	});
	
});

function atencionRecPorNroCliente() {
				var valor = $("#arncli").val();
			if(valor === "1"){
				$("#ardnitit").val("1");
				$("#arapynom").val("Juan Perez");
				$("#ardir").val("Liniers 630");
				$("#fgestcta").addClass("has-success");
				$("#arestcta").val("Estado de cuenta al día");

			}else{
				if(valor === "2") {
					$("#ardnitit").val("2");
					$("#arapynom").val("Raul Benitez");
					$("#ardir").val("Irigoyen 302");
					$("#fgestcta").addClass("has-success");
					$("#arestcta").val("Estado de cuenta al día");
				}else{
					$("#ardnitit").val("3");
					$("#arapynom").val("Carlos Juarez");
					$("#ardir").val("Lopez y Planes 45");
					$("#fgestcta").addClass("has-error");
					$("#arestcta").val("Se encuentra en mora");
				}
			}
}

function atencionRecPorDNICliente() {
				var valor = $("#ardnitit").val();
			if(valor === "1"){
				$("#arncli").val("1");
				$("#arapynom").val("Juan Perez");
				$("#ardir").val("Liniers 630");
				$("#fgestcta").addClass("has-success");
				$("#arestcta").val("Estado de cuenta al día");

			}else{
				if(valor === "2") {
					$("#arncli").val("2");
					$("#arapynom").val("Raul Benitez");
					$("#ardir").val("Irigoyen 302");
					$("#fgestcta").addClass("has-success");
					$("#arestcta").val("Estado de cuenta al día");
				}else{
					$("#arncli").val("3");
					$("#arapynom").val("Carlos Juarez");
					$("#ardir").val("Lopez y Planes 45");
					$("#fgestcta").addClass("has-error");
					$("#arestcta").val("Se encuentra en mora");
				}
			}
}

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
					$("#rrdir").val("Lopez y Planes 45");
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
					$("#rrdir").val("Lopez y Planes 45");
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

function actionModal1(){

	$("#msgmodal1").fadeIn("fast", function(){
		$("#modloadbar1").fadeIn("fast",function(){
			setTimeout(function(){
				$("#msgmodal1").fadeOut("fast", function(){
					$("#modloadbar1").fadeOut("fast", function(){
						$("#modresult1").fadeIn("fast");
					});
				});
			},2000);
		});
	});
}

function actionModal2(){

	$("#msgmodal2").fadeIn("fast", function(){
		$("#modloadbar2").fadeIn("fast",function(){
			setTimeout(function(){
				$("#msgmodal2").fadeOut("fast", function(){
					$("#modloadbar2").fadeOut("fast", function(){
						$("#modresult2").fadeIn("fast");
					});
				});
			},2000);
		});
	});
}

function actionModal3(){

	$("#msgmodal3").fadeIn("fast", function(){
		$("#modloadbar3").fadeIn("fast",function(){
			setTimeout(function(){
				$("#msgmodal3").fadeOut("fast", function(){
					$("#modloadbar3").fadeOut("fast", function(){
						$("#modresult3").fadeIn("fast");
					});
				});
			},2000);
		});
	});
}

function mostrarMsgExito(){
	$("#panConfirm").text("El reclamo se verificó con éxito!");
	$("#panConfirm").removeClass("alert-info");
	$("#panConfirm").addClass("alert-success");
	setTimeout(function(){
		$("#panConfirm").removeClass("alert-success");
		$("#panConfirm").addClass("alert-info");
		$("#panConfirm").text("verifique los reclamos listados");
	},5000);
}


function confirmModal1(){
	$("#fila1").removeClass("warning");
	$("#fila1").addClass("danger");//porque se verifico que su conexion no presentaba fallas por lo tanto se rechaza el reclamo
	mostrarMsgExito();
}


function confirmModal2(){
	$("#fila2").removeClass("warning");
	$("#fila2").addClass("success");//porque se verifico que su conexion no presentaba fallas por lo tanto se rechaza el reclamo
	mostrarMsgExito();
}


function confirmModal3(){
	$("#fila3").removeClass("warning");
	$("#fila3").addClass("success");//porque se verifico que su conexion no presentaba fallas por lo tanto se rechaza el reclamo
	mostrarMsgExito();
}