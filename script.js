/*
tipos de datos:
string - cadena de texto "24"
number - numeros enteros
boolean - false amd true
undefined - informacion sin definir
null - informacion nula
NaN -not a number( no es dato)
const=dato en memoria no modificable (se establece una sola vez, no se modifica) 
var=lo mismo que const pero modificable a lo largo de su vida
let=dato, su uso apunta mas a un uso en un solo bloque (to do:Aprender el alcance de variables) 
*/

/*
todo estudiar:

codigos hexs
alcance de variables
*/

function cambiarColor(id1){

const nana=document.getElementById(id1)

nana.style.color="#f00"

}


// cambiarColor=("texto")



// window.onunload= cambiarColor
window.onload= cambiarColor("texto")




