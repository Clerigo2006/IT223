<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"]== "POST"){
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "INSERT INTO users (username, password)
            VALUES ('$username', '$password')";
    
    try {
        $result = mysqli_query($conn, $sql);
        if ($result === TRUE) {
            echo "<script>alert('Registered User Successfully.');
                    window.location.href='log-in.html';</script>";
        }
    } catch (mysqli_sql_exception $e) {
        echo "<script>alert('User already exists.');
             window.location.href='sign-up.html';</script>";
    }

}

?>