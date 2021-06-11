/*This Method takes in two parameters a string and length, if the string length is greater than
the length argument, the string is truncated according to the length argument then concatenated
by ellipses in the end */
function truncate_String(str,length){

    let newStr="";
    let endingStr="...";
    if(str.length>length){
        for(let i=0;i<length;i++){
            newStr = newStr+str[i];
        }
        str= newStr.trim();
        endingStr=endingStr.trim();
        str=str+endingStr;

        return str;
    }else{
        return str;
    }


}

console.log(truncate_String("Hello World!",5));
console.log(truncate_String("Javascript is fun to learn ",15));
