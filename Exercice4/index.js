// Récupérer le bouton
const button = document.getElementById('myButton');

// Créer le paragraphe pour afficher le message
const message = document.createElement('p');
document.body.appendChild(message);

// Ajouter un observateur d'événement sur le bouton
button.addEventListener('click', function() {
    message.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
});