class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {}
        for(const str of strs){
            let charGraph = new Array(26).fill(0)
            for(const char of str){
                charGraph[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
                
            const key = charGraph.join(",")

            if(result[key]){
                result[key].push(str)
            } else {
                result[key] = [str]
            }
        }

        return Object.values(result)
    }
}
