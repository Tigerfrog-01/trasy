function tana(){
    const now=new Date();
    const paev=now.getDate();
    const kuu=now.getMonth()+1;
    const aasta=now.getFullYear();

    const kuupaev="Täna on "+paev+". "+kuu+". "+aasta;

    const tunnid=now.getHours();
    const minutid=now.getMinutes();
    const sec=now.getSeconds();

    const kellad= tunnid+":"+minutid + ":" +sec;




    let aeg=document.getElementById("aeg");
    aeg.innerHTML=kuupaev + "kell on " + kellad;
}

//päevad sünnipäevani

function synnipaev() {



    let paevad = document.getElementById("paevad");

    let tana = new Date();
    let synd = new Date(tana.getFullYear(), 3, 6);

    if(synd < tana){
        synd = new Date(tana.getFullYear()+ 1, 3, 6);
    }

    let vahe=synd - tana;
    let paevi = Math.ceil( vahe/ (1000*60*60*24));


    paevad.innerHTML= "Minu sünnipäevani on " + paevi + "päeva";
    console.log("minu sünnipäevani" + paevi +" päeva");

    }



