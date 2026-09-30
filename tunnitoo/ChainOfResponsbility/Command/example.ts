// Käsu liides ehk command interface
interface Command {
    execute(): void;
    undo(): void;
}

// Vastuvõtja ehk reciever, mingisugune seade mis reealselt nagu töötab
class SmartLight {
    private location: string;
    private isOn: boolean = false;

    constructor(location: string) {
        this.location = location;
    }

    public turnOn(): void {
        this.isOn = true;
        console.log(`[Nutikodu] Valgusti asukohas '${this.location}' lülitati SISSE.`);
    }

    public turnOff(): void {
        this.isOn = false;
        console.log(`[Nutikodu] Valgusti asukohas '${this.location}' lülitati VÄLJA.`);
    }
}

//konkreetsed käsud ehk concrete commands

//käsk valgusti sisselülitamiseks
class LightOnCommand implements Command {
    private light: SmartLight;

    constructor(light: SmartLight) {
        this.light = light;
    }

    public execute(): void {
        this.light.turnOn();
    }

    public undo(): void {
        this.light.turnOff();
    }
}

//käsk selle valgusti väljalülitamiseks
class LightOffCommand implements Command {
    private light: SmartLight;

    constructor(light: SmartLight) {
        this.light = light;
    }

    public execute(): void {
        this.light.turnOff();
    }

    public undo(): void {
        this.light.turnOn();
    }
}

//kutsuja ehk invoker mis võib olla puldi nupp või juhtpaneel sellel
class RemoteControl {
    private commandHistory: Command[] = [];

    // see töötab käsu täitmisel ja ajaloo salvestamisega
    public submit(command: Command): void {
        command.execute();
        this.commandHistory.push(command);
    }

    //võtab viimase tegu tagasi
    public undoLastAction(): void {
        const lastCommand = this.commandHistory.pop();
        if (lastCommand) {
            console.log("[Pult] Võtan viimase käsu tagasi...");
            lastCommand.undo();
        } else {
            console.log("[Pult] Puuduvad käsud, mida tagasi võtta.");
        }
    }
}

//kliendikood ehk client code
function runCommandExample(): void {
    const livingRoomLight = new SmartLight("Elutuba");
    
  //loovad käskude objektid
    const lightOn = new LightOnCommand(livingRoomLight);
    const lightOff = new LightOffCommand(livingRoomLight);

    const remote = new RemoteControl();

    //lülitame sisse ja välja valgusti
    remote.submit(lightOn);
    remote.submit(lightOff);

    //võtame viimase käsu tagasi ehk lülitub tagasi
    remote.undoLastAction();
}

runCommandExample();