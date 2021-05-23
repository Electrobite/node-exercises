const { createTable } = require('./multiplication');

let { argv } = process;
let base = Number(argv[2]);

if (!base) {
    throw new Error('You must specify a numeric base in the arguments.');
}

createTable(base)
    .then(() => console.log(`The file 'table-${base}.txt' has been saved!`))
    .catch((error) => console.error(error));
