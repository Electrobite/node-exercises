const { createTable } = require("./multiplication");

let { argv } = process;
let param = argv[2];
let base = param.split("=");

createTable(base[1])
    .then(archivo => console.log(`The file 'table-${base[1]}' has been saved!`))
    .catch(err => console.error(err));
