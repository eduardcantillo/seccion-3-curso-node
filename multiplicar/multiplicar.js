const fs = require('fs');
const color = require('colors');

let listar = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('la base o el limite no son validos')
            return
        }
        let data = ''

        for (let i = 0; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`
        }

        resolve(data)
    })
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`la base ${base} o el limite ${limite} no es un numero`);
            return;
        }

        let data = '';
        for (var i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla ${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla ${base}.txt`)
        });

    })
}

module.exports = {
    crearArchivo,
    listar
}