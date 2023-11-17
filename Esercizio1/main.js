/*1. Crea una funzione safeParseJSON che prende una stringa e tenta di analizzarla come JSON.
Se l'analisi fallisce, la funzione dovrebbe restituire null invece di generare un errore.
Inoltre, la funzione dovrebbe stampare in console se l'analisi è stata un successo o meno.*/ 


const safeParseJSON = (stringa) => {
  try{
        const obj = JSON.parse(stringa);
        console.log('Analisi riuscita');
        return obj;
    }catch(error){
        console.error('Analisi non riuscita')
        return null; 
   }
}

const jsonString = `["fragole", "more", "lamponi", "mirtilli"]`;
const result = safeParseJSON(jsonString);
console.log (result);

