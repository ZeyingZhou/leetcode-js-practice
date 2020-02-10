//Valid Parentheses
//s is string
var isValid = function(s) {

    let copy = s;
    if(s.length % 2 != 0){
        return false;
    }    
    for(i = 0; i < s.length/2; i++)
    {
       if(copy === "") return true;
       if(copy.indexOf('()') == -1 && copy.indexOf('{}') == -1 && copy.indexOf('[]') == -1)          return false;
       copy = copy.replace('()','');
       copy = copy.replace('{}','');
       copy = copy.replace('[]','');       
    }
    return true;
    
};