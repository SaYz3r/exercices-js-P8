function calculate(number1, number2, operator) {

    // Convertir en nombres
            const num1 = Number(number1);
            const num2 = Number(number2);

            if (operator === '+') {
                        return num1 + num2;
            } else if (operator === '-') {
                        return num1 - num2;
            } else if (operator === '*') {
                        return num1 * num2;
            } else if (operator === '/') {
                        if (num2 === 0 || num1 === 0) {
                        return 'Division by zero is not allowed';
            }
                        return num1 / num2;
            } else {
                        return 'Invalid operator';
            }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
