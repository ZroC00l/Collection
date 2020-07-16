function add(array,n){
    var total=0;
    if(n<0){
         return 0;
    }else{
        while(n==0 || n>0){
            total+=array[n];
            n--;
        }
        return total;
    }
}
var arr=[2,4,6,8,10];
console.log(add(arr,3));