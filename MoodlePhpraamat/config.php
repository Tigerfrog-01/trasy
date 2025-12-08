<?php

$serverinimi = "localhost";
$kasutajanimi = "kristopher";
$parool = 'Kalapulk?OnParim!';
$andmebaasinimi = 'kristopher';
$yhendus = new mysqli($serverinimi, $kasutajanimi, $parool, $andmebaasinimi);
$yhendus->set_charset("utf8");