/*this method takes in a string paramenter and returns it in reverse*/

function reverseString(str){

    let tempStr="";

    for(let i=(str.length-1);i>=0;i--){
        tempStr+=str[i];
    }
    str=tempStr;
    return str;

}

console.log((reverseString("hello")));
console.log((reverseString("hello in reverse")));
console.log((reverseString("esrever")));