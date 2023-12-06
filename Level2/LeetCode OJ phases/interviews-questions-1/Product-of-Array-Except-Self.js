let productExceptSelf = function(nums) {
    let res = []
    let pre=[]
    let suf = []
    let n = nums.length;
    pre[0] = 1
    suf[n-1] = 1
    for(let i=1;i<n;i++){
        pre[i] = pre[i-1]*nums[i-1]
    }
    for(let i = n-2;i>=0;i--){
        suf[i] = suf[i+1]*nums[i+1]
    }
    for(let i = 0; i<n;i++)
    {
        res[i] = pre[i]*suf[i]
    }
    return(res)
};

let arr = [1,2,3,4];
console.log(productExceptSelf(arr))