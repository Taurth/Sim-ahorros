let totalSavings = 0;

function saveMoney() {
    let amount = parseInt(document.getElementById("amount").value);
    if (!isNaN(amount) && amount > 0) {
        totalSavings += amount;
        document.getElementById("savings-status").innerHTML = 
            `Has guardado: $${amount}. Total ahorrado: $${totalSavings}`;
        
        document.getElementById("amount").value = '';
    } else {
        document.getElementById("savings-status").innerHTML =
        `Total ahorrado: $${totalSavings}`+ " / " + "Por favor, ingresa una cantidad válida.";
    }
}

function resetSavings() {
    totalSavings = 0;
    document.getElementById("savings-status").innerHTML = `El ahorro ha sido reiniciado. Total ahorrado: $${totalSavings}`;
}