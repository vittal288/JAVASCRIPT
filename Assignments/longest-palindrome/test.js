const longestPalindrome = require('./index');

it('function should exist', () => {
    expect(longestPalindrome).toBeDefined();
});
 it('it should remove duplicates from an array', () => {
    const givenStr = "abracadabra";
    const expectedStr = "aca";
    const result = longestPalindrome(givenStr);
    expect(result).toEqual(expectedStr);
});


it('it should remove duplicates from an array', () => {
    const givenStr = "1234ABCDCBAVittal1234ABCDCBA";
    const expectedStr = "ABCDCBA";
    const result = longestPalindrome(givenStr);
    expect(result).toEqual(expectedStr);
});

