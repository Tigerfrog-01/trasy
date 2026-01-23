<?php
$serverinimi='localhost';
$kasutajanimi='opilaneKristopher';
$parool='12345';
$andmebaasinimi='lennujaam';
$yhendus=new mysqli($serverinimi, $kasutajanimi, $parool, $andmebaasinimi);
$yhendus->set_charset("utf8");