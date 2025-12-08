<?php
$serverinim='localhost';
$kasutajanimi='kristopher';
$parool='Kalapulk?OnParim!';
$andmebaasinimi='kristopher';
$yhendus=new mysqli($serverinim,$kasutajanimi,$parool,$andmebaasinimi);
$yhendus->set_charset("utf8");
