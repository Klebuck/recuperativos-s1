//agrego un arreglo con numeros positivos aleatoreos 
var numeros = [2,10,18,21];
//utilizo map(); que crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
var dobles = numeros.map(function(numero){
	return numero * 12; //luego le digo que me retorne cada uno de mis numeros multiplicados por 12
})

console.log(dobles);

