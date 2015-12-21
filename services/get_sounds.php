<?php

$dir    = '../sounds';
$scan = scandir($dir, 1);
$results = array_slice($scan, 0, sizeof($scan) - 2);

header('Content-Type: application/json');
echo json_encode($results);

?>