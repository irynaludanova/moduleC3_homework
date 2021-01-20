class ElectricalAppliance{
  constructor(name){
  this.name = name;
  this.isPlugged = false
}

  plugIn(){
    console.log(`${this.name} is plugged! It takes ${this.power} kwt`); # строка, потенциально приводящая к ReferenceError, если вдруг где-то забудете указать 'this.power'
    this.isPlugged = true;
 }

 unPlug() {
    console.log(`${this.name}  is unplugged!`);
    this.isPlugged = false;
 }
  
 
}

class largeHomeAppliance extends ElectricalAppliance{
  constructor(name, mfr, power, isPlugger){
    super(name);    
    this.mfr = mfr;
    this.power = power;    
    this.isPlugged = true;
  }
}

class smallHouseholdAppliance extends ElectricalAppliance{
   constructor(name, mfr, power, applicationArea, isPlugger){
    super(name);
    this.mfr = mfr;
    this.power = power;
    this.applicationArea = applicationArea;   
    this.isPlugged = false;
  }
}

class electronics extends ElectricalAppliance{
  constructor(name, mfr, power, applicationArea, isPlugger){
    super(name);
    this.mfr = mfr;
    this.power = power;
    this.applicationArea = applicationArea;   
    this.isPlugged = false;
  }
}


const fridge = new largeHomeAppliance("Fridge", "LG", 1.2);

const mixer = new smallHouseholdAppliance("Mixer", "Kenwood", 0.45, "kitchen");

const tvSet = new electronics("TV set", "Samsung", 0.59, "living room");
                                          
fridge.unPlug();
mixer.plugIn();
tvSet.unPlug();

console.log(fridge)
console.log(mixer)
console.log(tvSet)
