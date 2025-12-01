<?php
$serverinimi="localhost";
$kasutajanimi="d141171_kristopher";
$parool='Kalapulk?OnParim!';
$andmebaasinimi='d141171_phpandmebaas';
$yhendus=new mysqli($serverinimi, $kasutajanimi, $parool, $andmebaasinimi);
$yhendus -> set_charset("utf8");
