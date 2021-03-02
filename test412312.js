import test from 'ava';
import { equal } from 'assert';
import { hello as _hello } from './hello.js';

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');
    t.is(await bar, 'bar');
});

test('hello', t => {
    equal(_hello('world'), 'Hello world!');
    equal(_hello('Jane'), 'Hello Jane!');
    equal(_hello('John'), 'Hello John!');
    equal(_hello(''), 'Hello !');
    t.pass();
});