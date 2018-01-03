//Dado un arreglo de números rotar sus elementos hacia la derecha n veces.
//Ejemplo:   arr = [1, 2, 3, 4, 5, 6, 7]
         //n = 3
        // retorna [5, 6, 7, 1, 2, 3, 4]

        function rotar(numero){ //creo una funcion para rotar los numeros dentro de mi variable lista de numeros
          var listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8 ,9] // arreglo de numeros que será analizado
          var nuevaLista = []; //nuevo arreglo que se creará
          var longitud = listaNumeros.length; // esta variable cuenta la longitud de mi primer arreglo
          for (var i = longitud -1; i > numero; i--){ // recorre el arreglo de atrás hacia delante hasta el numero que yo le idico (en este caso el 3)
            nuevaLista.unshift(listaNumeros[i]); //toma los valores recorridos de atrás hacia adelante y los pone al principio de mi nuevo arreglo
          }
          for (var b= 0; b <= numero; b++){ // recorre en orden el arreglo original hasta el numero que yo le indico 
            if (listaNumeros[b ] !=undefined){ 
              nuevaLista.push(listaNumeros[b]); // empuja los valores recorridos a mi nuevo arreglo
            }
          }
          return nuevaLista; //retorno mi nuevo arreglo
        }

        rotar(3); //hago una prueba
