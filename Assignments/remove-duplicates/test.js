const chai = require('chai');
const assert = chai.assert;


const removeDuplicates = require('./index');

describe("ARRAY", () => {
    it('function should exist', () => {
        expect(removeDuplicates).toBeDefined();
    });

    it('it should remove duplicates from an array', () => {
        const givenArr = [1, 2, 12, 1, 2, 3, 3, 3, 3];
        const expectedArr = [1, 2, 12, 3];
        const retArr = removeDuplicates(givenArr);
        expect(retArr).toEqual(expectedArr);
    });

    it('it should remove duplicates from an array with different data types', () => {
        const givenArr = [1, 2, 1, 2, 'hi', 'Hi', 'hello', 'hello', '1', 4, 5];
        const expectedArr = [1, 2, 'hi', 'Hi', 'hello', '1', 4, 5];
        const retArr = removeDuplicates(givenArr);
        expect(retArr).toEqual(expectedArr);
    });

    it('it should removes duplicates from array with all same elements', () => {
        const givenArr = [1, 1, 1, 1, 1, 1, 1];
        const expectedArr = [1];
        const retArr = removeDuplicates(givenArr);
        expect(retArr).toEqual(expectedArr);
    });

    it('it should remove duplicates from SORTED array', () => {
        const givenArr = [1, 1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 7, 7, 8];
        const expectedArr = [1, 2, 3, 4, 5, 6, 7, 8];
        const retArr = removeDuplicates(givenArr);
        expect(retArr).toEqual(expectedArr);
    });
});


describe("ARRAY OF COLLECTIONS", () => {
    it('should remove duplicates from an object array', () => {

        const givenArr = [
            {
                name: 'vittal',
                city: 'BLH',
                id: 1
            },
            {
                name: 'Sandesh',
                city: 'BLH',
                id: 2
            },
            {
                name: 'Akhila ',
                city: 'DVG',
                id: 3
            }
        ];

        const expectedArr = [
            {
                name: 'Sandesh',
                city: 'BLH',
                id: 2
            },
            {
                name: 'Akhila ',
                city: 'DVG',
                id: 3
            }
        ];

        const retArr = removeDuplicates(givenArr, 'city');
        assert.deepEqual(givenArr, expectedArr);
    });
});


