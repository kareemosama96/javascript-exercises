clear();

numbers = [0,1,2,3,4,5,6,7,8,9,10];
numbers.name = "numbers";
printArray(numbers);

//reduce
print("\n\n**************reduce***************\n")
sum = numbers.reduce((result,item,index,array)=>{
	return result+item;  
},0);
print(sum);


//join array in string
print("\n\n**************join array in string***************\n")
joined = numbers.join("/");
joined.name="joined";
printArray(numbers); //array not changed
print(joined); //string


//split string to array
print("\n\n**************split string to array***************\n")
joinedArray = joined.split("/")
joinedArray.name="joinedArray";
printArray(joinedArray); //new array from string
print(joined); //string not changed


//sort-asc
print("\n\n**************sort ascending***************\n")
sorted = numbers.sort((a,b)=>a-b);
sorted.name="sorted";
printArray(sorted);
print("Original Array: AFFECTDED");


//sort-desc
print("\n\n**************sort descending***************\n")
sorted = numbers.sort((a,b)=>b-a);
sorted.name="sorted";
printArray(sorted);
print("Original Array: AFFECTDED");


//reverse
print("\n\n**************reverse***************\n")
reversed = numbers.reverse();
reversed.name="reversed";
printArray(reversed);
print("Original Array: AFFECTDED");


//map
print("\n\n**************map***************\n")
mapped = numbers.map((item,index,array)=>{
  switch(true){
    case item == 5 :
			return "FIVE";
    case item > 5 :
			return "5+";
    case item < 5 :
			return "5-";  
  }
});
mapped.name = "mapped";
printArray(numbers);
printArray(mapped);
print("Original Array: NOT AFFECTDED");



//find
print("\n\n**************find***************\n")
itemToFind = numbers.find((item,index,array)=>{
 return item > 5; //return: number : 6
});
printArray(numbers);
print(itemToFind);
print("Original Array: NOT AFFECTDED");


//filter
print("\n\n**************filter***************\n")
itemsToFilter = numbers.filter((item,index,array)=>{
  switch(true){
    case item > 5 :
      return "5+";
      //return: array : [6,7,8,9,10]
  }
});
itemsToFilter.name = "itemsToFilter";
printArray(itemsToFilter);
print("Original Array: NOT AFFECTDED");



//forEach
print("\n\n**************forEach***************\n")
numbers.forEach((item,index,array)=>{
  print(`index: ${index}\titem: ${item} \t array:${array.name}`);
});
print("Original Array: NOT AFFECTDED");


//concat
print("\n\n**************concat***************\n")
newNumbers = [0,1,2,3];
newNumbers.name = "newNumbers";
concat = numbers.concat(newNumbers,0,1,[0,1]);
concat.name="concat"
printArray(numbers);
printArray(newNumbers);
printArray(concat);
print("Original Array: NOT AFFECTDED");



//slice
print("\n\n**************slice***************\n")
removed = numbers.slice(-5);
removed.name="removed";
printArray(numbers); //not affected
printArray(removed);
print("Original Array: NOT AFFECTDED");


//splice
print("\n\n**************splice***************\n")
removed = numbers.splice(-3,1,"x");
removed.name="removed";
printArray(numbers);
printArray(removed);
print("Original Array: NOT AFFECTDED");






//Home made printing functoins to save time
//.........................................
// print array
function printArray(array){
  out='';
  for (let item of array){
    out+= item+",";
  }
  console.log(`${array.name}\tlen: ${array.length}\n`+out.slice(0,-1));
}

//print in console
function print(output){
  console.log(output);
} 

// function checkNumber(number){
//   if (//number < 0 ||
//      	number == null ||
//      	number == undefined ||
//      	isNaN(number) ||
//      	!isFinite(number)||
//       typeof(number) != "number"){
//     return false;
//   }else{
//     return true;
//   }
// } 


