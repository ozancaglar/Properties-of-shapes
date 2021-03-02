import test from 'ava';
import { Triangle } from './maths.js'
import assert from 'assert';
var triangle1 = new Triangle(1, 1, 1);
test('Triangle Perimeter', t => {
    assert.strictEqual(triangle1.perimeter(), 3);
    t.pass();
});
test('Triangle Area', t => {
    assert.strictEqual(triangle1.area(), 0.433);
    t.pass();
});