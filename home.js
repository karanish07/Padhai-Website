// JavaScript to add functionality for a button click event and responsive navbar

document.addEventListener('DOMContentLoaded', function () {
    // Button click alert
    const button = document.querySelector('button');
    button.addEventListener('click', function () {
        alert('Button clicked!');
    });

    // Responsive navbar (toggle for small screens)
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar ul');

    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});

// script.js
function showNotification() {
    var notificationPanel = document.getElementById('notification-panel');
    notificationPanel.style.display = 'block';
  
    // Automatically hide the notification after 5 seconds
    setTimeout(closeNotification, 5000);
  }
  
  function closeNotification() {
    var notificationPanel = document.getElementById('notification-panel');
    notificationPanel.style.display = 'none';
  }
  
