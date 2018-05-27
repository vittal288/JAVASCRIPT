const iterateArray = require('./array-nesting');


it('iterateArray should exist',()=>{
    expect(iterateArray).toBeDefined();
});


it('it should consolidate all array items to a single array',()=>{
    const arr = ['1','2','3',[[4,5,6]],[[[['do this']]]]];
    const expectedArr = ['1','2','3',4,5,6,'do this'];
    const retArr = iterateArray(arr);
    expect(retArr).toEqual(expectedArr);
});


it('it should not alter the original given array',()=>{
    const arr = ['1','2','3',[[1,2,3]],[[[['do this']]]]];
    iterateArray(arr);
    expect(arr).toEqual(arr);
});