let Raamat = {
    //omadused
    pealkiri: "Kalevipoeg",
    autor: "Friedrich Reinhold Kreutzwald",
    aasta: 2022,
    Kirjeldus: ["Mütloogia", "Draama", "Pikk"],



    //meetodid
    taisnimi() {
        return this.pealkiri + ", " + this.autor;
    },

    kuvaOmadused() {
        return this.Kirjeldus.join(", ")
    }

};



console.log(Raamat);


let vastus = document.getElementById("vastus");
let vastus1 = document.getElementById("vastus1");

vastus.innerHTML = "<b>Raamat:</b> " + Raamat.taisnimi()
vastus1.innerHTML = "<b>Omadused</b> "+ Raamat.kuvaOmadused();


let Raamatud = [
    {Nimi: 'Esmaspäev',Autor: 'Robert', aasta: 2022},
    {Nimi: 'Teisipäev',Autor: 'Alex', aasta: 2017},
    {Nimi: 'Kolmapäev',Autor: 'Toomas', aasta: 2019},
    {Nimi: 'Neljapäev',Autor: 'Henry', aasta: 2026},
    {Nimi: 'Reede',Autor: 'Alferd', aasta: 2015}
];

let tulemus=""
Raamatud.forEach((Raamat2) => {
    tulemus +=` <br>
    Raamat: ${Raamat2.Nimi}
    Autor: ${Raamat2.Autor}
    Aasta: ${Raamat2.aasta}
`;

});
let vastus3 = document.getElementById("vastus3");
vastus3.innerHTML = tulemus;
console.log(Raamatud);

function kuvakoik()
{

    let tulemus=""
    Raamatud.forEach(r => {
        tulemus += ` <br>
    Raamat: ${r.Nimi}
    Autor: ${r.Autor}
    Aasta: ${r.aasta}
    `;
    });

document.getElementById("raamatud").innerHTML = tulemus;
}



function Lisa()
{
    let nimi = document.getElementById("nimi").value.trim();
    let autor = document.getElementById("autor").value.trim();
    let aasta = document.getElementById("aasta").value.trim();

    if(nimi == "" || autor == "" || aasta == "")
    {
        alert("Täida palun väljad");
        return;
    }

    Raamatud.push({Nimi : nimi, Autor: autor, aasta: Number(aasta)});
    kuvakoik();

    document.getElementById("nimi").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("aasta").value = "";

}
kuvakoik();
