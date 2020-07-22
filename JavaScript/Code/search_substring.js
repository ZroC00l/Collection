/*This method takes in two parameters one a string the other a substring
it return true if the string ends with the substring argument or false if not*/

function search_substring(str,substring){

    let toStart= str.lastIndexOf(substring);
    let temp_substring= str.substring(toStart,str.length);

    if(toStart===-1)
        return false;
     else if(toStart>=0){
        if(temp_substring===substring){
            return true;
        }else{
            return false;
        }

     }

}

console.log(search_substring("Congratulation","on"));
console.log(search_substring("Mannicle","la"));
console.log(search_substring("Electricity","city"));
