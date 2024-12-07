
const filterElement = function(arr,fn){
    let filteredArray=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}
const arr=[0,10,20,30];
const result=filterElement(arr,function(n){
    return n>10;
});

console.log(result);