//Algorithum Easy
//Reverse Integer



var reverse = function(x) {
    let output = String(Math.abs(x)).split('').reverse().join('');
    
    if(output > 0x7FFFFFFF){
    return 0;
    }
    console.log(x < 0 ? -output : output);
    return x < 0 ? -output : output;
    
};