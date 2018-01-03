//Dado un arreglo de números positivos, encontrar el elemento más pequeño y retornar su índice.

//Ejemplo:	arr = [1, 2, 3]
//			retorna 0

//			arr = [3, 2, 1]
//			retorna 2



function menor(minimo){// FUNCION QUE RETORNARA LA POSICION DEL NUMERO MENOR
	var min = Math.min.apply(null, minimo);// SE ENCONTRARA EL NUMERO MENOR CON MATH.MIN.APPLY QUE RECORRERA LOS ELEMENTOS DEL ARREGLO UNO POR UNO PARA ENCONTRARLO
	return minimo.indexOf(min)// CON RETURN SE DEVOLVERA EL NUMERO, MINIMO.INDEXOF(MIN) RETORNARA EL INDICE DEL NUMERO MINIMO DEL ARREGLO
}


menor([7, 12, 15, 10, 21, 14]); // MENOR([7,12,15,10,21,14]; LLAMA A LA FUNCION EN LA CONSOLA