"use strict";
function deleteContact(button) {
  if (confirm("האם אתה בטוח שברצונך למחוק את איש הקשר הזה?")) {
    var li = button.parentElement;
    li.parentElement.removeChild(li);
  }
}
function addContact() {
  var nameEmail = prompt("הזן שם וכתובת דוא\"ל:");
  if (nameEmail) {
    var ul = document.getElementById("contact-list");
    var li = document.createElement("li");
    li.innerHTML = nameEmail + ' <button onclick="deleteContact(this)">מחיקה</button> <button onclick="updateContact(this)">עדכון</button>';
    ul.appendChild(li);
  }
}

function clearContacts() {
  document.getElementById('contact-list').innerHTML = '';
}
function hidePopup() {
  document.getElementById("contact-popup").style.display = 'none'
}
function showPopup() {
  document.getElementById("contact-popup").style.display = 'block'
}
const contactsArray = [
  { name: 'גיל חדד', email: 'gil@gmail.com' },
  { name: 'רועי מיזרחי', email: 'roei@gmail.com' },
  { name: 'מורי וסרמן', email: 'mori@gmail.com' },
  { name: 'נדב סייג', email: 'nadav@gmail.com' },
  { name: 'מידן חמו', email: 'miedan@gmail.com' },
  { name: 'מיכאל סידוריוק', email: 'misha@gmail.com' },
  { name: 'נעמי שומנסקי', email: 'somnski@gmail.com' }
];
document.addEventListener('DOMContentLoaded', function () {
  loadContacts(contactsArray);
})
function clearContacts() {
  if (confirm('האם אתה בטוח שברצונך למחוק את כל אנשי הקשר?')) {
    document.getElementById('contact-list').innerHTML = '';
  }
}
function loadContacts(contacts) {
  const contactList = document.getElementById('contact-list');
  contactList.innerHTML = ''; // ניקוי רשימה קיימת
  contacts.forEach(contact => {
    const li = document.createElement('li');
    li.innerHTML = `${contact.name} - ${contact.email} <button onclick="deleteContact(this)">מחיקה</button> <button onclick="updateContact(this)">עדכון</button>`;
    contactList.appendChild(li);
  });
}
function updateContact(button) {
  const li = button.parentElement;
  const name = li.childNodes[0].textContent.split(' - ')[0];
  const email = li.childNodes[0].textContent.split(' - ')[1];

  document.getElementById('name').value = name;
  document.getElementById('email').value = email;

  showPopup();
}
