const display = document.querySelector('.display');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

// Retrieve count from localStorage if it exists, otherwise default to 0
let count = localStorage.getItem('count')  ? parseInt(localStorage.getItem('count')) : 0; 
// Update display with initial count value
display.innerHTML = count;

function add() {
    count = count + 1;
    display.innerHTML = count;
    updateLocalStorage();
}

function subtract() {
    count = count - 1;
    display.innerHTML = count;
    updateLocalStorage();
}

function reset() {
    count = 0;
    display.innerHTML = count;
    updateLocalStorage();
}

// Function to update localStorage with current count value
function updateLocalStorage() {
    localStorage.setItem('count', count.toString());
}

// Event listeners for buttons
increaseBtn.addEventListener('click', add);
decreaseBtn.addEventListener('click', subtract);
resetBtn.addEventListener('click', reset);