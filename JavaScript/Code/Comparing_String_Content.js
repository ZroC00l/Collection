function mutation(arr){
//Convert each of the array strings to lower case and store each in a variable
var string_To_Be_Compared=arr[0].toLowerCase();
var string_To_Search=arr[1].toLowerCase();

//secondly compare the arr's second index value's characters to the the first array argument value
for(var i=0;i<string_To_Search.length;i++){
    if(string_To_Be_Compared.indexOf(string_To_Search[i])<0)
        return false;
}
return true;

}
console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "ello"]));
console.log(mutation(["attack on titan", "ATtacK on TiTAn"]));
