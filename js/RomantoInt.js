//Roman to Integer

var romanToInt = function(s) {
    const properties = {I: 1,V: 5,X: 10,L: 50,C: 100,D: 500,M: 1000};
    let sum = 0;
    let prev = s[0];
    for(i of s){
        sum+=properties[i];
        if(properties[i] > properties[prev] ){
            sum-=2*properties[prev]
        }
        prev = i;
    }
    return sum;
};