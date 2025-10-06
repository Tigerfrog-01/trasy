
function arvuta(kogus, hind){
    return(kogus*hind).toFixed(2)
    //toFixed - ümardab 2 numbri peale koma
}
const pilt1Hind=271;
const pilt2Hind=50;
const pilt3Hind=340;
const pilt4Hind=67;
const pilt5Hind=616;

function arvutaPiltHind() {
    let vastus2 = document.getElementById("vastus2");
    let tk = document.getElementById("tk");
    let v1=document.getElementById("v1");
    let v2=document.getElementById("v2");
    let v3=document.getElementById("v3");
    let v4=document.getElementById("v4");
    let v5=document.getElementById("v5");

    if (v1.checked) {
        vastus2.innerHTML = arvuta(tk.value, pilt1Hind) +" euro";
        pilt.src="images/Napoleon"

    } else if (v2.checked) {
        vastus2.innerHTML = arvuta(tk.value, pilt2Hind) +" euro";
        pilt.src="images/Josephine"
    } else if (v3.checked) {
        vastus2.innerHTML = arvuta(tk.value, pilt3Hind) +" euro";
        pilt.src="images/Alexander"
    } else if (v4.checked) {
        vastus2.innerHTML = arvuta(tk.value, pilt4Hind) +" euro";
        pilt.src="images/Frederick"
    } else if (v5.checked) {
        vastus2.innerHTML = arvuta(tk.value, pilt5Hind) + " euro";
        pilt.src="images/Joan"
    }
    else {
        vastus2.innerHTML = "Palun vali toode!";
    }

}


