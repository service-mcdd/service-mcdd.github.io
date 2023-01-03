<?php
// Change this to your own configuration
$link = new mysqli('localhost','NAME','PASSWORD','penguin');
mysqli_set_charset($link, 'utf8');
if ($link->connect_error) {
    die("Failed to connect: " . $conn->connect_error);
}
$ranking = "mc_rank";
