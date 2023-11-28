let canJump = function (nums) {
  let n = nums.length;
  let steps=0;
  let i ;
  for (i = 0; i < n&& i<=steps;i++ ) {
    steps = Math.max(steps,i+nums[i])
  }
  return i == n;
};

let result = canJump([3,2,1,0,4]);
console.log(result);
