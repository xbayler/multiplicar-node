const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El limite introducido ${limite} no es un número.`);
            return;
        }

        data += `===================\n`.green;
        data += `Tabla de ${ base }\n`.green;
        data += `===================\n`.green;

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);
    });
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El limite introducido ${ limite } no es un número.`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`.green);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};