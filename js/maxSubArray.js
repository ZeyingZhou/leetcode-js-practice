/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let maxsum = nums[0];
    let running = nums[0]
    for(let i = 1; i < nums.length; ++i){
        let current = nums[i];
        let nextrunning = running + current;
        maxsum = Math.max(maxsum, running);
        if(current > nextrunning){
            running = current;
        }
        else {
            running = nextrunning;
        }
    }
    maxsum = Math.max(maxsum, running);
    return maxsum;
};