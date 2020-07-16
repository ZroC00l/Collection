function add(arr,n){

    if(n<=0){
        return 0;
    }else{
        return(add(arr,n-1)+arr[n-1]);
    }

}

var array=[1,2,3,4,5];
console.log(add(array,5));