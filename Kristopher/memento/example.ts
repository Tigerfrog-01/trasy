//originaator hoiab endas mingit tähtsat olekut, mis võib aja jooksul muutuda
//Ta defineerib ära meetodi millega saab salvestada team sisemist olekut memento 
//sees ja teist meetodit mis seda seisundit taastab mementost.
class Originaator{
    //lihtsuse mõttes on kogu seisund väljendatav ühe väljaga mis on string.
    private sisemineOlek: string;

    constructor(sisemineOlek: string){
        this.sisemineOlek = sisemineOlek;
        console.log(`Originaator: Minu olek on: ${sisemineOlek}`)
    }
    //Originaatori äriloogika võib mõjutada selle sisemist olekut, seega klient peaks
    //tegema ühe varukoopia sisemisest olekust, enne äriloogika meetotide käivitamist.
    //antud juhul teeb seda meil "salvesta()" meetod

    public teeMidagi(): void{
        console.log("Originaator: Toimub tähtis tegevus")
        this.sisemineOlek = this.genereeriSõne(30);
        console.log(`Originaator: Minu sisemise olek on muutunud: ${this.sisemineOlek}`)
    }
    private genereeriSõne(pikkus: number = 10): string{
        const tähestik = "abcdefghijklmnopqrstuvwxyzõäöüABCDEFGHIJKLMNOPQRSTUVWXYZÕÄÖÜ"
        return Array.apply(null,{pikkus})
        .map(()=> tähestik.charAt(
        Math.floor(Math.random()*tähestik.length)
     )).join('')
    }

    //salvestab hetkeoleku memento sisse.
    public salvesta(): Memento{
        return new KindelMemento(this.sisemineOlek)
    }
    //Taastab originaatori hetkeoleku memento seest.
    public taasta(memento: Memento): void{
        this.sisemineOlek = memento.saaOlek();
        console.log(`Originaator: Mu sisemine olek on muutunud ${this.sisemineOlek}`)
    }
}
//Memento liides annab viisi saada kätte memento metaandmed nagu selle tekitamise ajahetk või selle nime.Aga ta ei paljasta originaatori sisemsit olekut ennast.
interface Memento {
    saaOlek(): string;
    saaNimi(): string;
    saaAeg(): string;
}
//kindel  memento sisaldab endas tartistut originaatori oleku salvestamiseks
class KindelMemento implements Memento{
    private sisemineOlek: string;
    private kuupäev: string;
    constructor(sisemineOlek: string){
        this.sisemineOlek = sisemineOlek;
        this.kuupäev = new Date().toISOString().slice(0,19).replace("T", "")
    }
    //Originaator kasutab seda meetodit oma sisemise oleku taastamiseks
    public saaOlek(): string{
        return this.kuupäev;
    }
    public saaNimi(): string{
        return(`${this.kuupäev} / ${this.sisemineOlek.substring(0,9)}`)
    }
}
//hoolekandja klass ei sõltu KindelMemento klassist, seega ei tal juurdepääsu 
//originaatori olekule, mida mememnto sees hoitakse. see töötab kõikide Mementodega 
//läbi memento baasliidese.
class HooleKandja{
    private mementod: Memento[] = [];
    private originaator: Originaator;

    constructor(originaator: Originaator){
        this.originaator = originaator
    }
    
    public varukoopia(): void{
        console.log("Teen vaurkoopia originaatori olekust")
        this.mementod.push(this.originaator.salvesta())
    }
    public tagasivõtt(): void{
        if(!this.mementod.length){
            return;
        }
        const memento = this.mementod.pop()!;
        console.log(`Hoolekandja: Taastan oleku ${memento?.saaNimi}`)
    }
    public kuvaAjalugu(): void{
        console.log("Hoolekandja: siin on mementode nimekiri")
        for (const memento of this.mementod){
            console.log(memento.saaNimi())
        }
    }
}
//kliendikood
const originaator = new Originaator("fucked");
const hoolekandja = new HooleKandja(originaator);

hoolekandja.varukoopia();
originaator.teeMidagi();
for (let index = 0; index < 3; index++)
     {
        hoolekandja.varukoopia();
        originaator.teeMidagi();
     }

     console.log("")
     hoolekandja.kuvaAjalugu();

     console.log("Klient: võta üks tagasi")
     hoolekandja.tagasivõtt();

     console.log("Klient võta veel üks tagasi")
     hoolekandja.tagasivõtt();
