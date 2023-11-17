/*
5. Scrivi una funzione mapWithIndex che prende un array e 
restituisce un nuovo array in cui ogni elemento è una stringa 
che contiene l'elemento originale e il suo indice, formattato come 
"Elemento [indice]: [elemento]".
*/

const mapWithIndex = (array)=>{
    const newArray = array.map((element, i) => `Element[${i}]: ${element}`)
    return newArray;
}

console.log(mapWithIndex([4, 44, 444]));
