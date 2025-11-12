//checkbox valikud
function valiAnsamble(){

let Abba=document.getElementById("Abba")
let Ramstein=document.getElementById("Ramstein")
let Frank=document.getElementById("Frank")
let Miss=document.getElementById("Miss")

let Vastus=document.getElementById("Vastus")

let valik="";

    if(Abba.checked)
    {
    valik+=Abba.value+",";
    }
    if(Ramstein.checked)
    {
        valik+=Ramstein.value+",";
    }
    if(Frank.checked)
    {
        valik+=Frank.value+",";
    }
    if(Miss.checked)
    {
        valik+=Miss.value+"";
    }




    Vastus.innerHTML="Sinu valitud muusikud/ansamblid:"+valik;
    Vastus.style.color="red";
}


function arvamus()
{
    let Arvamus=document.getElementById("Arvamus")
    let vastus2=document.getElementById("vastus2")

    vastus2.innerHTML="Sinu Arvamus: "+Arvamus.value;

}

function Tund()
{
    let tund=document.getElementById("tund")
    let vastus3=document.getElementById("vastus3")

    vastus3.innerHTML="Sa kuulad: "+tund.value +" tundi muusikat päevas";

}
function Raadio()
{
    let Jah=document.getElementById("Jah")
    let Ei=document.getElementById("Ei")
    let vastus4=document.getElementById("vastus4")


    if(Jah.checked)
    {
        vastus4.innerText = "Jah"
    }
    else if(Ei.checked)
    {
        vastus4.innerText = "Ei"
    }


}
function Nimeta()
{
    let Nimetamine=document.getElementById("Nimetamine")
    let vastus5=document.getElementById("vastus5")

    vastus5.innerHTML="Raadiojaamad: "+Nimetamine.value;
}

function Kuula()
{
    let Rokk=document.getElementById("Rokk");
    let Jazz=document.getElementById("Jazz")
    let Hip=document.getElementById("Hip")
    let Bluus=document.getElementById("Bluus")
    let Klassika=document.getElementById("Klassika")
    let Rapp=document.getElementById("Rapp")

    if(Rokk.checked)
    {
        vastus6.innerText = "Sinu muusika maitse on: Rokk"
    }
    else if(Jazz.checked)
    {
        vastus6.innerText = "Sinu muusika maitse on: Jazz"
    }
    else if(Hip.checked)
    {
        vastus6.innerText = "Sinu muusika maitse on: Hip-Hop"
    }
    else if(Bluus.checked)
    {
        vastus6.innerText = "Sinu muusika maitse on: Bluus"
    }
    else if(Klassika.checked)
    {
        vastus6.innerText = "Sinu muusika maitse on: Klassika"
    }
    else if(Rapp.checked)
    {
        vastus6.innerText = "Sinu muusika maitse on: Räpp"
    }

}
function Kokkuvotte() {

    let kokku = "";


    let valitudAnsamblid = [];
    document.querySelectorAll('input[name="ansamble"]:checked').forEach(cb => {
        valitudAnsamblid.push(cb.value);
    });
    kokku += "<p><b>Ansamblid:</b> " + (valitudAnsamblid.length > 0 ? valitudAnsamblid.join(", ") : "Ühtegi ei valitud") + "</p>";


    let arvamus = document.getElementById("Arvamus").value;
    kokku += "<p><b>Arvamus koolis muusika kohta:</b> " + (arvamus ? arvamus : "Pole sisestatud") + "</p>";


    let tunnid = document.getElementById("tund").value;
    kokku += "<p><b>Kuulatud tunnid päevas:</b> " + (tunnid && tunnid !== "TUND" ? tunnid : "Pole sisestatud") + "</p>";

    let raadio = document.querySelector('input[name="Vastus"]:checked');
    kokku += "<p><b>Kas kuulad raadiot:</b> " + (raadio ? raadio.value : "Pole valitud") + "</p>";


    let nimetamine = document.getElementById("Nimetamine").value;
    kokku += "<p><b>Tead raadiojaamu:</b> " + (nimetamine ? nimetamine : "Pole sisestatud") + "</p>";


    let stiil = document.querySelector('input[name="Milline"]:checked');
    kokku += "<p><b>Lemmikmuusika:</b> " + (stiil ? stiil.id : "Pole valitud") + "</p>";


    document.getElementById("Kokkuvote").innerHTML = kokku;
}