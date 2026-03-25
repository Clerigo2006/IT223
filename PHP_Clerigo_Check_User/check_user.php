<?php
// Set the header so the browser knows we are sending JSON
header('Content-Type: application/json');
// Get the data from the POST request
$username = $_POST['username'] ?? '';
// Real-world: You would check this against a database
$taken_usernames = ['admin', 'root', 'user123'];
if (in_array(strtolower($username), $taken_usernames)) {
 $response = [
 "available" => false,
 "message" => "Sorry, that name is already taken!"
 ];
} else {
 $response = [
 "available" => true,
 "message" => "Username is available!"
 ];
}
// Convert the PHP array into a JSON string and send it back
echo json_encode($response);
?>
