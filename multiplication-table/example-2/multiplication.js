// File System
const fs = require("fs");

let createTable = base => {
    return new Promise((resolve, reject) => {
        let data = "";
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tables/table-${base}.txt`, data, err => {
            if (err) {
                return reject(err);
            } else {
                resolve(`table-${base}.txt`);
            }
        });
    });
};

module.exports = {
    createTable
};
