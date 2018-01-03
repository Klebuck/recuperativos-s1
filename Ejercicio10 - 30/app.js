var arr1 = [8,6,5,4,1,9]; // Arreglo numeros positivos desordenados definidos valor false
var arr2 = [2,4,6,8,10,12]; // Arreglo numeros positivos ordenados definidos valor true

function validarOrden(arr) { // valida si el arreglo esta ordenado de menor a mayor
  var ordenar = true; 
  arr.forEach(function(element,index) { // se aplica  forEach() para ordenar el arreglo.
    if(arr[index] > arr[index+1]){ // si el arrglo es mayor al indice se le suma 1
      ordenar = false;
    }
  });
  return ordenar;
}

console.log("numeros Desordenados:" + validarOrden(arr1)); //imprime resultado
console.log("numeros Ordenados:" + validarOrden(arr2)); //imprime resultado
