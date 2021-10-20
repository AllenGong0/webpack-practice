var twoSum = function(nums, target) {
    const arr = []
    // for(let i=0; i<nums.length-1; i++){
    //     for(let j= i+1; j<nums.length; j++){
    //         if(nums[i]+nums[j]===target){
    //             arr.push(i,j)
    //         }
    //     }
    // }
    // return arr
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])){ // target - x 在map中存在
            return [map.get(target - nums[i]),i]
        }
        map.set(nums[i],i)
    }
    return []
};
var arr = [2,7,11,15]
console.log(twoSum(arr,9))