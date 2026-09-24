//FlyWeighti klassis sisaldab osa puu seisundist. Need väljad hoiavad väärtusi
//mis on unikaalsed iga üksiku puu jaoks. Näiteks ei leia siit puu kordinaate,aga
//puu tekstsuur ja värv, mida jagatakse mitme puu vahel hoitakse tavaliselt
//siin klassis. Kun see andmemaht on tavaliselt üsna suur oleks raiskamine hoida
//iga puu juures seda pinnavormi ja värvi individuualselt eraldi. Selle asemel me saame
//kõik korduvad andmed eraldada ühte jagatud klassi, kus hoitakse neid andmeid
//ühekordselt  mida kõik teised puu-objektid saavad viidata. see hoiab kokku mälumahtu
class PuuLiik{
    nimi: string;
    värv: string;
    pinnavorm: ImageBitmap;

    constructor(nimi:string, värv:string, pinnavorm: ImageBitmap){
        this.nimi = nimi,
        this.värv = värv,
        this.pinnavorm = pinnavorm;
    }
    public draw(x: number, y:number, canvas:HTMLCanvasElement)
    {
        const ctx = canvas.getContext("2d");
        if(ctx === null){
            return;
        }
        ctx.fillStyle = this.color;

        ctx.fillRect(x-3,y,6,20) //tüvi

        ctx.beginPath();
        ctx.arc(x,y-10,15,0, Math.PI * 2)
        ctx.fill();

        console.log('joonistan ${this.nimi} puud')
    }
}
//Fkyweighti tehas otsustab kas taaskasutada olemasolevat flyweighti või teha uus objekt
//teha uus objekt, näiteks kui on kaks eri liiki puud ja nende pinnavorm erineb.
class PuuVabrik {
    static puuLiigid : PuuLiik[] = []

    public static puuTüüp(nimi: string, värv: string, pinnavorm: ImageBitmap): void
    {
       let tüüp = PuuVabrik.puuLiigid.find(p => p.nimi == nimi && p.värv == värv && p.pinnavorm == pinnavorm)
        if(tüüp == null){
            tüüp = new PuuLiik(nimi,värv,pinnavorm)
            PuuVabrik.puuLiigid.push(tüüp)
        }
    }
}
//Objekt ise hoiab oma kontekstist ainult talle unikaalset puu oleks muutjaid.
//programmis võib olla neid miljardeid kuna nad on väikese mäluruumi tarbega
//antud juhul ainult üks viiteväli ja koordinadid

class Puu {
    x:number;
    y:number;
    tüüp: PuuLiik;

    constructor(x:number, y:number, tüüp : PuuLiik){
        this.x = x
        this.y = y
        this.tüüp = tüüp;

    }
    draw(canvas: HTMLCanvasElement): void{
        this.tüüp.draw(this.x, this.y,canvas)
    }
}

//Puu ja Mets-a klassid on flyweightide kliendid, neid saab kokku liita, kui
//puu klassi enam edasi ei arendata

class Mets{
    puudMetsas: Puu[]

    public istutaPuu(x:number, y:number, nimi:string, värv: string, pinnavorm: ImageBitmap):void
    {
        let tüüp: PuuLiik = PuuVabrik.puuTüüp(nimi,värv,pinnavorm)
        let puu = new Puu(x,y,tüüp)
        this.puudMetsas.push(puu)
    }
       static draw(canvas: HTMLCanvasElement): void{
            this.puudMetsas.forEach(tree => {tree.draw(canvas)})
        }
    
}
