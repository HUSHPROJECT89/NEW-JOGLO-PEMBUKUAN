// This file contains JavaScript functions for processing payments. 
// It manages the selection of menu items, quantity input, total calculation, and change calculation.

let menuItems = [];
let total = 0;

function addMenuItem(name, price) {
    menuItems.push({ name, price });
}

function calculateTotal() {
    const quantities = document.querySelectorAll('.quantity');
    total = 0;
    quantities.forEach((input, index) => {
        const quantity = parseInt(input.value) || 0;
        total += quantity * menuItems[index].price;
    });
    document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;
}

function calculateChange() {
    const amountGiven = parseFloat(document.getElementById('amountGiven').value) || 0;
    const change = amountGiven - total;
    document.getElementById('change').innerText = `Change: $${change.toFixed(2)}`;
}

function setupEventListeners() {
    const quantityInputs = document.querySelectorAll('.quantity');
    quantityInputs.forEach(input => {
        input.addEventListener('input', calculateTotal);
    });

    document.getElementById('amountGiven').addEventListener('input', calculateChange);
}

document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
});