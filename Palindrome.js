var isPalindrome = function(x) {
    var str = x.toString();
    for(var i = 0;i < str.length;i++){
        if(str[i] != str[str.length-1-i]){
            return false;
        }
    }
    return true;
};