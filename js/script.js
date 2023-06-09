// Variabili js

const button = document.querySelector('.card button');

button.addEventListener('click', function() {
  const firstName = prompt('Inserisci il tuo nome');
  const lastName = prompt('Inserisci il tuo cognome');
  const favouriteColor = prompt('Inserisci il tuo colore preferito');

  const output = document.getElementById('txt');
  output.innerHTML = `${firstName} ${lastName} ${favouriteColor} 101`;
});
