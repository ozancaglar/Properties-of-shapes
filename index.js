import User, { hello, bye } from "./module.js"; // package.json required for ES6 module imports
//import * as myMod from "./module.js"; // Alternative to importing individual modules but then must refer to myMod and cannot be default.

hello();
bye();

const user = new User('Ozan', '24', 'ozancaglar1996@hotmail.co.uk');
console.log(user);
console.log(user.getDetails());



/*
const mod = require("./module.js"); // when using commonjs in .json

mod.bye();
*/
