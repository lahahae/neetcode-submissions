class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}

        for(let num of nums){
            if(map[num]){
                map[num]++
            } else {
                map[num] = 1
            }
        }


        const sortedArray = Object.entries(map).sort((a,b) => b[1] - a[1])    

        return sortedArray.slice(0,k).map(a => a[0])
    }
  
}
