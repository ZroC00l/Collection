function chunkyArrayInGroups(arr,size){

   var newArray= [];


   for(var i=0; i<arr.length;i+=size){

    newArray.push(arr.slice(i,i+size));

    }
    arr=[...newArray];




    return arr;


} 


console.log(chunkyArrayInGroups([0,1,2,3,4,5],3));
console.log(chunkyArrayInGroups([0,1,2,3,4,5,6,7,8,9,10],2));
console.log(chunkyArrayInGroups([10,20,30,40,50,60,80,100],2));