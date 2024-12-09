const reduce = function(nums,int,fn){
    
    let res=init;
    
    for(let i=0;i<nums.length;i++){
        res=fn(res,nums[i]);
    }
    return res;
}

const nums=[1,2,3,4];
let init=0;

const result=reduce(nums,init,function(acc,curr){
    return acc+curr;
})

console.log(result);