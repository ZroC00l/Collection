/*This method is used to convert from celsius to fahrenheit*/

function celsiusToFahrenheit(celsius){

    let fahrenheit=0;
    fahrenheit = (celsius*(9/5))+32;

    return fahrenheit;
}

console.log(celsiusToFahrenheit(29));
