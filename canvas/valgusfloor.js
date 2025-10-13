function Floor() {

            const valgusfloor = document.getElementById("valgusfloor");

            if (valgusfloor.getContext) {
                let t = valgusfloor.getContext("2d");
                let l = valgusfloor.getContext("2d");
                let u = valgusfloor.getContext("2d");
                t.fillStyle = "grey";
                t.fillRect(50, 30, 150,300); // 0,0 - vasak üleval tahvli nurk, 300-tahvli laius,250-tahvli kõrgus

                t.beginPath();
                t.strokeStyle = "black";
                t.fillStyle = "darkgrey";
                t.lineWidth = 1;
                t.arc(125, 80, 35,300, 2 * Math.PI, true); //x, y-keskpunkt, R
                t.stroke()
                t.fill()

                l.beginPath();
                l.strokeStyle = "black";
                l.fillStyle = "darkgrey";
                l.lineWidth = 1;
                l.arc(125, 180, 35,300, 2 * Math.PI, true); //x, y-keskpunkt, R
                l.stroke()
                l.fill()

                u.beginPath();
                u.strokeStyle = "black";
                u.fillStyle = "darkgrey";
                u.lineWidth = 1;
                u.arc(125, 280, 35,300, 2 * Math.PI, true); //x, y-keskpunkt, R
                u.stroke()
                u.fill()
            }
        }
function stopNupp() {
    const valgusfloor = document.getElementById("valgusfloor");

    if (valgusfloor.getContext) {
        let t = valgusfloor.getContext("2d");
        let l = valgusfloor.getContext("2d");
        let u = valgusfloor.getContext("2d");
        t.fillStyle = "grey";
        t.fillRect(50, 30, 150,300); // 0,0 - vasak üleval tahvli nurk, 300-tahvli laius,250-tahvli kõrgus
        t.beginPath();
        t.strokeStyle = "black";
        t.fillStyle = "red";
        t.lineWidth = 1;
        t.arc(125, 80, 35,300, 2 * Math.PI, true); //x, y-keskpunkt, R
        t.stroke()
        t.fill()

        l.beginPath();
        l.strokeStyle = "black";
        l.fillStyle = "darkgrey";
        l.lineWidth = 1;
        l.arc(125, 180, 35,300, 2 * Math.PI, true); //x, y-keskpunkt, R
        l.stroke()
        l.fill()

        u.beginPath();
        u.strokeStyle = "black";
        u.fillStyle = "darkgrey";
        u.lineWidth = 1;
        u.arc(125, 280, 35,300, 2 * Math.PI, true); //x, y-keskpunkt, R
        u.stroke()
        u.fill()

    }
}
function ootaNupp() {

    const valgusfloor = document.getElementById("valgusfloor");

    if (valgusfloor.getContext) {
        let t = valgusfloor.getContext("2d");
        let l = valgusfloor.getContext("2d");
        let u = valgusfloor.getContext("2d");
        t.fillStyle = "grey";
        t.fillRect(50, 30, 150,300); // 0,0 - vasak üleval tahvli nurk, 300-tahvli laius,250-tahvli kõrgus

        t.beginPath();
        t.strokeStyle = "black";
        t.fillStyle = "darkgrey";
        t.lineWidth = 1;
        t.arc(125, 80, 35,300, 2 * Math.PI, true); //x, y-keskpunkt, R
        t.stroke()
        t.fill()

        l.beginPath();
        l.strokeStyle = "black";
        l.fillStyle = "yellow";
        l.lineWidth = 1;
        l.arc(125, 180, 35,300, 2 * Math.PI, true); //x, y-keskpunkt, R
        l.stroke()
        l.fill()

        u.beginPath();
        u.strokeStyle = "black";
        u.fillStyle = "darkgrey";
        u.lineWidth = 1;
        u.arc(125, 280, 35,300, 2 * Math.PI, true); //x, y-keskpunkt, R
        u.stroke()
        u.fill()

    }
}
function mineNupp() {

    const valgusfloor = document.getElementById("valgusfloor");

    if (valgusfloor.getContext) {
        let t = valgusfloor.getContext("2d");
        let l = valgusfloor.getContext("2d");
        let u = valgusfloor.getContext("2d");
        t.fillStyle = "grey";
        t.fillRect(50, 30, 150,300); // 0,0 - vasak üleval tahvli nurk, 300-tahvli laius,250-tahvli kõrgus

        t.beginPath();
        t.strokeStyle = "black";
        t.fillStyle = "darkgrey";
        t.lineWidth = 1;
        t.arc(125, 80, 35,300, 2 * Math.PI, true); //x, y-keskpunkt, R
        t.stroke()
        t.fill()

        l.beginPath();
        l.strokeStyle = "black";
        l.fillStyle = "darkgrey";
        l.lineWidth = 1;
        l.arc(125, 180, 35,300, 2 * Math.PI, true); //x, y-keskpunkt, R
        l.stroke()
        l.fill()

        u.beginPath();
        u.strokeStyle = "black";
        u.fillStyle = "green";
        u.lineWidth = 1;
        u.arc(125, 280, 35,300, 2 * Math.PI, true); //x, y-keskpunkt, R
        u.stroke()
        u.fill()

    }
}
