const ftoc = function(f) {
  if (!checkNumber(f)){
    print("Error, enter number");
  }else{
    return Math.round((((f-32) * (5/9)) * 10))/10;
  }
};

const ctof = function(c) {
  if (!checkNumber(c)){
    print("Error, enter number");
  }else{
    return Math.round((((c * (9/5)) + 32) * 10))/10;
  }
};

function checkNumber(number){
  if (number == null ||
     	number == undefined ||
     	isNaN(number) ||
     	!isFinite(number)||
      typeof(number) != "number"){
    return false;
  }else{
    return true;
  }
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
