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

    function prezzoStandard(work) {
        // SE il tipo di valore selezionato corrisponde al "backend"
        if (work == 'backend') {
            // ALLORA la variabile "price" sarà = 20.50€/l'ora (10 ore)
            return price = 20.50 * 10
            // console.log(price);
        } else if (work == 'frontend') {
            // ALLORA la variabile "price" sarà = 15.30€/l'ora (10 ore)
            return price = 15.30 * 10
            // SE il tipo di valore selezionato corrisponde a "analysis"
        } else if (work == 'analysis') {
            // ALLORA la variabile "price" sarà = 33.60€/l'ora (10 ore)
            return price = 33.60 * 10
        }
    }
    let prezzoFinale = prezzoStandard(work)
    console.log(prezzoFinale);

    // CREARE una variabile che raccolga il VALORE del codice promozionale tramite ID dal FORM
    let discount = document.getElementById('inputDiscount').value
    console.log(discount);

    // CREARE un ARRAY che raccolga i codici promozionali da interrogare successivamente
    const discountCode = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'] // strings objects
    // console.log(discountCode);

    const isValid = discountCode.includes(discount)
    console.log(isValid);

    if (discount === '') {
        prezzoStandard(work)
    } else if (isValid === true) {
        prezzoFinale = prezzoStandard(work) * 0.25
    } else {
        alert ('error')
    }
    
    

    const priceElement = document.getElementById('finalPrice')
    priceElement.innerHTML = '&euro; ' + prezzoFinale.toFixed(2);
    console.log(prezzoFinale, typeof prezzoFinale); //number
    prezzoFinale
}