class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const previousSet = new Map()

        for(let i=0; i<nums.length; i++){
            const diff = target - nums[i]
            if(previousSet.has(diff)){
                return [previousSet.get(diff), i]
            }
            previousSet.set(nums[i], i)
        }
    }
}
