/*This method takes in 3 parameters first two are arrays and the third is the index at
which to splice the array, the method will copy the contents of array 1 into array 2 based on
the third argument*/

function splice_array(array1,array2,index){

       array2.splice(index,0,...array1);
       return array2;
}


console.log(splice_array(['spliced the array'],[1,2,3,4,5],3));