<?php
require('config.php');
global $yhendus;


?>
    <!DOCTYPE html>
    <html lang="et">
    <head>
        <title>Tooted</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>

<h1>JÕULUPOOD</h1>

<nav>
    <ul>
        <li><a href="avaleht.php">Avaleht</a></li>
<li><a href="HomepagePublic.php">Toodet</a></li>
    <li><a href="HomepageAdmin.php">Toodet - Admin-View</a></li>
    </ul>
</nav>



    <div id="menyykiht">
        <h2>Tooted</h2>
        <ul id="menuu">
            <?php
            //loendi kuvamine
            $kask = $yhendus->prepare(
                "SELECT id, pealkiri FROM lehed"
            );
            $kask->bind_result($id, $pealkiri);
            $kask->execute();
            while ($kask->fetch()) {

                echo "<li><a href='".$_SERVER["PHP_SELF"]."?id=$id' class='menu-button'>".htmlspecialchars($pealkiri)."</a></li>";
            }
            ?>
        </ul>

    </div>

<fieldset id="tooted">

    <div id="sisukiht">
        <?php
        echo "<div id='info'> ";
        // Ühe teate kuvamine või muutmine
        if (isset($_REQUEST["id"])) {
            $kask = $yhendus->prepare("SELECT id, pealkiri, sisu, kuupaev,hind,autor, pilt FROM lehed WHERE id=?");
            $kask->bind_param("i", $_REQUEST["id"]);
            $kask->execute();
            $kask->bind_result($id, $pealkiri, $sisu, $kuupaev,$hind, $autor, $pilt);
            $kask->fetch();



                 if(!empty($id)) {
                     echo "<h2>" . htmlspecialchars($pealkiri) . "</h2>";
                     echo "Toote Informatsioon " . htmlspecialchars($sisu);
                     echo "<br>";
                     echo "lisamise kuupäev: " . htmlspecialchars($kuupaev);
                     echo "<br>";
                     echo "Toote hind: " . htmlspecialchars($hind).("€");
                     echo "<br>";
                     echo "Toote Firma: " . htmlspecialchars($autor);
                     echo "<br>";
                     if (!empty($pilt)) {
                         echo "<br>Pilt:<br>";
                         echo "<img src='" . htmlspecialchars($pilt) . "' alt='Teate pilt' style='max-width:300px;'><br>";
                     }
                 }
                 echo "</div>";



        }
        ?>
    </div>
    </fieldset>


    <div id="jalusekiht">
        Lehe tegi Kristopher Žuravljov TARpe24
    </div>
    </body>
    </html>
<?php
$yhendus->close();
?>