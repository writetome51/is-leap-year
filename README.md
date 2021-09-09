# isLeapYear(year: number): boolean
 
`year` must be a number.

## Examples
```js

isLeapYear(2020); // --> true

isLeapYear(2021); // --> false

isLeapYear(2024); // --> true

isLeapYear(0); // --> true

isLeapYear(1600); // --> true

isLeapYear(1700); // --> false

isLeapYear(996); // --> true

isLeapYear(1000); // --> false

isLeapYear(NaN); // --> false

isLeapYear(''); // `Error: Input must be type 'number'`
```

## Installation
`npm i  @writetome51/is-leap-year`


## Loading
```js
import { isLeapYear } from '@writetome51/is-leap-year'; 
```
