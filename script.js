/* 
Step 1: array con le email di autorizzazione
Step 2: funzione per abilitare il pulsante dei dadi + verifica che l'email sia nel sistema
Step 3: funzione per il gioco dei dadi
*/



// Array contenente le email degli utenti autorizzati
let authorizedEmails = ["esempio@esempio.com", "esempio1@esempio.com", "esempio2@esempio.com"];

function checkAccess() {
    // Ottieni il valore dell'input email
    let userEmail = document.getElementById("email").value;

    // Controlla se l'email è autorizzata
    if (authorizedEmails.includes(userEmail)) {
        document.getElementById("accessResult").innerText = "Accesso consentito!";
        // Abilita il pulsante del gioco dei dadi
        document.getElementById("diceButton").disabled = false;
    } else {
        document.getElementById("accessResult").innerText = "Accesso negato. Email non autorizzata.";
        // Disabilita il pulsante del gioco dei dadi
        document.getElementById("diceButton").disabled = true;
    }
}

function playDiceGame() {
    // Genera numeri casuali da 1 a 6 per il giocatore e il computer
    let playerDice = Math.floor(Math.random() * 6) + 1;
    let computerDice = Math.floor(Math.random() * 6) + 1;

    // Mostra i risultati
    document.getElementById("diceResult").innerText = "Giocatore: " + playerDice + " | Computer: " + computerDice;

    // Determina il vincitore
    if (playerDice > computerDice) {
        document.getElementById("diceResult").innerText += "\nIl giocatore vince!";
    } else if (playerDice < computerDice) {
        document.getElementById("diceResult").innerText += "\nIl computer vince!";
    } else {
        document.getElementById("diceResult").innerText += "\nPareggio!";
    }
}