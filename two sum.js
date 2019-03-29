//Solve two Sum by javascript
var twoSum = function(nums, target) {
    var arr = [];
    for(var i = 0;i < nums.length;i++){
        if(nums.indexOf(target - nums[i]) != -1 && arr.indexOf(i) == -1 && arr.indexOf(target - nums[i]) != i){
                arr.push(i);;
                arr.push(nums.indexOf(target -nums[i]));
        }
    }
    return arr;
};
var nums = [2,7,11,15];
var target = 9;

console.log(twoSum(nums,target));