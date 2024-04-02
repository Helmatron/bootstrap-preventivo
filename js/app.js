console.log('ciao mondo!');

// << CONSEGNA >>

// Quando l’utente fa click sul bottone submit del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste. 
// Il prezzo finale è dato dal numero di ore per prezzo orario. Supponiamo per semplicità che ogni progetto richieda lo stesso numero di ore di lavoro (es: 10 ore).

// Il prezzo orario per una commissione varia in questo modo:
// ●	se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.50€/l’ora
// ●	se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.30€/l’ora
// ●	se la commissione riguarda l’analisi progettuale il prezzo orario è di 33.60€/l’ora

// L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti: YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24.

// Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.

// Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro).



// << ANALISI e SVILUPPO >>

// LA CONSEGNA RIGUARDA SOLO LA RACCOLTA DEI DATI PER ELABORARE IL PREZZO E STAMPARLO NELL'APPOSITA SEZIONE NELL' HTML

// CREARE una variabile per raccogliere il dato "tipo di lavoro" tramite ID dal FORM HTML
// CREARE una variabile che raccolga l'inserimento del codice promozionale tramite ID dal FORM
// CREARE un ARRAY che raccolga i codici promozionali da interrogare successivamente



// CREARE una funzione in modo che i calcoli si attivino quando avviene l'evento "CLIK" sul bottone nel form
// RESETTARE il comportamento automatico di refresh della pagina del form

// SE il tipo di valore selezionato corrisponde al "backend"
// ALLORA la variabile "standardPrice" sarà = 20.50€/l'ora (10 ore)
// SE il tipo di valore selezionato corrisponde al "frontend"
// ALLORA la variabile "standardPrice" sarà = 15.30€/l'ora (10 ore)
// SE il tipo di valore selezionato corrisponde al "analisi progettuale"
// ALLORA la variabile "standardPrice" sarà = 33.60€/l'ora (10 ore)

// CREARE una variabile per raccogliere il risultato "standardPrice"


// CREARE una variabile per raccogliere il codice promozionale dal form
// CICLO l'array dei codici promozionali per confrontarlo con il valore inserito dall'utente
// VERIFICARE SE l'utente ha inserito un codice promozionale

// SE il valore "promotion" == 0 (l'utente non ha inserito nulla)
// ALLORA "price" = standardPrice
// IL PREZZO deve essere stampato nell'HTML con due valori decimali e il simbolo €

// SE la variabile del codice promozionale è == a uno dei valori presenti nell'array
// ALLORA "price" = standardPrice - 25%

// ALTRIMENTI "price" = standardPrice
// Comunicare all'utente che il codice inserito non è valido

