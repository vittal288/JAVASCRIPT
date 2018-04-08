const removeDuplicate = require('./index');

describe("Remove Duplicates entry from an array",()=>{

    it('removeDuplicate method should exist',()=>{
        expect(removeDuplicate).toBeTruthy();
    });

    it('should return an  unique array from [1,1,2,3,2,3] to [1,2,3]',()=>{
        const uniqArr = removeDuplicate([1,1,2,3,2,3]);

        expect(uniqArr).toEqual([1,2,3]);
    });
    // it(`should return an  unique array [1,'1','2','2',3,4,'4','5',6,7,7,9] to [1,'1','2',3,4,'4','5',6,7,9]`,()=>{
    //     const uniqArr = removeDuplicate([1,'1','2','2',3,4,'4','5',6,7,7,9]);

    //     expect(uniqArr).toEqual([1,'1','2',3,4,'4','5',6,7,9]);
    // });
    // it(`should return an  unique array from ['hello','hello','olleh',1,'1',1,2,3] to ['hello','olleh',1,'1',2,3]`,()=>{
    //     const uniqArr = removeDuplicate(['hello','hello','olleh',1,'1',1,2,3]);

    //     expect(uniqArr).toEqual(['hello','olleh',1,'1',2,3]);
    // });

    // it('should return an  unique array from [1,1,2,3,2,3] to [1,2,3]',()=>{
    //     const uniqArr = removeDuplicate([1,1,2,3,2,3]);

    //     expect(uniqArr).toEqual([1,2,3]);
    // });
})

