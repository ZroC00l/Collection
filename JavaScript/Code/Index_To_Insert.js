function indexToIns(arr,num){
	arr2=[...arr];
	arr2.sort(function(a,b){return a-b;}); 
    arr=[];
    arr=[...arr2];

    for (var i=0;i<arr.length;i++){
    	if (arr[i] >= num) return i;
    }
    
    return arr.length;
}

console.log(indexToIns([40,50,60,1,41,19,20,5,0,39,49],10));