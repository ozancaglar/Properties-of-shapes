import assert from "assert";
function oddOrEven(num){
    if(num%2===0){
        return"even";
    } else {
        return "odd";
    }
}
assert.strictEqual(oddOrEven(6), "odd"); // returns nothing if it works
// ava test runner - tests everything in isolation