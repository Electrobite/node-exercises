const fs = require('fs/promises');
const path = require('path');

const createTable = async (base) => {
    let data = '';

    for (let i = 1; i <= 10; i++) {
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
};
