class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}
        const array = Array.from({length: nums.length + 1}, () => [])
        const result = []

        for(const num of nums){
            map[num] = (map[num] || 0) + 1
        }

        for(const [i, v] of Object.entries(map)){
            array[v].push(i)
        }

        for(let i=array.length - 1; i >= 0; i--){
            for(const item of array[i]){
                result.push(item)

                if(result.length === k){
                    return result
                }
            }
        }


    }
  
}
