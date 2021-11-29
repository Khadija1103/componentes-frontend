<?php
$nombre = $_POST['nombres'];
$correo = $_POST['correo'];
$telefono1 = $_POST['telefono1'];
$asunto = $_POST['asunto'];
$message = $_POST['mensaje'];

$header = 'From: ' . $correo . "\r\n";
$header .= "x-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: ".$nombres . "\r\n";
$message .= "Su email es: " . $correo  . "\r\n";

$message .= "Telefon de contacto: " . $telefono1 ."\r\n";
$mensaje .= "enviado el:" . date(d/m/Y , time());

$para = 'tatianamarrigo1103@gmail.com';


correo($para, utf8_decode($mensaje), $header);

header(location:contactenos.html);
?>