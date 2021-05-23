const { createTable } = require('./multiplication');

let base = 4; // Specify the base in this variable.

createTable(base)
    .then(() => console.log(`The file 'table-${base}.txt' has been saved!`))
    .catch((error) => console.error(error));
