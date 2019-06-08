const chai = require('chai');
const assert = chai.assert;


const buildArrayFormat = require('./index');

describe("ARRAY", () => {
    it('function should exist', () => {
        expect(buildArrayFormat).toBeDefined();
    });

    it('it should return a string', () => {
        var fn = buildArrayFormat;
        expect(fn()).toEqual("Vittal");
    });

});




