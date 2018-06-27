var segArr = require('./index.js');

describe("Even and Odd Seperate", () => {
    it("It should reorder the given array like even elements left side and odd right side", () => {
        const givenArr = [1, 2, 4, 5, 7, 9, 6, 44, 0, 79, 8];
        expect(givenArr.length).toEqual(segArr(givenArr).length);
        expect(segArr(givenArr)).toEqual( [ 2, 4, 6, 8, 44, 0, 1, 5, 7, 9, 79 ]);
    });
})