//siin asub mediaatori liides, Lennukid teavitad lennjuhtimistorni, selle asemel
//et suhelda otse üksteisega
interface Lennujuhtija{
    teavita(sender: object, event: string): void;
}

//lennujuhtmistornis on lennujuthijad, kes kordineerivad erinevaid lennukeid
class LennuJuhtimisTorn implements Lennujuhtija{
    private reisiLennuk: ReisiLennuk;
    private kaubaLennuk: KaubaLennuk;

    constructor(reisiLennuk: ReisiLennuk; kaubaLennuk: KaubaLennuk){
        this.reisiLennuk = reisiLennuk;
        this.reisiLennuk.seaLennujuhtija(this); 
        this.kaubaLennuk = kaubaLennuk;
        this.kaubaLennuk.seaLennujuhtija(this);
    }

    public teavita(sender: object, event: string): void{
        if(event === "KÜSIN_LUBA_ÕHKUTÕUSUKS"){
            console.log("Lennujuhtimistorn: Õhkutõusu luba palutud.")  
               this.kaubaLennuk.hoiaAsukohta();
               this.reisiLennuk.tõuseÕhku();
        }   
        if(event === "KÜSIN_LUBA_MAANDUMISEKS"){
            console.log("Lennujuhtimistorn: Maandumist luba palutud.")  
               this.kaubaLennuk.eemalduRajalt();
               this.reisiLennuk.maandu();
        }
   
    }
}

//baaskklass lennukite jaoks
class Lennuk {
    protected lennutorn!: LennuJuhtimisTorn

    protected seaLennujuhtija(lennutorn: LennuJuhtimisTorn): void{
        this.lennutorn = lennutorn;
    }

 
} 
  //reisijalennuk
    class ReisiLennuk extends Lennuk{
        public küsiÕhkutõusuLuba(): void{
            console.log("Reislennuk küsib õhkutõusuks")
            this.lennutorn.teavita(this,"KÜSIN_LUBA_ÕHKUTÕUSUKS")
        }   
        public tõuseÕhku(): void{
            console.log("Reislennuk tõuseb õhku!")
            
        }
        public eemalduRajalt(): void{
            console.log("Reislennuk eemaldub õhkutõusuks")
           
        }
    }
    //kaubalennuk
    class KaubaLennuk extends Lennuk{
        public küsiMaandumisLuba(): void{
            console.log("Kaubalennuk küsib maandumisluba")
            this.lennutorn.teavita(this, "KÜSIN_LUBA_MAANDUMISEKS")
        }
        public maandu(): void {
            console.log("Kaubalennuk maandub")
        }
        public hoiaAsukohta(): void {
            console.log("Kaubalennuk on paigal.")
        }
    }

    //kliendikood
    const reisiLennuk = new ReisiLennuk();
    const kaubaLennuk = new KaubaLennuk();

    const lennujuhtimistornis = new LennuJuhtimisTorn(reisiLennuk,kaubaLennuk);
    reisiLennuk.küsiÕhkutõusuLuba();
    console.log("")
    console.log("Kaubalennuk tahab maanduda:")
    kaubaLennuk.küsiMaandumisLuba();