var fs = require('fs');
var convert = require('xml-js');
var xml = fs.readFileSync('./DerSturmTest.xml', 'utf8');
var result = convert.xml2json(xml, {compact: true, spaces: 4});

fs.writeFileSync('jsonData.json', result);
console.log(result);
