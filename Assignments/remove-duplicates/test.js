const removeDuplicates = require('./index');

it('function should exist', () => {
    expect(removeDuplicates).toBeDefined();
})

it('it should remove duplicates from an array', () => {
    const givenArr =[1, 2, 1, 2, 'hi', 'Hi', 'hello', 'hello', '1', 4, 5];
    const expectedArr =[1,2,'hi','Hi','hello','1',4,5];
    const retArr = removeDuplicates(givenArr);
    expect(retArr).toEqual(expectedArr);
})