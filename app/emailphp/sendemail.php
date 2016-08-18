<?php
$to = "mahendrareddys@gmail.com";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: udaya@udayafashions.com" . "\r\n" .;

mail($to,$subject,$txt,$headers);
?>