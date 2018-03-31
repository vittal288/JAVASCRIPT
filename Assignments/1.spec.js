var isPalindrome = require('./1');

it('checkForPalindrome Method Shold Exist',()=>{
    expect(isPalindrome).toBeDefined();
});

it('XYZ is not a palindrome',()=>{
    expect(isPalindrome('XYZ')).toBeFalsy();
});
it('12301321 is not a palindrome',()=>{
    expect(isPalindrome('12301321')).toBeFalsy();
});

it('XYX is a palindrome',()=>{
    expect(isPalindrome('XYX')).toBeTruthy();
});

it('1221 is a palindrome',()=>{
    expect(isPalindrome('1221')).toBeTruthy();
});

