//Remove Duplicates from Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let length = nums.length;

    for(let i = 0; i < length; i++){
        let prev = nums[i];
        let next = nums[i+1];
        if(next === prev){
            nums.splice(i,1);
            length--;
            i--;
        }
    }
    return nums.length;
};