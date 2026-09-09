//tingimuselause

if(true){//kui tingimuseavaldis on tõene, siis
    //tehakse mingi tegevus
}
else if (false) { //kontrollitakse järgmist avaldist, kui on tõene siis
    //tehakse alternatiivtegevus
}
else{
    //kui avaldis ei täitu tehakse mingit muud tegevust
}

const month: number = 9;
let monthName: string;
switch (month) {
    case 1:
        monthName = "jaanuar";
        break;
    case 5:
        monthName = "mai";
        break;
    case 9:
        monthName = "september";
        break;
    
     default:
        monthName = "unknown";
         break;

}
console.log(monthName)

let isThisOddOrEven = 9
let oddEvenBool = isThisOddOrEven % 2 == 0 ? "even" : "odd";
console.log(oddEvenBool)

//loogilised operatoorid
if (month && monthName){
    console.log("on mõlemad")
}
if(month || monthName){//or
console.log("on üks või teine")
}
if(!month) {//not

}