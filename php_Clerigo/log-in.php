<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"]== "POST"){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username = '$username' COLLATE utf8mb4_bin AND password = '$password' COLLATE utf8mb4_bin";
    $result = mysqli_query($conn, $sql);

    if ($result->num_rows>0) {
        $_SESSION['username'] = $username;
        header("Location: homepage.html"); 
    }
    else{
        echo "<script>alert('Invalid username or password.');
        window.location.href='log-in.html';</script>";
    }

}

?>