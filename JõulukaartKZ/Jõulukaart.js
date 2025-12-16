


function kolmnurk()
//määrame tahvli
{
    const joulukaart = document.getElementById("joulukaart");
    if (joulukaart.getContext) {
        let a = joulukaart.getContext("2d"); //anname tahvlinimi on t
        let b = joulukaart.getContext("2d");
        let c = joulukaart.getContext("2d");
        let d = joulukaart.getContext("2d");

        d.fillStyle = "brown";
        d.fillRect(145,500,30,80);

        //joon
        a.beginPath();
        a.strokeStyle = "#39955C";
        a.fillStyle = "#39955C";
        a.lineWidth = 1;
        a.moveTo(150 + 10, 80 + 200); //alguspunkt
        a.lineTo(80 + 10, 220 + 200);
        a.lineTo(220 + 10, 220 + 200);
        a.stroke();
        a.fill();

        b.beginPath();
        b.strokeStyle = "#39955C";
        b.fillStyle = "#39955C";
        b.lineWidth = 1;
        b.moveTo(150 + 10, 80 + 250); //alguspunkt
        b.lineTo(80 + 10, 220 + 250);
        b.lineTo(220 + 10, 220 + 250);
        b.stroke();
        b.fill();


        c.beginPath();
        c.strokeStyle = "#39955C";
        c.fillStyle = "#39955C";
        c.lineWidth = 1;
        c.moveTo(150 + 10, 80 + 300); //alguspunkt
        c.lineTo(80 + 10, 220 + 300);
        c.lineTo(220 + 10, 220 + 300);
        c.stroke();
        c.fill();


    }
}
function day()
{
    const joulukaart = document.getElementById("joulukaart");
    let t = joulukaart.getContext("2d");
    let a = joulukaart.getContext("2d");

    t.fillStyle = "#5AA8D8";
    t.fillRect(0,0,1000,300 + 5000);

    //ring
    a.beginPath();
    a.strokeStyle = "yellow";
    a.fillStyle = "yellow";
    a.lineWidth = 1;
    a.arc(100, 100, 50, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    a.stroke()
    a.fill()



}

function night()
{
    const joulukaart = document.getElementById("joulukaart");
    let t = joulukaart.getContext("2d");
    let a = joulukaart.getContext("2d");

    t.fillStyle = "#273239";
    t.fillRect(0,0,1000,300 + 5000);

    a.beginPath();
    a.strokeStyle = "#EBE3C3";
    a.fillStyle = "#EBE3C3";
    a.lineWidth = 1;
    a.arc(100, 100, 50, 0, 2 * Math.PI, true); //x, y-keskpunkt, R
    a.stroke()
    a.fill()


}
function grass()
{
    const joulukaart = document.getElementById("joulukaart");
    let t = joulukaart.getContext("2d");

    t.fillStyle = "#1C8544";
    t.fillRect(0,500,500,300);

}

function snow()
{
    const joulukaart = document.getElementById("joulukaart");
    let t = joulukaart.getContext("2d");

    t.fillStyle = "white";
    t.fillRect(0,500,500,300);

}
function Jouluehe()
{
        const joulukaart = document.getElementById("joulukaart");
        let ctx = joulukaart.getContext("2d");

        // Star properties
        let centerX = 160; // top triangle tip X
        let centerY = 270; // slightly above the tip
        let spikes = 5;
        let outerRadius = 20; // adjust size if needed
        let innerRadius = 10;

        let rot = Math.PI / 2 * 3;
        let x = centerX;
        let y = centerY;
        let step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY - outerRadius);
        for (let i = 0; i < spikes; i++) {
            x = centerX + Math.cos(rot) * outerRadius;
            y = centerY + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;

            x = centerX + Math.cos(rot) * innerRadius;
            y = centerY + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }
        ctx.lineTo(centerX, centerY - outerRadius);
        ctx.closePath();
        ctx.fillStyle = "#BBB761";
        ctx.fill();
        ctx.strokeStyle = "#BBB761";
        ctx.stroke();
    }
let snowflakes = []; // array to store snowflakes

function createSnow(num) {
    const joulukaart = document.getElementById("joulukaart");
    let width = joulukaart.width;
    let height = joulukaart.height;

    snowflakes = [];
    for (let i = 0; i < num; i++) {
        snowflakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3 + 2,
            speed: Math.random() * 1 + 0.5
        });
    }
}

function snowFallNight() {
    const joulukaart = document.getElementById("joulukaart");
    let ctx = joulukaart.getContext("2d");

    ctx.clearRect(0, 0, joulukaart.width, joulukaart.height); // clear canvas

    // draw existing scene (tree, star, grass, etc.)
    night();
    grass();
    kolmnurk();
    Jouluehe();


    // draw snowflakes
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        ctx.moveTo(s.x, s.y);
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    }
    ctx.fill();

    // update snowflake positions
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        s.y += s.speed;
        if (s.y > joulukaart.height) {
            s.y = 0; // reset to top
            s.x = Math.random() * joulukaart.width;
        }
    }

    requestAnimationFrame(snowFall); // loop animation
}

function snowFallDay() {
    const joulukaart = document.getElementById("joulukaart");
    let ctx = joulukaart.getContext("2d");

    ctx.clearRect(0, 0, joulukaart.width, joulukaart.height); // clear canvas

    // draw existing scene (tree, star, grass, etc.)
    night();
    grass();
    kolmnurk();
    Jouluehe();


    // draw snowflakes
    ctx.fillStyle = "white";
    ctx.beginPath();
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        ctx.moveTo(s.x, s.y);
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    }
    ctx.fill();

    // update snowflake positions
    for (let i = 0; i < snowflakes.length; i++) {
        let s = snowflakes[i];
        s.y += s.speed;
        if (s.y > joulukaart.height) {
            s.y = 0; // reset to top
            s.x = Math.random() * joulukaart.width;
        }
    }

    requestAnimationFrame(snowFall); // loop animation
}

// initialize snow and start animation
createSnow(100); // 100 snowflakes
snowFall();

