global$yhendus; <!DOCTYPE html>
<html lang="et">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="../style.css">

    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">


</head>

<body>


<h1>Jõulupood</h1>

<?php
//navigeerimismenüü
include("navbar.php");
?>
<div>
    <?php
    include('config.php');

    $query ="SELECT kuupaev,hind,autor FROM leht WHERE id=1";

    

    $result = mysqli_query($yhendus,$query);
    $row = mysqli_fetch_array($result);



    $sisu = $row['sisu'] ?? '';
    $kuupaev = $row['sisu'] ?? '';
    $hind = $row['sisu'] ?? '';
    $autor = $row['sisu'] ?? '';
    //sisu - laetakse content kaustast
    if(isset($_GET["leht"])) {
        $file = 'content/' . $_GET["leht"];
        if (file_exists($file)) {


            include($file);

        } else {
            include('content/home.php');
        }
    }
    ?>
</div>


</body>
</html>