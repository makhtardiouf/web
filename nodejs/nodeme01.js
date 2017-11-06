
/*
Makhtar Diouf
Nodejs demo. Run on cli as: node nodeme01
Ref: https://www.airpair.com/javascript/node-js-tutorial
$Id$
*/

var person = { name: 'John', age: 20 };
module.exports = person;

var dns = require('dns');
dns.resolve4('www.google.com', function (err, addresses) {
  if (err) throw err;

  console.log('DNS Address list: ' + addresses);
  //var addrArray =  JSON.stringify(addresses).
  console.log('\naddresses: ' + JSON.stringify(addresses));
});
