# ts-jest-setup

## Introduction
This setup repository was created as a cheatsheet for typescript projects that use Jest for testing. While testing is important, we do not need to test libraries like Express, Koa, and others. We can assume that they have undergone extensive testing. However, writing tests for the code we wrote ourselves is critical. Routes, middleware, controllers, services, and models are examples of code that could be included. The chart below depicts what we typically have to test.

![Database ER diagram (crow's foot) (1)](https://user-images.githubusercontent.com/19669287/183560564-fa8753d4-4b2f-4ef4-9c1f-fc8bd26c17c3.svg)


## Getting Started
- describe(string, callback):
- test(string, callback): 
- expect<code>\<T></code>(arg:<code>T</code>):
- toBe<code>\<T></code>(arg:<code>T</code>):
### toBe
```js
import { sum, difference } from "../utils/math.utils";

describe('testing math module', () => {

    test('sum', () => {
        expect(sum(1,2)).toBe(3)
    })

    test('difference', () => {
        expect(difference(2,1)).toBe(1)
    })

})
```
## Setup
### Dev Dependencies
- typescript 
- ts-node
- jest
- ts-jest
- @types/node 
- @types/jest

### Commands
1. Install dev-dependencies
```bash
npm i -D typescript ts-node jest ts-jest @types/node @types/jest
```

2. Create jest-config
```bash
npm ts-jest config:init
```
This creates a <code>jest.config.js</code> file in your root directory:
```js
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.test.ts"],
  verbose: true, // test that are set to ignore will still get reported during the test if set to true
  forceExit: true, // exit even if there are pending handlers,
  clearMocks: true
};
```
3. Add test script to <code>package.json</code> file:
```json
"scripts": {
    
    "test": "jest"
    
},
```

4. Now you can run <code>$ npm run test</code>, and that will run all files that include <code>.test.</code> in the file name.
