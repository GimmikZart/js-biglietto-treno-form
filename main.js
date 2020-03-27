// Creo una versione dell’EX del biglietto del treno ricca con un bell’output dinamico;
// Usare eventi sui 2 bottoni principali, e sviluppare le logiche che sottendono;
// “Genera” mi calcolerà il prezzo del biglietto a partire dai dati inseriti negli input
// e mi draà l’output in pagina, nel modo migliore possibile;
// “Annulla” mi fa tornare allo stato iniziale con output pulito


// STABILISCO LE VARIABILI DEL BIGLIETTO-----------

var costoAlKm;
var costoBiglietto;
var costoScontato;

// STABILISCO LE VARIABILI DELL'UTENTE------------
var nomeCliente = document.getElementById("nome");
var cognomeCliente = document.getElementById("cognome");
var etaCliente = document.getElementById("eta");
var classeViaggio = document.getElementById("classeviaggio");
var kmCliente = document.getElementById("km");

var genera = document.getElementById("genera");
var annulla = document.getElementById("annulla");

// CREO L'EVENTO AL CLICK CHE MI PRENDE I DATI DAGLI INPUT--------------------------------------
genera.addEventListener("click",
  function(){
    var nome = nomeCliente.value;
    var cognome = cognomeCliente.value;
    var eta = etaCliente.value;
    var classeTreno = classeViaggio.value;
    var kilom = kmCliente.value;
    // console.log(nome, cognome, eta, classeTreno, km);

    // CALCOLO IL PREZZO DEL BIGLIETTO ----------
    if (classeTreno === "primaClasse") {
      var costoAlKm = 0.42;
    } else if (classeTreno === "secondaClasse") {
      var costoAlKm = 0.21;
    }
    // console.log(costoAlKm);
    costoBiglietto = kilom * costoAlKm;
    // console.log(costoBiglietto);

    // CALCOLO IL PREZZO SCONTATO IN BASE ALL'ETA -----

    if (eta === "minorenne") {
      costoScontato = costoBiglietto * 0.80;
    } else if (eta === "over") {
      costoScontato = costoBiglietto * 0.60;
    } else {
      costoScontato = costoBiglietto;
    }

    console.log(costoScontato);







  }
)
