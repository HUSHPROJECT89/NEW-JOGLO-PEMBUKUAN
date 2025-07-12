// This file serves as the main entry point for the JavaScript functionality, initializing event listeners and managing navigation between pages.

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const pendapatanButton = document.getElementById('pendapatanButton');
    const pembayaranButton = document.getElementById('pembayaranButton');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            window.location.href = 'menu.html';
        });
    }

    if (pendapatanButton) {
        pendapatanButton.addEventListener('click', () => {
            window.location.href = 'pendapatan.html';
        });
    }

    if (pembayaranButton) {
        pembayaranButton.addEventListener('click', () => {
            window.location.href = 'pembayaran.html';
        });
    }
});