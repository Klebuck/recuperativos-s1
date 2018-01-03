//arreglo que contiene numeros aleatorios
var arr = [3,4,6,2,10,22,34,40,51,62,78,83,97];

//utilizo el metodo filter(); para hacer un filtrado de mi lista de numeros
var arr_par = arr.filter(function(numero){ //hago un nuevo arreglo que filtre los numeros pares de mi lista aleatoria
	return numero % 2==0; //luego le digo que me retorne solo los numeros que sean pares (multiplicables por 2)
})

console.log(arr_par);