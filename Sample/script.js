const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');
const sendBtn = document.getElementById('send-button');

sendBtn.addEventListener('click', notify);

function notify(event) {
    event.preventDefault();
    
    if (username.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill in all fields.');
    } else {
       alert(`Message sent from ${username.value} (${email.value}): ${message.value}`);

        username.value = '';
        email.value = '';
        message.value = '';
    }
}   