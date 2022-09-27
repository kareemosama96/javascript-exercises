const sumAll = function (...inputs) {
    for(input of inputs){
        if (!validateInputs(input)){
            return 'ERROR'
        }
    }

    sum = +0;
    for (i = getMin(inputs); i <= getMax(inputs); i++) {
        sum += i;
    }
    return sum;

};

function validateInputs(item){
    if (!(typeof(item) == "number") ||
        item<0 ||
        item == null ||
        item == undefined ||
        !isFinite(item)){
        return false;
    }else{
        return true;
    }
}

function getMax(array) {
    max = array[0];
    for (item of array) {
        item > max ? max = item : max = max;
    }
    return max;
}

function getMin(array) {
    min = array[0];
    for (item of array) {
        item < min ? min = item : min = min;
    }
    return min;
}

// Do not edit below this line
module.exports = sumAll;