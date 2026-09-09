//for tsükkel
for (let index = 0; index < 10; index++)
{
    console.log(index)
}
//while
let i: number = 0
while (i < 10){
    i++
    console.log(i)
}

//elementide logimine

const thisArray = [1,3,4,5,7,9]
for (let index = 0; index < thisArray.length; index++)
{
    console.log(thisArray[index])
}
//elememtide logimine foreachiga
for(let number of thisArray){
    console.log(number)
}

//paarisarvude summa
let paarisSumma = 0;
for (let ii =0; ii<10; ii++){
    if(ii% 2 == 0)
    {
        paarisSumma += ii;
    }
}

const arvuArray = [1,2,3,4,5,6,7,8,9,10]
let paarisSumma2 = arvuArray
.filter(nr => nr%2==0)
.reduce((aaa, bbb) => aaa+bbb);
console.log(paarisSumma2);

let paarisSumma3 = 0;
arvuArray.forEach(number =>{
if (number % 2 == 0){
    paarisSumma3 += number;
}
})
console.log(paarisSumma3);

//sorteerimine ilma korduseta
const mingidElemendid = [3,3,2,2,4,5,7,99]
const result: number[] = [];

for (let numba of mingidElemendid){
    if (!result.includes(numba)){
        result.push(numba)
    }
}
console.log(result.sort((aaaa,bbbb) => aaaa-bbbb))

const unikaalsedArvud = new Set(mingidElemendid)
const unikaalneArray = Array.from(unikaalsedArvud);
console.log(unikaalneArray.sort((aaaaa,bbbbb) => aaaaa - bbbbb));
