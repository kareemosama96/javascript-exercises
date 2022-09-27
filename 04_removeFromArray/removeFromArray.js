const removeFromArray = function(array,...removeThis) {
    for ( i = 0; i < removeThis.length; i++){
        
        for (let j = 0; j < array.length; j++) {
	        if (array[j] === removeThis[i]){
	            array.splice(j,1);
	        }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
