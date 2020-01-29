const { createTable } = require("./multiplication");

let base = 4;  // Specify the base in this variable

createTable(base)
    .then(file => console.log(`The file 'table-${base}' has been saved!`))
    .catch(err => console.error(err));
 
 
