/* Scrivi una funzione chiamata divide che prende due parametri, dividendo e divisore.
Se il divisore è 0, genera un nuovo errore con il messaggio "Impossibile dividere per zero".
Altrimenti, restituisci il risultato della divisione.*/

const divide = (dividendo, divisore) => {
    try {
        if (divisore === 0) {
            throw new Error ("Impossibile dividere per zero")
        }
        return dividendo/divisore;
    }catch(error){
        console.error(error);
        return null;
        
    }   
    
    
    
}

const divisione = divide(10, 2);
console.log(divisione);
