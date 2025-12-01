<?php
require ('conf.php');
global $yhendus;
if(isset $_REQUEST["loomanimi"]) && $_REQUEST["loomanimi"] != "0") {
    $kask = $yhendus->prepare("INSERT INTO loomad(loomanimi VALUES(?,?,?))");
    $kask->bind_param("s", $_REQUEST['loomanimi'], $_REQUEST['kaal'], $_REQUEST['varv']);


    $kask->execute();
    header("Location:loomaLisamine.php");
}

?>
<!DOCTYPE html>
<html lang="et">

<head>
    <title>Looma lisamine SQL tabeli sisse</title>
</head>
<body>
<h1>
    Looma lisamine
</h1>
</body>
<form action="" name="loom">
    <label for="loomanimi">Sisesta looma nimi</label>
    <input type="text" name="loomanimi" id="loomanimi">
    <br>
    <label for="kaal">Kaal</label>
    <input type="text" name="loomanimi" id="loomanimi">
    <br>
    <label for="varv">Looma varv</label>
    <input type="text" name="loomanimi" id="loomanimi">
    <br>
    <input type="submit" value="lisa">
</form>



</html>
