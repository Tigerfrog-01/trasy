<?php
$serverinim='localhost';
$kasutajanimi='kristopher';
$parool='Kalapulk?OnParim!';
$andmebaasinimi='test';
$yhendus=new mysqli($serverinim,$kasutajanimi,$parool,$andmebaasinimi);
$yhendus->set_charset("utf8");
