/*This method takes in 3 parameters first two are arrays and the third is the index at
which to splice the array, the method will copy the contents of array 1 into array 2 based on
the third argument, array2 should still have its contents in tact after splicing */

function splice_array(array1,array2,index){

       let tempArray=array2.slice();/*copies the entire contents of array2 into a temporary array,
                                     this is so the contents of array2 stay the same after splicing*/
       for(let i=0;i<array1.length;i++){
             tempArray.splice(index,0,array1[i]);
             index++;
       }

       return tempArray;
}


console.log(splice_array(['spliced the array'],[1,2,3,4,5],3));