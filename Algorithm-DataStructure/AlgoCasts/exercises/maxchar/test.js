const maxChar = require('./index');

test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(maxChar('a')).toEqual('a');
  expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
  expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
});

// this is failing ....it will fail for all strings which is duplicates chars with of same repitation
test('Finds most used char in MEESS',()=>{
  expect(maxChar('MEESS')).toEqual('E');
  expect(maxChar('MEESS')).toEqual('S');
})
