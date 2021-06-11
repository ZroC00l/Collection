/*This is a recursive function that counts down without
using any loops or reverse built in function*/
function countdown(n){

    if(n<1){
      return [];
    }else{
        const array = countdown(n-1);
        array.unshift(n);
        return array;

    }


}

console.log(countdown(20));