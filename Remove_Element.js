var removeElement = function(nums, val) {
    var i = 0;
    while(i < nums.length){
    	if(nums[i] == val){
    		nums.splice(i,1);
    		continue;
    	}
    	i++;
    }
    return nums.length;
};
var num =  [0,1,2,2,3,0,4,2];
var val = 2;
console.log(removeElement(num,val));