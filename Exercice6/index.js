function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    
    try {
        // Évaluer l'expression mathématique
        const result = eval(display.value);
        
        // Vérifier si c'est Infinity (division par zéro)
        if (result === Infinity || result === -Infinity) {
            display.value = 'Division by zero is not allowed';
        } else {
            display.value = result;
        }
    } catch (error) {
        // En cas d'erreur (expression invalide)
        display.value = 'Erreur';
    }
}