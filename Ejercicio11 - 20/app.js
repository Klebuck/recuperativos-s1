var listaDeNotas = [6.0, 5.0, 5.5, 4.8, 6.2, 5.8, 4.3, 3.5, 7.0, 6.2]; // creo una variable que contendra una lista con las 10 notas del alumno 
function promediarNotas(listaDeNotas){ //creo una funcion que promedia las notas que estan dentro de mi variable "listDeNotas"
	var calcular = listaDeNotas.reduce(function(valor1, valor2){ // utilizo reduce.() para sumar todas las notas dentro de mi array de izquierda a derecha
		return valor1 + valor2;
	});

	var promedioFinal = suma/10; // se divide por diez (son diez notas)
	if(promedioFinal >= 4.0){ // si mi promedio final es MAYOR O IGUAL a 4.0
		alert (promedioFinal + ", es tu promedio, HAZ APROBADO") // me arroga una alerta con el resultado de mi promedio + un "haz aprobado"
	}else{ // en cambio 
		alert (promedioFinal + ", es tu promedio, REPRUEBAS EL RAMO") // si mi promedio es menor a 4.0 me arroja mi resultado más un "reprubas el ramo"
	}

	}
console.log(promediarNotas(listaDeNotas));

