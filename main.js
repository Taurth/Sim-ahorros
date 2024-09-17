let totalSavings = 0;
let savingsHistory = [];

function saveMoney() {
    let amount = parseInt(document.getElementById("amount").value);
    if (!isNaN(amount) && amount > 0) {
        totalSavings += amount;
        savingsHistory.push(amount);
        updateSavingsStatus();
        updateSavingsHistory();
        
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

function updateSavingsStatus() {
    document.getElementById("savings-status").innerHTML = `Total ahorrado: $${totalSavings}`;
}

function updateSavingsHistory() {
    let historyText = "Historial de ahorros: <br>";
    for (let i = 0; i < savingsHistory.length; i++) {
        historyText += `Ahorro ${i + 1}: $${savingsHistory[i]}<br>`;
    }
    document.getElementById("savings-history").innerHTML = historyText;
}

function checkGoal() {
    let goal = parseInt(document.getElementById("goal").value);
    if (!isNaN(goal) && goal > 0) {
        if (totalSavings >= goal) {
            document.getElementById("goal-status").innerHTML = "¡Felicidades! Has alcanzado tu meta de ahorro.";
        } else {
            document.getElementById("goal-status").innerHTML = `Te faltan $${goal - totalSavings} para alcanzar tu meta.`;
        }
    } else {
        document.getElementById("goal-status").innerHTML = "Por favor, ingresa una meta válida.";
    }
}

function resetSavings() {
    totalSavings = 0;
    savingsHistory = [];
    updateSavingsStatus();
    document.getElementById("savings-history").innerHTML = "Historial de ahorros reseteado.";
    document.getElementById("goal-status").innerHTML = "";
}