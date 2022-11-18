# Spring '83 Keygenerator

To publish to a [Spring '83](https://github.com/robinsloan/spring-83/) board you'll need to generate a ed25519 keypair that matches a specific format. This script will attempt to continuously generate keys which expire either next year or the year after. Note that keys have a two-year lifespan, which means it's possible for this script to propose keys that _aren't valid yet_. If it does this, feel free to keep that key for later use and let the script keep running.

## Installation

Check out the repo. Run:

```
npm i
```

## Usage:

Run:

```
node start
```

The script will begin generating keypairs. Put a secret key into a text file and give it to your Spring '83 client to start using it.

Press `CTRL+C` to stop the script whenever you're ready.

## Sample

Sample output follows; the keys are censored though -

```
$ npm start

> spring83-keygen@1.0.0 start
> node index.js

Looking for keys that match /83e(0[1-9]|1[0-2])(23|24)$/:
.........................................................................................................................................
Expires: 06 / 23
Secret:  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxccba182469ea83e0623
Public:  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxccba182469ea83e0623
....................................................................................................................
Expires: 09 / 23
Secret:  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx79ba68810d1783e0923
Public:  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx79ba68810d1783e0923
........................................
```
