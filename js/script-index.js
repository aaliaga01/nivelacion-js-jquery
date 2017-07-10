$(document).ready( function(){

$(".js-back").hide();// ocultando la flecha

function printNews(){

	var parrafo = document.createTextNode("NUEVAS RECETAS");
	document.getElementById("nuevo").appendChild(parrafo);


}
printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


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
		'href' : '/img/recipes/640x800' + recipe
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
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


