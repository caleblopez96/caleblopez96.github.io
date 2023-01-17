let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351

const arr1Combined = arr_1.reduce((accumulator, currentVal) => {
    return accumulator + currentVal
});
console.log(arr1Combined); // 276

for(let i = 0; i < 10; i++) {
    console.log(i);
}

let n = 22;
for (i = 1; i < n; i++){
    if(i % 2 == 0) {
        console.log(i)
    }
}

//! check string to see if it contains a specific letter:
// the parameter 'string' accepts a string as an argument.
// the parameter 'letter' accepts a string as an argument.
const checkString = (string, letter) => {
    return string.includes(letter) ? 'yes' : 'no';
};


