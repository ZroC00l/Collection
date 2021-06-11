/*This method takes in two parameters, an array and a function, the function parameter is used
as a tester to checker if the array argument has a number which is even, the function parameter takes in
a number from an array as an argument and does a modulus operation on it to check if its an even number or not
if the number is even the function will return that number and if the array has no even number the method will
return undefined*/
function truth_test(arr,func){
    let num=0;

    for(let i=0;i<arr.length;i++){
        num=arr[i];
        if(func(num)){
            return num;
        }
    }
    return undefined;
}

console.log(truth_test([1,2,3,4,5,6,7],num=>num%2===0));
console.log(truth_test([1,3,5,7,9,11,13,15],num=>num%2===0));
console.log(truth_test([23,33,55,60,77,83],num=>num%2===0));