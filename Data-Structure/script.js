const ids = new Set();

ids.add('1');
ids.add('abc');
ids.add(1);

ids.add(1);ids.add(1);


console.log(ids.has('1'));