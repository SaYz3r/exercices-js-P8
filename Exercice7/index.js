function convertToBinary() {
    // Récupérer la valeur saisie par l'utilisateur
    const decimalInput = document.getElementById('decimalInput');
    const binaryResult = document.getElementById('binaryResult');
    const inputValue = decimalInput.value.trim();
    
    // Vérifier si l'entrée est vide
    if (inputValue === '') {
        binaryResult.textContent = '';
        return;
    }
    
    // Vérifier que l'entrée ne contient QUE des chiffres (avec possibilité de signe négatif)
    if (!/^-?\d+$/.test(inputValue)) {
        binaryResult.textContent = '';  // Invalide si contient autre chose que des chiffres
        return;
    }
    
    const decimalNumber = parseInt(inputValue);
    
    // Vérifier si le nombre est négatif
    if (decimalNumber < 0) {
        binaryResult.textContent = '';
        return;
    }
    
    // Cas spécial : si le nombre est 0
    if (decimalNumber === 0) {
        binaryResult.textContent = '0';
        return;
    }
    
    // Conversion en binaire avec l'algorithme de division
    let binary = '';
    let quotient = decimalNumber;
    
    while (quotient > 0) {
        const remainder = quotient % 2;
        binary = remainder + binary;
        quotient = Math.floor(quotient / 2);
    }
    
    // Afficher le résultat
    binaryResult.textContent = binary;
}