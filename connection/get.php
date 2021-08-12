<?php
require_once '../connection/connection.php';
$id = $_POST['id'];
$get_id = mysqli_query($connection, "SELECT * FROM `todo` WHERE `id` = '$id'");

?>