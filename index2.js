const jsonObj = { /// json objects are key value pairs
    fruit: "apple",
    fish: "code",
}

console.log(JSON.stringify(jsonObj)) // string
console.log(jsonObj) // object

const str = '{"a": 2, "b":4}';

console.log(str); // string
console.log(JSON.parse(str)); // string parsed into object
console.log(typeof JSON.parse(str)); 