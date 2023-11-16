/*2. Crea una funzione chiamata logElements che prende un array
e stampa in console ogni elemento utilizzando il metodo .forEach().*/

const list = ["fragole", "lamponi", "more", "ciliegie"];

const logElements = (elem, i, array) => {
    array[i] = elem;
}
list.forEach(logElements);
console.log(list);

