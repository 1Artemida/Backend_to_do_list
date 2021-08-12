<?php

require 'connection.php';

$todos = array();
$tour_count = 0;
$todos_req = mysqli_query($connection, "SELECT * FROM `todo`");

while($get_todos_array = mysqli_fetch_array($todos_req)) {
    $todos[$tour_count] = $get_todos_array;
    $tour_count++;
}

echo json_encode($todos);

?>