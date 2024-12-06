

const customMap= function(arr,fn){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        ans[i]=fn(arr[i],i);
    }
    return ans;
}

const arr=[2,3,4];

const result=customMap(arr,function plusOne(n){
    return n+1;
})

console.log(result);