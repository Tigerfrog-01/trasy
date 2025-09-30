function nimiLugemine(){

let nimi=document.getElementById("nimi");
let vastus=document.getElementById("vastus");


  vastus.innerHTML="Tere, "+ nimi.value;
}
function puhasta()
{
    let nimi=document.getElementById("nimi");
    let vastus=document.getElementById("vastus");
    let vastus2=document.getElementById("vastus2");


    vastus.innerHTML="Vastusekoht";
    nimi.value="";
    vastus2.style.backgroundColor="white";
}
function varvValik(){
  let vastus2=document.getElementById("vastus2");
  let varv=document.getElementById("varv");

  vastus2.style.backgroundColor=varv.value;
}
function radioValik() {
    let naerata = document.getElementById("naerata");
    let kurvasta = document.getElementById("kurvasta");
    let pilt = document.getElementById("pilt");
    let vastus3 = document.getElementById("vastus3");

    if (naerata.checked) {
        pilt.src = "images/NapoleonH.jpg"
        vastus3.innerText = "Naerata!!!"
        vastus3.style.color = "green";
    } else if (kurvasta.checked) {
        pilt.src = "images/NapoleonS.jpg"
        vastus3.innerText = "Kurvasta!!!"
        vastus3.style.color = "red";
    } else {
        pilt.src = "";
        vastus3.innerText = "Tee oma valiku!"
        vastus3.style.color = "black";
    }
}
    function tujuSlider() {
        let tuju = document.getElementById("tuju");
        let vastus4 = document.getElementById("vastus4");

        vastus4.innerHTML = "Tuju slider näitab +" + tuju.value;
        if (tuju.value < 30) {
            vastus4.innerHTML = "Tuju slider näitab +" + tuju.value
                + " punkti.<br> Ja sa oled kurb!";

        } else if (tuju.value < 60) {
            vastus4.innerHTML = "Tuju slider näitab +" + tuju.value
                + " punkti.<br> Ja sa oled Neutraalne!";

        } else {
            vastus4.innerHTML = "Tuju slider näitab +" + tuju.value
                + " punkti.<br> Rõõmus oled!";
        }
    }
function kooliValik(){
            let vastus5= document.getElementById("vastus5");
            let kool=document.getElementById("kool");

            //selectedIndx,1 rida on null rida javascriptis
    if (kool.selectedIndex!==0) {
        vastus5.innerHTML="Sinu unistuste kool on " + kool.value;
    }
    else
    {
        vastus5.innerHTML="Tee oma valik!";
    }
}

