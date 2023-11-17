/*4. Scrivi una funzione processNumbers che prende un array, 
convalida che contenga solo numeri e restituisce 
un nuovo array con ogni numero elevato al quadrato. 
Se un elemento dell'array non è un numero, genera un errore 
indicando a quale indice si trova il valore non numerico.*/ 



const processNumbers = (array) => {
   array.forEach ((elem, i) => {

    const versioneNum = Number(elem)
    
    if (typeof versioneNum !== 'number' || isNaN(versioneNum)) {
        throw new Error ('The element of index ${i} is not a number')
    }
   })

   const squareNumbers = array.map (n=> n*n);
   return squareNumbers;
}

const numbers = [1, 4, 77, 444, 666, 64]; 
const test = processNumbers(numbers);

console.log(test);