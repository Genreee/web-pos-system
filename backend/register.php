<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include "db.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "No data received"]);
    exit();
}

$email = trim($data['email']);
$password = trim($data['password']);

// Check for empty fields
if (empty($email) || empty($password)) {
    echo json_encode(["status" => "error", "message" => "Please fill in all fields"]);
    exit();
}

// Check if email already exists
$stmt = $conn->prepare("SELECT * FROM users WHERE email=?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(["status" => "error", "message" => "Email already registered"]);
    exit();
}

// Insert new user
$insert = $conn->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
$insert->bind_param("ss", $email, $password);
if ($insert->execute()) {
    echo json_encode(["status" => "success", "message" => "Account created successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to create account"]);
}
?>