$(document).ready( function(){

$(".js-back").hide();// ocultando la flecha

function printNews(){
	var parrafo = document.createTextNode("NUEVAS RECETAS");
	document.getElementById("nuevo").appendChild(parrafo);
}
printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	//pasando la funcion cuando el DOM este listo, detalle : el nombre de la varia ble en activities.js 
	//tiene que ser el mismo que estoy llamando aca entre parentesis, sino aparece eternamente function not defined ¬¬ que malvada eres blanca.
	renderActivities(activitiesArray);

	//

});// ./ function ready



/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

	recipesArray.forEach(function (receta){

		if (receta.highlighted === true){

			renderRecipe(receta);
		}

	});

}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
 
	var conten = $("<a>", {
			'href' : '#',
			'class' : 'item-recipe'
		});

	var imagen = $("<img>",{
		'src' : 'img/recipes/640x800/' + recipe.name + '.jpg'
	});

	var spanAtt = $("<span>", {
		'class' : 'attribution'
	});

	var spanTitle = $("<span>", {
		'class' : 'title-recipe',
		'text' : recipe.title
	});

	var spanMeta = $("<span>",{
		'class' : 'metadata-recipe'
			});

	var spanRecipe = $("<span>",{
		'class': 'author-recipe',
		'text' : recipe.source.name
	});

	var spanBookmark = $("<span>",{
		'class' : 'icon-bookmark'
	});

	var spanIcon = $("<span>",{
		'class' : 'icon'
	});

	$(".list-recipes").append(conten);
	$(conten).append(spanAtt);
	$(spanAtt).append(spanTitle);
	$(spanAtt).append(spanMeta);
	$(spanMeta).append(spanRecipe);
	$(spanBookmark).append(spanIcon);
	$(conten).append(imagen);
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) { 
	console.log('Activities: ', activitiesArray);

	activitiesArray.forEach( function (actividad){
		renderActivity(actividad);
		
		if (activitiesArray.length > 0){
			$(".wrapper-message").hide();
		}
	});

}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(activitiesArray) { // La mayoria crea asi los elementos en el DOM, es mas corto que como lo hice yo parece
	$(".list-activities").append('<a href="#" class="item-activity"><span class="attribution"><span class="avatar"><img src='
		+ activitiesArray.userAvatar +' class="image-avatar"></span><span class="meta"><span class="author">'
		+ activitiesArray.userName+'</span> made <span class="recipe">'+ activitiesArray.recipeName +'</span>:'
		+ activitiesArray.text +'<span class="location">&mdash;'+ activitiesArray.place 
		+'</span></span></span><div class="bg-image" style="background-image: url(' 
			+ activitiesArray.image + ');"></div></a>');
} //Esto correspondia a la seccion 6, lo coloque junto con la seccion 5 TOT


