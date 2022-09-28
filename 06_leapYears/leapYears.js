const leapYears = function (year) {

    if (!checkNumber(year)) {
        return false;
    } else {
        return checkLeap(year);
    }
};

//if it is a leap return true
function checkLeap(year) {
    switch (true) {
        //most special case divisible by 400 -> leap
        case (year % 400 == 0):
            return true;
            

        //divisible by 100 not 400 -> not leap
        case year % 100 == 0:
            return false;
            
        //divisible by 4 not 100 or 400 -> leap
        case year % 4 == 0:
            return true;


        //not divisible by 4 or 100 or 400 -> not leap 
        default:
            return false;
    }
}
//check input from user
function checkNumber(number) {
    if (number < 0 ||
        number == null ||
        number == undefined ||
        isNaN(number) ||
        !isFinite(number) ||
        typeof (number) != "number") {
        return false;
    } else {
        return true;
    }
}

// Do not edit below this line
module.exports = leapYears;
