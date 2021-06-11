/*This method finds the factorial of any number passed as the argument
using a for loop*/

function factorial(number){

    if(number===0){
        return 1;
    }else{
        for(let i=(number-1);i>0;i--){
            number*=i;
        }
    }
    return number;
}
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(15));
console.log(factorial(20));