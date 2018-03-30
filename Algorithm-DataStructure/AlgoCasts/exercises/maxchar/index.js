// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap ={};
    let max =0;
    let maxChar='';

    // converting string to an key value mapping object 
    // vittal --> {v:1,i:1,t:2,a:1,l:1}
    for(let char of str){
        if(charMap[char]){
            charMap[char]++
        }else{
            charMap[char] = 1;
        }
    }
    console.log(charMap)
    // iterating to an object and finding the highest count key 
    for( let key in charMap){
        if(charMap[key] >= max){
            max = charMap[key];// 2
            maxChar = key; // t
        }       
    }
    return maxChar;
}

module.exports = maxChar;
