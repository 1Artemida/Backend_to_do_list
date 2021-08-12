<?php
require 'connection.php';

$id = $_POST['id'];

mysqli_query($connection, "DELETE FROM `todo` WHERE `id` = '$id'");

require 'backend.php';

?>