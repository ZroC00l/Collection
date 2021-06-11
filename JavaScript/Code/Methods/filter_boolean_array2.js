/*This method takes a single array parameter and filters it and return only the boolean values
inside the array*/

function return_boolean_array(array){
    return array.filter(Boolean);
}
console.log(return_boolean_array([1,2,undefined,false,true,NaN,0]));
console.log(return_boolean_array([null,0,false,NaN,"",36]));
console.log(return_boolean_array([1,2,undefined,false,true,NaN,0]));