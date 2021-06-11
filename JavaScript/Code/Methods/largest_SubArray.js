/*This method will find the largest element in each subArray then
return the array of largest numbers in each subArray*/
function largest_subArray(arr){

    //We need a global temp array to hold the result
    let subArray=[];

    for(let i=0; i<arr.length;i++){
        let max_number=arr[i][0];
        for(let j=1;j<arr[i][j];j++){

            if(arr[i][j]>max_number){
                max_number=arr[i][j];
            }
        }
        subArray[i]=max_number;
    }

    return subArray;
}

console.log(largest_subArray([[1,2,3],[4,5,6],[7,8,9]]));