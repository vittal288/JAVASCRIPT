; (function (global) {
    var Util = function () {
        return new Util.init();
    };

    Util.prototype = {
        // --- Directions
        // Given an array and chunk size, divide the array into many subarrays
        // where each subarray is of length chunk size 
        // chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
        // chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
        // chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
        chunk: function (array, chunkSize) {

            console.time('chunk test');
            var chunksArr = [];
            if (array.length < chunkSize) {
                return array;
            } else {
                for (var i = 0; i < array.length; i + chunkSize) {
                    var chunk = array.splice(i, chunkSize);
                    chunksArr.push(chunk);
                }
            }
            console.timeEnd('chunk test');
            return chunksArr;
        },

        chunk2: function (array, size) {
            console.time('chunk2 test');
            const chunked = [];
            // chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]    
            for (let element of array) {
                const last = chunked[chunked.length - 1]; // [1]
                if (!last || last.length === size) {
                    chunked.push([element]); // [[1]]
                } else {
                    last.push(element) //[[1,2],[3,4]]
                }
            }
            console.timeEnd('chunk2 test')
            return chunked;
        },
        // --- Directions
        // Write a program that console logs the numbers
        // from 1 to n. But for multiples of three print
        // “fizz” instead of the number and for the multiples
        // of five print “buzz”. For numbers which are multiples
        // of both three and five print “fizzbuzz”.
        // --- Example
        //   fizzBuzz(5);
        //   1
        //   2
        //   fizz
        //   4
        //   buzz

        //1,2,FIZZ,4,BUZZ, 6
        fizzBuzz: function (n) {
            for (var i = 1; i <= n; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    console.log('fizzbuzz');
                } else if (i % 3 === 0) {
                    console.log('fizz');
                } else if (i % 5 === 0) {
                    console.log('buzz');
                }
                else {
                    console.log(i);
                }
            }
        },

        reverseStringWithArr: function (str) {
            return str.split("").reverse().join(""); // ['a','b','c','d'].['d','c','b','a'].dcba
        },
        reverseWithoutArray: function (str) {
            var reversed = '';
            for (let char of str) {
                reversed = char + reversed;
            }
            return reversed;
        },
        // --- Directions
        // Given a string, return true if the string is a palindrome
        // or false if it is not.  Palindromes are strings that
        // form the same word if it is reversed. *Do* include spaces
        // and punctuation in determining if the string is a palindrome.
        // --- Examples:
        //   palindrome("abba") === true
        //   palindrome("abcdefg") === false
        palindrome: function (str) {
            return str === this.reverseStringWithArr(str) ? true : false;
        },

        // -- Directions 
        // loop through the string charectors and generate the object ou tof string as shown below 
        // i/p --> Hello 
        // o/p --> {H:1,e:1,l:2,o:1}
        StringToCharMap: function (str) {
            if (typeof str !== 'String') {
                throw 'Please string as a parameter !!!'
            } else {
                var charMap = {};
                // var arrStr = str.split("");
                // for (let i = 0; i < arrStr.length; i++) {
                //     if (charMap.hasOwnProperty(arrStr[i])) {
                //         charMap[arrStr[i]] = charMap[arrStr[i]] + 1;
                //     } else {
                //         charMap[arrStr[i]] = 1;
                //     }
                // }

                // OR 

                for (let char of str) {
                    charMap[char] = charMap[char] + 1 || 1;
                }

                return charMap;
            }
        },

        // check for object idenitcal
        // input --> {a:1,b:2,c:3} , {a:1,b:2,c:3} o/p -->true 
        // input --> {a:1,b:2,c:4} , {a:1,b:2,c:3} o/p -->false 
        isIdenticale: function (a, b) {
            if (Object.keys(a).length !== Object.keys(b).length) {
                return false
            }
            for (let key in a) {
                if (a[key] !== b[key]) {
                    return false
                }
            }
            return true;
        },

        // --- Directions
        // Write a function that accepts a string.  The function should
        // capitalize the first letter of each word in the string then
        // return the capitalized string.
        // --- Examples
        //   capitalize('a short sentence') --> 'A Short Sentence'
        //   capitalize('a lazy fox') --> 'A Lazy Fox'
        //   capitalize('look, it is working!') --> 'Look, It Is Working!'
        capitalize: function (str) {
            const words = [];
            if (typeof str !== 'string') {
                // throw 'Please pass a string as argument !!';  
                return false;
            } else {
                for (let word of str.split(" ")) {
                    words.push(word[0].toUpperCase() + word.slice(1));
                }
                return words.join(" ");
            }
        }
    };

    Util.init = function () {
        var self = this;
    };

    Util.init.prototype = Util.prototype;

    global.Util = global.v$ = Util;

})(window);