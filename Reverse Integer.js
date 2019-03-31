var Reverse = function(x) {
    var str = x.toString();
    var arr = str.split("");
    if(x == 0){
        return 0;
    }
    else if(x < 0){
        arr.shift();
    }
    while(arr[arr.length-1] == 0){
        arr.pop();
    }
    arr.reverse();
    var newx = parseInt(arr.join(""));
    if(x < 0){
        newx = -1 * newx;
    }
    return newx >= -Math.pow(2,31) && newx <= Math.pow(2,31)-1 ? newx : 0;
};
