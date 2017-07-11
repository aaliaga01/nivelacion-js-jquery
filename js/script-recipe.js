$(document).ready( function(){
	console.log("Se ha cargado el html");

	$(".js-back").show();
	$(".js-menu").hide();

	//llamado funcion agregaclase
	agregaClase();

	//llamado funcion eliminaclase
	eliminaClase();

});

function agregaClase(){
	$(".js-show-make").click(function(){;
		console.log("Supongo que aqui se deberían publicar las recetas ")
		$(".btns-group").addClass(".make");
		
	});
}

function eliminaClase(){
	$(".js-show-recipe").click(function(){
		$(".btns-group").removeClass(".make");
	});
}