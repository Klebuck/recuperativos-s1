
var lista = [20, 18, 16, 14, 12, 10, 8, 6, 4, 2]; //creo una variable con una lista de numeros (lista)
function buscarNumero(lista){ //creo una funcion que busque un numero en mi variable lista
	var numero= 14 // asigno en otra variable el numero que quiero buscar
	var index= lista.indexOf(numero); //utilizo indexOf(): porque me devuelve la primera coincidencia que encuentra en mi variable lista del numero que estoy buscando
	return index; // me retorna el puesto en que se encuentra el numero que busco dentro de mi lista, contando desde 0 el primer numero
}

console.log(buscarNumero(lista))//lo llamo en mi consola

