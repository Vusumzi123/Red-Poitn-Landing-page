<?php

$budget = $_POST["budget"];
$description = $_POST["description"];
$fullName = $_POST["fullName"];
$bussiness = $_POST["bussiness"];
$phone = $_POST["phone"];
$email = $_POST["email"];





phpinfo();
// the message
$msg = "First line of text\nSecond line of text";

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("vusumziBelmontit@gmail.com","My subject",$msg);
?>
