/*2. Crea una funzione chiamata logElements che prende un array
e stampa in console ogni elemento utilizzando il metodo .forEach().*/

const list = ["fragole", "lamponi", "more", "ciliegie"];

const logElements = (array) => {
    array.forEach((elem) => {
        console.log(elem);
    })
};

logElements(list);

