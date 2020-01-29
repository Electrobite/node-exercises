const { createTable, listTable } = require('./multiplication');
const argv = require('./config/yargs').argv;

let command = argv._[0];
let { base, limit } = argv;

switch (command) {
	case 'list':
		listTable(base, limit);
		break;
	case 'create':
		createTable(base)
			.then(archivo => console.log(`The file 'table-${base}' has been saved!`))
			.catch(err => console.error(err));
		break;
	default:
		console.error('Command not found!');
}
