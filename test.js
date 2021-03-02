import test from 'ava';
import { Triangle, Rectangle } from './maths.js'
import assert from 'assert';

// tirangle test
var triangle1 = new Triangle(1, 1, 1);
test('Triangle Perimeter', t => {
    assert.strictEqual(triangle1.perimeter(), 3);
    t.pass();
});
test('Triangle Area', t => {
    assert.strictEqual(triangle1.area(), 0.433);
    t.pass();
});

// rectangle test
var rectangle1 = new Rectangle(2,3);
test('Rectangle perimeter', t => {
    assert.strictEqual(rectangle1.perimeter(), 10);
    t.pass();

});
test('Rectangle Area', t => {
    assert.strictEqual(rectangle1.area(), 6);
    t.pass();
});
test('Square test', t => {
    assert.strictEqual(rectangle1.isSquare(), true);
    t.pass();
});
