//subjekti liides näitab ära mingid meetodi kuulajata haldamiseks
interface Subjekt{
    //lisame jälgija subjekti juurde
    attach(jälgija: Jälgija): void;
    //emaldame jälgija subjketi juurest
    detach(jälgija: Jälgija):void;
    //teavitusmeetod
    teavita(): void;

    
}
//Subjekti omab mingit tähtsat olekut ja teavitab jälgijad kui olek muutub
class KindelSubjekt implements Subjekt{
    //Lihtsuse mõttes on sisemine olek ainult üks number
    public olek: number;
    //Jälgijate nimekiri, päriselt hoitakse seda nimekirja tunduvalt detailsemalt
    //siin lihtsalt aray
    private jälgijad: Jälgija[] = [];
    //jälgjate haldusmeetodid
    public attach(jälgija: Jälgija): void{
        const onOlemas = this.jälgijad.includes(jälgija)
        if(onOlemas)
        {
            return console.log("Subjekti: Jälgija on juba registeeritud")
        }
        console.log("Subjek: uus jälgija!")
        this.jälgijad.push(jälgija)
}
public detach(jälgija: Jälgija): void {
    const jälgjaIndeks = this.jälgijad.indexOf(jälgija)
    if(jälgjaIndeks === 1){
        return console.log("Subjekt: Jälgjat ei leitud")
}
this.jälgijad.splice(jälgjaIndeks,1);
console.log("Subjekt: jälgija lahkus");
}
//teavitusmeetod mis kutsub esile uuendus jälgijatele
public teavita(): void{
    console.log("Subjekt: teavitan jälgijad")
    for(const jälgija of this.jälgijad)
    {
        jälgija.uuendaMind(this)
    }
}
//tavaliselt, tellimisloogika on ainult osa mida üks subjekt teha päriselt oskab
//subjektid tüüpiliselt hoiavad endas mingit kindlat tähtsat äriloogikat, see
//päästab valla teavitustele laine teavitusmeetodi abil , kui midagi tähtsat kas
//hakkab juhtuma või on juba juhtnud
public mingiÄriloogika(): void{
    console.log("Subjekt mingi värk läks baltas lahti")
    this.olek = Math.floor(Math.random()*(10+1))
    console.log(`Subjekt: mu olek on nüüd ${this.olek}`)
    this.teavita();

  
}
}
  //jälgija liides ütleb ära meetodi millega teda uuenda/teavitada..
  interface Jälgija{
    //uuenduste saamismeetod
    uuendaMind(subjekt: Subjekt): void;

}
//kindlad jälgijad reageerivad teavitustele mis tulevad subjektil kelle kuulajad nad on.
class KindelKuulajaA implements  Jälgija{
public uuendaMind(subjekt: Subjekt): void {
    if(subjekt instanceof KindelSubjekt && subjekt.olek < 3){
        console.log("KindelJälgija reageeris juhtumile")
    }
}
}