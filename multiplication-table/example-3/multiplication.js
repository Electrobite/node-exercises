// File System
const fs = require('fs');

let listTable = (base, limit) => {
	return new Promise((resolve, reject) => {
		let data = '';
		for (let i = 1; i <= limit; i++) {
			console.log(`${base} * ${i} = ${base * i}`);
		}
	});
};

let createTable = base => {
	return new Promise((resolve, reject) => {
		let data = '';
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
	createTable,
	listTable
};
