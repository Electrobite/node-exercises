const fs = require('fs/promises');
const path = require('path');

const listTable = (base, limit) => {
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

const createTable = async (base, limit) => {
    let data = '';

    for (let i = 1; i <= limit; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }

    const tablesPath = path.join(__dirname, `tables/table-${base}.txt`);

    try {
        await fs.writeFile(tablesPath, data);
    } catch (error) {
        return error;
    }
};

module.exports = {
    createTable,
    listTable,
};
