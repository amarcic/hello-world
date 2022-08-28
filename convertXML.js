var convert = require('xml-js');
var xml = require('fs').readFileSync('./DerSturmTest.xml', 'utf8');
var result = convert.xml2json(xml, {compact: true, spaces: 4});

console.log(result);
