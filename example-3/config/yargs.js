const options = {
    base: {
        demand: true,
        alias: 'b',
    },
    limit: {
        alias: 'l',
        default: '10',
    },
};

const argv = require('yargs')
    .command(
        'list',
        `Display the multiplication table of a number 'x' on the console.\n`,
        options
    )
    .command(
        'create',
        `Generates a '.txt' file containing the multiplication table of a number 'x'.`,
        options
    )
    .help().argv;

module.exports = {
    argv,
};
