<?php
$servername = "localhost";
$username = "root";
$password = "Admin"; // default for XAMPP
$database = "login_system";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "DB connection failed"]));
}
?>