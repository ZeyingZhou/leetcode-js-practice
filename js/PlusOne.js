/**
 * @param {number[]} digits
 * @return {number[]}
 */

 //stupid solution but i still want to keep it

var plusOne = function(digits) {
    if(digits[digits.length - 1] !== 9){
        digits[digits.length - 1] ++;
    }
    else{
        for(let i = digits.length - 1; i >=0; i--){
            digits[i]++;
            console.log(digits[i]);
            if(digits[0] === 10){
                digits[0] = 0;
                console.log(digits[0]);
                digits.unshift(1);
            }
            else if(digits[i] === 10){
                digits[i] = 0;
            }
            else {
                break
            }
        }
        console.log(digits[0]);
    }
    console.log(digits);
    return digits;
};

plusOne([9]);