const extend = require('./some-try');
//-----------------------------------------------------

describe('EXTEND METHOD', () => {
    test('Extend Function Should Exist !!!', () => {
        expect(extend).toBeDefined();
    });

    test('It Should returns an empty object', () => {
        expect(extend({})).toEqual({});
    });

    test('It Should returns an undefined', () => {
        expect(extend()).toBe(undefined);
    });

    test('It should return an object', () => {
        var obj1 = { name: 'vittal' };
        expect(extend(obj1)).toEqual(obj1);
    });


    test('It should Extend an Object', () => {
        var obj1 = {
            fName: 'vittal',
            mName: 'something',
            mobile: {
                primary: '242423424',
                secondry: '1245353535',
                thirdLevel: {
                    something: 'something'
                }
            }
        }
        var obj2 = {
            lName: 'Kamkar'
        }

        var obj3 = {
            address: '100 feet road'
        }

        var extendObj = {
            fName: "vittal", mName: "something", mobile: {
                primary: '242423424',
                secondry: '1245353535',
                thirdLevel: {
                    something: 'something'
                }
            }, lName: "Kamkar", address: "100 feet road"
        };
        expect(extend(obj1, obj2, obj3)).toEqual(extendObj);
    });
})
