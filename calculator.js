import * as myMod from "./module.js"; // Alternative to importing individual modules but then must refer to myMod and cannot be default.
const integers1 = new myMod.Maths(5, 7);
const integers2 = new myMod.Maths(14, 7);
console.log(integers1.Operations());
console.log(integers2.Operations())