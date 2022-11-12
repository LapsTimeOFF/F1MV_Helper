const data = require('./src/commands/f1tv_infos/countryData.json')

let isos = [];

for (let _i = 0; _i < data.length; _i++) {
    const country = data[_i];
    isos.push(country.isoCode)
}

console.log(JSON.stringify(isos));