/*1. Crea una funzione safeParseJSON che prende una stringa e tenta di analizzarla come JSON.
Se l'analisi fallisce, la funzione dovrebbe restituire null invece di generare un errore.
Inoltre, la funzione dovrebbe stampare in console se l'analisi è stata un successo o meno.*/ 

const jsonString = `["fragole", "more", "lamponi", "mirtilli"]`;

const safeParseJSON = (jsonString) => {
    try {
        const analizedJson = JSON.parse(jsonString);
        console.log(`Brava, cretina.`, analizedJson);
        return analizedJson;
    }catch(error){
        console.error(`Meno brava, cretina`, error.message)
        return null;
    };
}
