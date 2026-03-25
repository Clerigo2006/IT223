// Function to check if a username is taken
async function checkUsername(username) {
 try {
 // 1. Send data to the PHP file
 const response = await fetch('check_user.php', {
 method: 'POST',
 headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
 body: `username=${encodeURIComponent(username)}`
 });
 // 2. Parse the JSON response from PHP
 const data = await response.json();
 // 3. Update the UI based on the result
 const messageBox = document.getElementById('status');
 messageBox.innerText = data.message; 
 messageBox.style.color = data.available ? 'green' : 'red';

 } catch (error) {
 console.error('Error fetching data:', error);
 }
}