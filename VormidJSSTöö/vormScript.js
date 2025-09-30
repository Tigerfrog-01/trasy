function Nimi() {

    let Eesnimi = document.getElementById("Eesnimi");
    let vastus = document.getElementById("vastus");


    vastus.innerHTML = "Eesnimi on: " + Eesnimi.value;
}

function PereKonnaNimi() {

    let PereKonnaNimi = document.getElementById("PereKonnaNimi");
    let vastus1 = document.getElementById("vastus1");


    vastus1.innerHTML = "Perekonnanimi on: " + PereKonnaNimi.value;
}

function radioValik() {
    let M = document.getElementById("Mees");
    let N = document.getElementById("Naine");
    let MU = document.getElementById("Muu");
    let pilt = document.getElementById("pilt");
    let vastus3 = document.getElementById("vastus3");

    if (M.checked) {
        pilt.src = "Meedia/Napoleon.png"
        vastus3.innerText = "Sa oled mees"
        vastus3.style.color = "blue";
    } else if (N.checked) {
        pilt.src = "Meedia/Josephine.jpg"
        vastus3.innerText = "Sa oled naine"
        vastus3.style.color = "red";
    } else if (MU.checked) {
        pilt.src = "Meedia/switserland.png"
        vastus3.innerText = "Sa oled muu sooline"
        vastus3.style.color = "green";

    } else {
        pilt.src = "";
        vastus3.innerText = "Tee oma valiku!"
        vastus3.style.color = "black";
    }
}
function Em() {

    let Email = document.getElementById("Email");
    let vastus5 = document.getElementById("vastus5");


    vastus5.innerHTML = "E-Post on: " + Email.value;
}
function Tel() {

    let Telefoninumber = document.getElementById("Telefoninumber");
    let vastus6 = document.getElementById("vastus6");


    vastus6.innerHTML = "Telefoninumber on: " + Telefoninumber.value;
}
function Adr() {

    let Aadress = document.getElementById("Aadress");
    let vastus7 = document.getElementById("vastus7");


    vastus7.innerHTML = "Aadress on: " + Aadress.value;
}
function Lin() {

    let Linn = document.getElementById("Linn");
    let vastus8 = document.getElementById("vastus8");


    vastus8.innerHTML = "Linn/Asula on: " + Linn.value;
}
function Post() {

    let Post = document.getElementById("Post");
    let vastus9 = document.getElementById("vastus9");


    vastus9.innerHTML = "Postiindeks on: " + Post.value;
}