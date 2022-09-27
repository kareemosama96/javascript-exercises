const removeFromArray = function(array,...removeThis) {
    for (i = 0; i < removeThis.length; i++){
        (check(array,removeThis[i]))
    }
    return array;
};
function check(array,itemToRemove){
	for(let i = 0; i < array.length; i++){
    (array[i] === itemToRemove)? array.splice(i,1):array;
  }  
}


// Do not edit below this line
module.exports = removeFromArray;
