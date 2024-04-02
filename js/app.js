// console.log('ciao mondo!');

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


// CREO una variabile per ASCOLTAE l'evento nel FORM e INVOCARE la funzione per i calcoli
const form = document.getElementById('form-preventive')
// console.log(form)
form.addEventListener('submit', stampaPrezzo)


// CREARE una funzione in modo che i calcoli si attivino quando avviene l'evento "CLIK" sul bottone nel form
function stampaPrezzo(e) {
    // RESETTARE il comportamento automatico di refresh della pagina del form
    e.preventDefault()

    // CREARE una variabile per raccogliere il VALORE "tipo di lavoro" tramite ID dal FORM HTML
    const work = document.getElementById('inputWorksType').value
    console.log(work);

    // CREARE una variabile che raccolga il VALORE del codice promozionale tramite ID dal FORM
    const promotion = document.getElementById('inputPromotion').value
    console.log(promotion);

    // CREARE un ARRAY che raccolga i codici promozionali da interrogare successivamente
    const promotionCode = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"]
    console.log(promotionCode);

    // CICLO l'array dei codici promozionali per confrontarlo con il valore inserito dall'utente
    for (let i = 0; i < promotionCode.length; i++) {
        const checkCode = promotionCode[i];
        console.log(checkCode);


        //VERIFICO SE il campo dei codici promozionali è stato compilato o no
        // SE il valore è vuoto
        if (promotion == '') {

            // ALLORA prosegue la funzione per calcolare il prezzo senza sconto
            // SE il tipo di valore selezionato corrisponde al "backend"
            if (work == 'backend') {
                // ALLORA la variabile "price" sarà = 20.50€/l'ora (10 ore)
                const price = 20.50 * 10
                // console.log(price);
                // CREARE una variabile con ELment method per recuperare lID dal DOM e stamparlo nel paragrafo ocn ID "finalPrice"
                const priceElement = document.getElementById('finalPrice')
                priceElement.innerHTML = '&euro; ' + price.toFixed(2)

                // SE il tipo di valore selezionato corrisponde al "frontend"
            } else if (work == 'frontend') {
                // ALLORA la variabile "price" sarà = 15.30€/l'ora (10 ore)
                const price = 15.30 * 10
                // STAMPO il vaolre nell' HTML
                const priceElement = document.getElementById('finalPrice')
                priceElement.innerHTML = '&euro; ' + price.toFixed(2)

                // SE il tipo di valore selezionato corrisponde a "analysis"
            } else if (work == 'analysis') {
                // ALLORA la variabile "price" sarà = 33.60€/l'ora (10 ore)
                const price = 33.60 * 10
                // STAMPO il vaolre nell' HTML
                const priceElement = document.getElementById('finalPrice')
                priceElement.innerHTML = '&euro; ' + price.toFixed(2)
            }


            // ALTRIMENTI SE è stato inserito uno dei codici promozionali
        } else if (promotion == checkCode) {
            // ALLORA verifica il lavoro selezionato e calcola i prezzi con lo sconto del 25%
            if (work == 'backend') {

                const price = (20.50 * 10) * 0.25
                const priceElement = document.getElementById('finalPrice')
                priceElement.innerHTML = '&euro; ' + price.toFixed(2)

            } else if (work == 'frontend') {

                const price = (15.30 * 10) * 0.25
                const priceElement = document.getElementById('finalPrice')
                priceElement.innerHTML = '&euro; ' + price.toFixed(2)

            } else if (work == 'analysis') {

                const price = (33.60 * 10) * 0.25
                const priceElement = document.getElementById('finalPrice')
                priceElement.innerHTML = '&euro; ' + price.toFixed(2)
            }


            // ALTRIMENTI mostra messaggio di avviso per codice sbagliato
        } else if (promotion !== checkCode) {
            alert('Codice promozionale non valido')
        }

    }
}




