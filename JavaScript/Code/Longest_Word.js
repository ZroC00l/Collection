/*This method will find the longest word in a string*/
function Longest_String(str){

    let subArray= str.split(" ");
    /* the string will be split according to spaces inbetween the words in the string and
    stored in to a new array with the identifier subArray*/
    let length=0;

    /* str= My Name is Uncle Groovey
    subArray after the split is applied subArray=[My,Name,is,Uncle,Groovey]
    subArray[i].length is looping through each index of the subArray while temporarily
    storing the the length of each array index e.g subArray[0].length is equal to "My" whose length is
    2 so only if the SubArray[i].length is greater than the previously set length will the length be updated
    with the new length*/
    for(let i=0;i<subArray.length;i++){
         //console.log(subArray[i]); will display the each index of subArray
        if(subArray[i].length>length){
            length=subArray[i].length;
        }

    }
    return length;
}

console.log(Longest_String("My name is Uncle Groovey"));