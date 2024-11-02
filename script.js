// Selección de elementos
const passwordField = document.getElementById('password');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const lengthField = document.getElementById('length');
const generateButton = document.getElementById('generate');

// Conjuntos de caracteres
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

// Función para generar contraseña
function generatePassword() {
    let password = '';
    let possibleChars = '';

    if (uppercaseCheckbox.checked) possibleChars += uppercaseChars;
    if (lowercaseCheckbox.checked) possibleChars += lowercaseChars;
    if (numbersCheckbox.checked) possibleChars += numberChars;
    if (symbolsCheckbox.checked) possibleChars += symbolChars;

    const length = parseInt(lengthField.value);

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * possibleChars.length);
        password += possibleChars[randomIndex];
    }

    passwordField.value = password;
}

// Evento para generar contraseña
generateButton.addEventListener('click', generatePassword);
