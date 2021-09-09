import { isLeapYear } from './index.js';

if (isLeapYear(0)) console.log('test 0 passed');
else console.log('test 0 FAILED');

if (!(isLeapYear(100))) console.log('test 0A passed');
else console.log('test 0A FAILED');

if (!(isLeapYear(200))) console.log('test 0B passed');
else console.log('test 0B FAILED');

if (!(isLeapYear(300))) console.log('test 0C passed');
else console.log('test 0C FAILED');

if (isLeapYear(400)) console.log('test 0D passed');
else console.log('test 0D FAILED');

if (isLeapYear(2020)) console.log('test 1 passed');
else console.log('test 1 FAILED');

if (isLeapYear(2024)) console.log('test 1A passed');
else console.log('test 1A FAILED');

if (!(isLeapYear(2021))) console.log('test 1B passed');
else console.log('test 1B FAILED');

if (isLeapYear(1600)) console.log('test 2 passed');
else console.log('test 2 FAILED');

if (!(isLeapYear(1700))) console.log('test 3 passed');
else console.log('test 3 FAILED');

if (isLeapYear(1704)) console.log('test 3A passed');
else console.log('test 3A FAILED');

if (!(isLeapYear(1706))) console.log('test 3AA passed');
else console.log('test 3AA FAILED');

if (isLeapYear(996)) console.log('test 3B passed');
else console.log('test 3B FAILED');

if (!(isLeapYear(1000))) console.log('test 3BB passed');
else console.log('test 3BB FAILED');

if (!(isLeapYear(NaN))) console.log('test 3C passed');
else console.log('test 3C FAILED');






