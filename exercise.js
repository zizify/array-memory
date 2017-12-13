//Set an empty array, use the for loop to loop through the input array, then if any 
//numbers greater than 5, we push those into the empty array, and return that array as the result.

let lessThanFive = array => {
    let result = [];
    for (let i = 0; i < array.length; i ++) {
        if (array[i] > 5) {
            result.push(array[i])
        }
    }
    return result;
}

console.log(lessThanFive([1,2,3,4,5,6,7,8]));

//Set an empty array, use for loop to loop thru two arrays and push those to the empty array, 
//then using the sort method to sort them out

let mergeArrays = (array1, array2) => {
    let combine = [];
    array1.forEach(num => combine.push(num));
    array2.forEach(num => combine.push(num))
    return combine.sort((a,b) => a-b);
}

console.log(mergeArrays([1,3,2], [4,5,6,11]));

//set a variable as empty string, then we loop through the string, if any character in the string is not belonging to
//list of removed characters, then we push/add to empty string

let removeCharacters = (string, characters) => {
    let result = "";
    for (let i = 0; i < string.length; i++) {
        if (!characters.includes(string.charAt(i))) {
            result += string.charAt(i);
        }
    }
    return result;
}

 console.log(removeCharacters('a io', 'ai'));


//Looping through the array twice, then assigning the product of remaining values (but not including the current one) to the current index,
//then push that value to the empty array set in the beginning

function weirdMultiplier(arr) {
const weirdProducts = [];

for (let i = 0; i < arr.length; i++) {
    let product = 1;

    for (let j = 0; j < arr.length; j++) {        
        if (j !== i ) {
            product *= arr[j];
        }
    }
    
    weirdProducts.push(product);
}

return weirdProducts;
}

console.log(weirdMultiplier([1, 3, 9, 4]));

//[[1, 2], [3, 4], [5, 0], [6, 0]] > [[1, 2], [3, 4], [0, 0], [0, 0]]
function zerofy(arr) {
const zerofiedArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 0 || arr[i][1] === 0) {
        zerofiedArr.push([0, 0]);
    }

    else {
        zerofiedArr.push(arr[i]);
    }
}
return zerofiedArr;    
}

console.log(zerofy([[1, 2], [3, 4], [5, 0], [6, 0]]));

