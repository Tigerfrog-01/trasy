function saksamaaLipp() {
    const lipp = document.getElementById("lipp");
    if (lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle="black";
        l.fillRect(0,0,330,70)

        l.fillStyle="red";
        l.fillRect(0,70,330,70)

        l.fillStyle="yellow";
        l.fillRect(0,140,330,70)
    }
}
function  eestiLipp() {
    const lipp = document.getElementById("lipp");

    if (lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle="blue";
        l.fillRect(0,0,330,70)

        l.fillStyle="black";
        l.fillRect(0,70,330,70)

        l.fillStyle="white";
        l.fillRect(0,140,330,70)
    }
}
function  prantsuseLipp() {
    const lipp = document.getElementById("lipp");

    if (lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle="blue";
        l.fillRect(0,0,110,210)

        l.fillStyle="white";
        l.fillRect(110,0,220,210)

        l.fillStyle="red";
        l.fillRect(220,0,330,210)
    }
}
function  preisimaaLipp() {
    const lipp = document.getElementById("lipp");

    if (lipp.getContext) {


        let l = lipp.getContext("2d");
        l.fillStyle = "black";
        l.fillRect(0, 0, 330, 70)

        l.fillStyle = "white";
        l.fillRect(0, 35, 340, 70)

        l.fillStyle = "black";
        l.fillRect(0, 175, 330, 70)

        const fail=new Image();
        fail.src="Prussia.png"
        l.drawImage(fail,65,50,115,115);
    }
}