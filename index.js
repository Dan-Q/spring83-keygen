const crypto = require('crypto');
const ed25519 = require('ed25519');

let d = new Date();
let filterYears = [];
d.setYear(d.getYear() + 1900 + 1);
filterYears.push(d.getFullYear().toString().substring(2));
d.setYear(d.getYear() + 1900 + 1);
filterYears.push(d.getFullYear().toString().substring(2));

const KEY_REGEX = new RegExp(`83e(0[1-9]|1[0-2])(${filterYears.join('|')})$`);

process.stdout.write(`Looking for keys that match ${KEY_REGEX}:\n`);

let i = 0, keypair, publicKey, expiry;

while( true ) {
  keypair = ed25519.MakeKeypair(crypto.randomBytes(32));
  publicKey = keypair.publicKey.toString('hex');
  i++;
  if(0 == (i % 10000)) process.stdout.write('.');
  if(publicKey.match(KEY_REGEX)) {
    expiry = `${publicKey.substring(60, 62)} / ${publicKey.substring(62, 64)}`;
    process.stdout.write(`\nExpires: ${expiry}\nSecret:  ${keypair.privateKey.toString('hex')}\nPublic:  ${keypair.publicKey.toString('hex')}\n`);
  }
}
