/*This method takes in a string parameter and converts it to title case*/

function convert_TitleCase(str){

    if((str===null)||(str===''))
        return false;
    else
        str=str.toString();

    return str.replace(/\w\S*/g,function(str_letter){
       return str_letter.charAt(0).toUpperCase()+str_letter.substr(1).toLowerCase();
    });
}

console.log(convert_TitleCase("MY WORLD IS ROCKING ME"));
console.log(convert_TitleCase("tHiS iS mY TItlE CasE iN CoRrEct FORmaT"));
