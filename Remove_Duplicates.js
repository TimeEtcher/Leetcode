var removeDuplicates = function(nums) {
    for(var i = 0;i < nums.length;i++){
    	while(nums[i] == nums[i+1]){
    		nums.splice(i+1,1);
    	}
    }
    return nums.length;
};
var num = [1,1,2];
console.log(removeDuplicates(num));