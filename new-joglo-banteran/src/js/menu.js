// This file contains JavaScript functions for managing menu items, including adding, editing, and deleting items. 
// It handles the storage of menu items and updates the display on the menu page.

let menuItems = [];

// Function to add a menu item
function addMenuItem(name, price) {
    const newItem = { name, price: parseFloat(price) };
    menuItems.push(newItem);
    displayMenuItems();
}

// Function to edit a menu item
function editMenuItem(index, name, price) {
    if (menuItems[index]) {
        menuItems[index].name = name;
        menuItems[index].price = parseFloat(price);
        displayMenuItems();
    }
}

// Function to delete a menu item
function deleteMenuItem(index) {
    if (menuItems[index]) {
        menuItems.splice(index, 1);
        displayMenuItems();
    }
}

// Function to display menu items
function displayMenuItems() {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = '';
    menuItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editMenuItemPrompt(index);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteMenuItem(index);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        menuList.appendChild(listItem);
    });
}

// Function to prompt for editing a menu item
function editMenuItemPrompt(index) {
    const name = prompt('Enter new name:', menuItems[index].name);
    const price = prompt('Enter new price:', menuItems[index].price);
    if (name && price) {
        editMenuItem(index, name, price);
    }
}

// Event listener for adding a menu item
document.getElementById('add-menu-item').addEventListener('click', () => {
    const name = document.getElementById('menu-name').value;
    const price = document.getElementById('menu-price').value;
    if (name && price) {
        addMenuItem(name, price);
        document.getElementById('menu-name').value = '';
        document.getElementById('menu-price').value = '';
    }
});

// Initial display of menu items
displayMenuItems();