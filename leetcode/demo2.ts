var nextPermutation = function(nums) {
    const len = nums.length
    const lastNum = len - 1
    let i = lastNum
    while((nums[i]>=nums[i+1] || i === len - 1) && i > 0){
        i--
    }
    let j = lastNum
    while(nums[j] <= nums[i] && j>0){
        j--
    }
    console.log(i,j)
    swap(nums,i,j) // 交换元素顺序
    reverse(nums,(i===0 && j===0)?0:i+1, len - 1)
    return nums
};
function swap(arr,i,j){
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}
function reverse(arr, start, end){
    const len = (end-start)/2+start
    console.log(start,end)
    while(start<len){
        swap(arr,start,end)
        start++
        end--
    }
}


var longestValidParentheses = function(s) {
    const stack = [-1] // 未被匹配的右括号下标
    let maxLen = 0
    for(let i=0; i<s.length; i++){
        const letter = s.charAt(i)
        if(letter === '('){
            stack.push(i)
        }else{
            if(stack.length){
                stack.pop()
                if(stack.length){
                    const stackTop = stack[stack.length-1]
                    console.log(stackTop,i, stack)
                    maxLen = Math.max(maxLen, i - stackTop) // 长度为 i - stackTop
                }else{
                    stack.push(i) // 栈顶元素为最后一个又括号
                }
            }
        }
    }
    return maxLen
}
