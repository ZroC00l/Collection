/*This method takes in two parameters one a string and the other number,
the method then repeats the string the specified number of times depending
on the number argument, if its zero or negative the method should return an empty string*/

function repeatString(str,number){
    let returnStr="";
    if(number<=0)
        return "";
    else{
        for(let i=0;i<number;i++){
            returnStr+=str;
        }

    }
    return returnStr;

}

console.log(repeatString("UncleGroovey_",4));
console.log(repeatString("Code",20));
console.log(repeatString("+",5));
console.log(repeatString("*",4));
