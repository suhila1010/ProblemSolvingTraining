let majorityElement = function(nums) {
    let map = {};
    let max = 0;
    let majorNum = 0;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        console.log(!map[nums[i]]);
      if (!map[nums[i]]) map[nums[i]] = 0;
      map[nums[i]]++;
      if (map[nums[i]] > max) {
        majorNum = nums[i];
        max = map[nums[i]];
      }
    }
    return majorNum;
  };

let result = majorityElement([3,3,4])
// console.log(result)