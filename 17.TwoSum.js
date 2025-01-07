
const twoSum=function(nums,target){
    let hash={};
    for(let i=0;i<nums.length;i++){
        let complement = target - nums[i];
        if(complement in hash){
            return [hash[complement],i];
        
        };
        hash[nums[i]]=i;
    }
}

const nums=[2,8,11,1,5];

const target=9;

const result=twoSum(nums,target);
console.log(result);