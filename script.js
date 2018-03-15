"use strict"




/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*
 *																		*
 *							METHODS ARRAY								*
 *  																	*		
 *::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

var arr = [5,"a","b","c",1,3,2,4,6];


//:::::::::::::::::::::::::::::  filter() | Creates a new array with all elements that pass the test implemented

 
  /*...................................................................
  
	#	var newArray = arr.filter(callback[, thisArg])
	#	NO modifica el array original

    ...................................................................*/	
	
	// function esPar(numeros){
	// 	if(numeros%2 == 0){
	// 		return true;
	// 	}
	// }
	// console.log( "son pares: " + arr.filter(esPar))  //-> son pares: 2,4,6
	
	
	// //-//


	// function buscarPares(array){
	// 	var listaDePares = array.filter(function(numeros){
	// 		if (numeros%2 == 0){
	// 			return true	
	// 		}
	// 	})
	// 	return listaDePares;
	// }

	// console.log(buscarPares(arr));	//-> [2, 4, 6]
	// console.log(arr);	

//:::::::::::::::::::::::::::::  splice() | Changes the contents of an array by removing existing elements and/or adding new elements.

  
  /*...................................................................
  
	#	array.splice(startIndex, deleteCount, item1, item2, ...)
	#	el segundo valor no es el index, es una cuenta desde el index
	#	modifica el array original

  ...................................................................*/
  

  // arr.splice(1,4,"NO","SI")
  // console.log(arr); //-> [5, "NO", "SI", 3, 2, 4, 6]

//:::::::::::::::::::::::::::::  slice()  | Returns a portion of an array into a new array selected from begin to end (end not included)

  
  /*...................................................................
  
	#	arr.slice([startIndex, endIndex)
	#	primer valor incluye el segundo está excluido
	#	NO modifica el array original

   ...................................................................*/

  
  // console.log(arr.slice(2,6));    //-> ["b", "c", 1, 3]

//:::::::::::::::::::::::::::::  concat() | Merge two or more arrays and returns a new array
  
  /*...................................................................
  
	#	var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
	#	Los arrays originales no son afectados
	

   ...................................................................*/

  // var arr1 = ["3","2","1"]	
  // var arr2 = ["ganeeeeee","siiii"] 	
  // var arr3 = ["Sulemita", "Nisman"] 	

  // console.log(arr1.concat(arr2,arr3));    //->  ["3", "2", "1", "ganeeeeee", "siiii", "Sulemita", "Nisman"]

  // //-//

  // var arr4 = arr1.concat(arr2,arr3);
  // console.log(arr4);

//:::::::::::::::::::::::::::::  push()   | Adds one or more elements to the end of an array and returns the new length of the array
  
  /*...................................................................
  
	#	arr.push(element1[, ...[, elementN]])
	
   ...................................................................*/


  // var arrPushy = [1,2,3] 

  // console.log(arrPushy); //-> [1,2,3] 
  // console.log(arrPushy.push("culo")); //-> 4 
  // console.log(arrPushy); //-> [1,2,3,"culo"] 

//:::::::::::::::::::::::::::::  map()    | Creates a new array with the results of calling a provided function on every element in the calling array.
  
  /*...................................................................
  
	#	arr.push(element1[, ...[, elementN]])

	#	The filter method doesn't do the same as the map method. The map method is used to convert each item of an array, 
		while the filter method is used to select certain items of an array. Comparing the performance between the methods is moot,
		as only one of them does what you want to do.

	#	Crea nuevo array

	
   ...................................................................*/


  // var arrPushy = [1,2,3] 

  // console.log(arrPushy); //-> [1,2,3] 
  // console.log(arrPushy.push("culo")); //-> 4 
  // console.log(arrPushy); //-> [1,2,3,"culo"] 

  

