function juhuslikPilt()
{
    //masiiv
    const pildid=[
        'images/uks.png',
        'images/kaks.png',
        'images/kolm.png',
        'images/neli.png',
        'images/viis.png',
    ];
    const randomPilt=document.getElementById("randomPilt");
    //Math.Random() - juhuslik arv
    //Math.floor - võtab arvust täisosa
    //pildid.lenght - mitu pilti on massiivis
    const juhuslikArv=Math.floor(Math.random()*pildid.length);

    randomPilt.src=pildid[juhuslikArv];
}
function piltmyistatus(){
    let randomPilt=document.getElementById("randomPilt");
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik"); //mitu elements ühe nimega valik

    //tsükl for
    for(let i=0;i<valik.length;i++){
        if(valik[i].checked){
            if(randomPilt.getAttribute("src")==valik[i].value){
                vastus.innerHTML="õige vastus!";
                vastus.style.background="green";
            } else{
                vastus.innerHTML="Mõtle veel";
                vastus.style.background="red";
            }

        }
    }
}
function arvuta(kogus, hind){
    return(kogus*hind).toFixed(2)
    //toFixed - ümardab 2 numbri peale koma
}
const piltuksHind=271;
const piltkaksHind=50;
const piltkolmHind=340;
const piltneliHind=67;
const piltviisHind=616;

function arvutaPiltHind(){
    let vastus2=document.getElementsByName("vastus2");
    let tk=document.getElementById("tk");
    let v1=document.getElementById("v1");
    let v2=document.getElementById("v2");
    let v3=document.getElementById("v3");
    let v4=document.getElementById("v4");
    let v5=document.getElementById("v5");

    if(v1.checked){
        vastus2.innerHtml=arvuta(tk.value, piltuksHind)+" euro";
    }
    if(v2.checked){
        vastus2.innerHtml=arvuta(tk.value, piltkaksHind)+" euro";
    }
    if(v3.checked){
        vastus2.innerHtml=arvuta(tk.value, piltkolmHind)+" euro";
    }
    if(v4.checked){
        vastus2.innerHtml=arvuta(tk.value, piltneliHind)+" euro";
    }
    if(v5.checked){
        vastus2.innerHtml=arvuta(tk.value, piltviisHind)+" euro";
    }




}



