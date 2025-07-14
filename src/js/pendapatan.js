// This file contains JavaScript functions for displaying daily revenue. 
// It retrieves and displays the earnings stored from completed transactions.

document.addEventListener('DOMContentLoaded', function() {
    displayRevenue();
});

function displayRevenue() {
    const revenueData = JSON.parse(localStorage.getItem('revenueData')) || [];
    const revenueTable = document.getElementById('revenueTable');

    if (revenueData.length === 0) {
        revenueTable.innerHTML = '<tr><td colspan="2">No revenue data available.</td></tr>';
        return;
    }

    let totalRevenue = 0;
    revenueTable.innerHTML = '';

    revenueData.forEach((entry) => {
        totalRevenue += entry.amount;
        const row = document.createElement('tr');
        row.innerHTML = `<td>${entry.date}</td><td>${entry.amount.toFixed(2)}</td>`;
        revenueTable.appendChild(row);
    });

    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td><strong>Total Revenue</strong></td><td><strong>${totalRevenue.toFixed(2)}</strong></td>`;
    revenueTable.appendChild(totalRow);
}