//Longest Common Prefix
//strs string array
strs = ["shitty","shit","sh"];

var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++){
         while(strs[i].indexOf(prefix) != 0){
         prefix = prefix.substring(0,prefix.length-1);
         console.log(prefix);
             if(prefix === "") return "";
         } 
    }
    console.log(prefix);
    return prefix;
};
longestCommonPrefix(strs);