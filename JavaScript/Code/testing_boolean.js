/*This method takes in a single parameter and checks if the parameter
is of type boolean, it returns true if the parameter is a boolean type otherwise it
returns false*/

function check_If_Boolean(parameter){
    return typeof parameter  === "boolean";
}

console.log(check_If_Boolean("Yes"));
console.log(check_If_Boolean("true"));
console.log(check_If_Boolean(true));
console.log(check_If_Boolean("NaN"));
console.log(check_If_Boolean("null"));
console.log(check_If_Boolean(3500));
console.log(check_If_Boolean(234));
console.log(check_If_Boolean("undefined"));
console.log(check_If_Boolean("false"));
console.log(check_If_Boolean(false));
