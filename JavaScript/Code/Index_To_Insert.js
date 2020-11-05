function indexToIns(arr){
	arr2=[...arr];
	arr2.sort(function(a,b){return a-b;}); 
    arr=[];
    arr=[...arr2];

    return arr;
}

console.log(indexToIns([40,50,60,1,41,19,20,5,0,39,49]));