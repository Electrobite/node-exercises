const { createTable, listTable } = require('./multiplication');
const argv = require('./config/yargs').argv;

let command = argv._[0];
let { base, limit } = argv;

if (!Number(base) || !Number(limit)) {
    throw new Error('All args must be numbers').message;
}

switch (command) {
    case 'list':
        listTable(base, limit);
        break;
    case 'create':
        createTable(base, limit)
            .then(() =>
                console.log(`The file 'table-${base}.txt' has been saved!`)
            )
            .catch((err) => console.error(err));
        break;
    default:
        console.log('Command not found!');
}
