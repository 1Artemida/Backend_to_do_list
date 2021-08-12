<?php
require 'connection.php';
$id = $_POST['id'];
$isCompleted = $_POST['isCompleted'];

mysqli_query($connection, "UPDATE `todo` SET `isCompleted` = '$isCompleted' WHERE `id` = '$id'");

require 'backend.php';
?>