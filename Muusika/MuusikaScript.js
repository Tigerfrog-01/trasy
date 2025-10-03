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
    let vastus4=document.getElementById("Vastus4")
    let vastus5=document.getElementById("Vastus5")

    if(Jah.checked)
    {
        vastus4.innerText = "Jah"
    }
    else if(Ei.checked)
    {
        vastus5.innerText = "Ei"
    }
}

