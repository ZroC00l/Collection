/*This method takes a single array parameter and filters it and return only the boolean values
inside the array*/

function boolean_array(array){

    let tempArray=[];

    for(let i=0;i<array.length;i++){
        if(array[i]){
            tempArray.push(array[i]);
        }
    }
    return tempArray;
}

console.log(boolean_array([1,2,undefined,false,true,NaN,0]));
console.log(boolean_array([null,0,false,NaN,"",36]));
console.log(boolean_array([1,2,undefined,false,true,NaN,0]));