/*This class converts between Fahrenheit and Celsius using getters
and setters*/

class Thermostat{
    constructor(temperature_argument){
        this._temperature=temperature_argument;
    }
    //This getter function should convert from fahrenheit to celsius
    get temperature(){
        return 5/9*(this._temperature-32);
    }
    //This setter function converts from celsius back to fahrenheit
    set temperature(temperature_argument){
        this._temperature=(temperature_argument*9.0)/5+32;
    }
}

const the_temperature= new Thermostat(85);
//Using the getter function to return the temperature in celsius
let changed_temp=the_temperature.temperature;
console.log("The temperature in celsius: "+changed_temp);

//Using the setter function to return the temperature in fahrenheit
the_temperature.temperature=85;
changed_temp=the_temperature.temperature;
console.log("The temperature in fahrenheit: "+changed_temp);