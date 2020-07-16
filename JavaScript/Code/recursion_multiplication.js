function multiply(arr,n){
    if(n<=0){
        return 1;
    }else{
        return (multiply(arr,n-1)*arr[n-1]);
    }
}

var array= [2,4,6,8,10];
console.log(multiply(array,2));