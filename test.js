import test from 'ava';
import { Triangle, Rectangle, Circle } from './maths.js';
import assert from 'assert';
import * as Math from 'mathjs';

// tirangle test
var triangle1 = new Triangle(1, 1, 1);
test('Triangle Perimeter', t => {
    assert.strictEqual(triangle1.perimeter(), 3);
    t.pass();
});
test('Triangle Area', t => {
    assert.strictEqual(Math.round((triangle1.area() + Number.EPSILON) * 1000)/1000, 0.433);
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
    assert.strictEqual(rectangle1.isSquare(), false);
    t.pass();
});

// circle test
var circle1 = new Circle(2);
test('Circle Area', t => {
    assert.strictEqual(Math.round((circle1.area() + Number.EPSILON) * 1000)/1000, 12.566);
    t.pass();
});
test('Circle Circumference', t => {
    assert.strictEqual(Math.round((circle1.circumference() + Number.EPSILON) * 1000)/1000, 12.566);
    t.pass();
});
