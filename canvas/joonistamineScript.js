//sirge joon
function sirgeJoon()
//määrame tahvli
{
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext)
    {
        let t=tahvel.getContext("2d"); //anname tahvlinimi on t
        //joon
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth=5;
        t.moveTo(50,100); //alguspunkt
        t.lineTo(150,200); //lõppunkt
        t.stroke();
    }
}

function kolmnurk()
//määrame tahvli
{
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d"); //anname tahvlinimi on t
        //joon
        t.beginPath();
        t.strokeStyle = "blue";
        t.fillStyle = "blue";
        t.lineWidth = 1;
        t.moveTo(50, 100); //alguspunkt
        t.lineTo(150, 100);
        t.lineTo(150, 200);
        t.lineTo(50, 100); //lõppunkt
        t.stroke();
        t.fill();
    }
}

    function puhasta() {
        const tahvel = document.getElementById("tahvel");
        if (tahvel.getContext) {
            let t = tahvel.getContext("2d");
            t.clearRect(0, 0, 300, 250); // 0,0 - vasak üleval tahvli nurk, 300-tahvli laius,250-tahvli kõrgus
        }
    }
function ring()

{
    const tahvel = document.getElementById("tahvel");
    let r=document.getElementById("raadius");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        //ümberjoon
        t.beginPath();
        t.strokeStyle = "yellow";
        t.lineWidth = 5;
        t.arc(100, 100, r.value, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
        t.stroke()
        //ring
        t.beginPath();
        t.strokeStyle = "orange";
        t.fillStyle = "orange";
        t.lineWidth = 1;
        t.arc(100, 100, r.value, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
        t.stroke()
        t.fill()
    }
    }
function ristkulik() {
    const tahvel = document.getElementById("tahvel");
    let laius=document.getElementById("laius");
    let korgus = document.getElementById("korgus");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        t.fillStyle = "purple";
        t.fillRect(50, 30, laius.value, korgus.value); // 0,0 - vasak üleval tahvli nurk, 300-tahvli laius,250-tahvli kõrgus
    }
}
function pilt() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");

        const fail=new Image();
        fail.src="https://picsum.photos/seed/picsum/200/300"
        t.drawImage(fail,50,50,100,200);
    }
}