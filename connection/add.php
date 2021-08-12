<?php
require 'connection.php';

$title = $_POST['title'];
mysqli_query($connection, "INSERT INTO `todo` (`id`, `title`, `isCompleted`) VALUES (null, '$title', '0')");
$todos_req = mysqli_query($connection, "SELECT * FROM `todo`");

require 'backend.php';
?>