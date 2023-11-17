/*
6. Crea una funzione removeShortWords che prende un array di stringhe 
e una lunghezza minima. 
Dovrebbe restituire un nuovo array contenente solo le 
stringhe che sono più lunghe della lunghezza minima. Usa .filter() 
e assicurati che la funzione non tenga conto delle maiuscole e minuscole.
*/

const removeShortWords = (array, minLength) => {
    const filteredArray = array.filter(elem => elem.length > minLength);
    return filteredArray;
}

const testArray = ["ciao", "benvenuto", "vattene", "supercalifragile", "mannaggia"];
const filteredArray = removeShortWords(testArray, 5);