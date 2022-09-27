const reverseString = function(str) {
    revStr="";
    for(i = str.length; i > 0; i--){
        revStr+=str[i-1];
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
