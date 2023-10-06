//    node 01_basic/05_string.js

const a= "amit";
const create = 20

//console.log(name + a + "hello")    // this is bad.

//console.log(`hello my name is ${a} and my age is ${create}`);

const gamename = new String(`amit`)
console.log(gamename)

console.log(gamename[0]);

console.log(gamename.__proto__);
console.log(gamename.length);

console.log(gamename.toUpperCase());        // upper chase convert 
console.log(gamename.charAt(`3`));      // position of cahracter
console.log(gamename.indexOf(`t`));   // index check of char


const newString = gamename.substring(0,3);    //print index value  0 to 3-1
console.log(newString);

const anotherstring = gamename.slice(-5,3);
console.log(anotherstring)

let trim1 = "    amiat   ";
console.log(trim1.trim());

const url = "amityadav@gmail.com"

console.log(url.replace('@', 'amit'))

console.log(url.includes('amit'))

const split = "amit yadav kumar"

console.log(split.split('_'))