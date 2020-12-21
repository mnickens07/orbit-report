export class Satellite {
        name: string;
        orbitType: string;
        type: string;
        operational: boolean;
        launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name=name;
        this.type=type;
        this.launchDate=launchDate;
        this.orbitType=orbitType;
        this.operational=operational;
           
    }

    shouldShowWarning(){ 
        
        if (this.type ==='Space Debris'){
            return true;
        } else {
            return false;
        }
        
    }
    zebraStripesOrg(){
        if (this.name==="Sirius 1" || this.name==="SNAP 10-A" || this.name==="Envisat" || this.name.includes("Morelos") || this.name==="ISS"){
            return true;
        } else {
            return false;
        }
    }
        
}
