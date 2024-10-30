# Advanced JavaScript Interview Questions and Answers
My Advanced JavaScript Interview Prep : A personal repository of JavaScript interview questions and solutions to help you solidify my understanding of advanced concepts.

<link rel="stylesheet" href="style.css">

---

### Table of Contents

| No. | Questions |
| --- | --------- |
| 1 | [What is a closure in JavaScript and how is it used?](#what-is-a-closure-in-javascript-and-how-is-it-used) |
| 2 | [What is the event loop in JavaScript?](#what-is-the-event-loop-in-javascript) |
| 3 | [Describe the difference between == and === in JavaScript.](#describe-the-difference-between--and--in-javascript) |
| 4 | [What are Promises and how do they work?](#what-are-promises-and-how-do-they-work) |
| 5 | [What is the purpose of the async and await keywords in JavaScript?](#what-is-the-purpose-of-the-async-and-await-keywords-in-javascript) |
| 6 | [Explain the concept of 'hoisting' in JavaScript.](#explain-the-concept-of-hoisting-in-javascript) |
| 7 | [What are JavaScript modules and how do they work?](#what-are-javascript-modules-and-how-do-they-work) |
| 8 | [What is a Proxy in JavaScript, and how can it be used?](#what-is-a-proxy-in-javascript-and-how-can-it-be-used) |
| 9 | [What is the bind() method in JavaScript?](#what-is-the-bind-method-in-javascript) |
| 10 | [Explain the concept of "debouncing" in JavaScript.](#explain-the-concept-of-debouncing-in-javascript) |
| 11 | [What is the difference between let and var?](#what-is-the-difference-between-let-and-var) |
| 12 | [What is the Symbol type and how is it used?](#what-is-the-symbol-type-and-how-is-it-used) |
| 13 | [Explain the concept of "throttling" in JavaScript.](#explain-the-concept-of-throttling-in-javascript) |
| 14 | [What is the purpose of the WeakMap in JavaScript?](#what-is-the-purpose-of-the-weakmap-in-javascript) |
| 15 | [How does prototypal inheritance work in JavaScript?](#how-does-prototypal-inheritance-work-in-javascript) |
| 16 | [What is the difference between call, apply, and bind?](#what-is-the-difference-between-call-apply-and-bind) |
| 17 | [What are Generators in JavaScript?](#what-are-generators-in-javascript) |
| 18 | [Explain the concept of "immutability" in JavaScript.](#explain-the-concept-of-immutability-in-javascript) |
| 19 | [What is the purpose of the Reflect API in JavaScript?](#what-is-the-purpose-of-the-reflect-api-in-javascript) |
| 20 | [Explain the concept of "destructuring" in JavaScript.](#explain-the-concept-of-destructuring-in-javascript) |

---

1. ### What is a closure in JavaScript and how is it used?

   A closure is a function that retains access to its lexical scope even when the function is executed outside that scope. Closures are created whenever a function is created, allowing the function to access variables from its outer scope.

   ```javascript
   const outerFunction = (outerVariable) => {
     return (innerVariable) => {
       console.log(`Outer Variable: ${outerVariable}`);
       console.log(`Inner Variable: ${innerVariable}`);
     };
   };

   const newFunction = outerFunction('outside');
   newFunction('inside');
   // Output:
   // Outer Variable: outside
   // Inner Variable: inside

2. ### What is the event loop in JavaScript?

    The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the system kernel whenever possible. It continuously checks the call stack to see if there’s any function that needs to run.

3. ### Describe the difference between == and === in JavaScript.

    == is the equality operator that compares two values for equality after converting both values to a common type (type coercion). === is the strict equality operator that compares both the value and the type without doing type conversion.

    ```javascript
    0 == false; // true (type coercion happens)
    0 === false; // false (different types)
 **[⬆ Back to Top](#table-of-contents)**

4. ### What are Promises and how do they work?

    Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They have three states: pending, fulfilled, and rejected.

     ```javascript
     const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
      }, 1000);
    });

    promise.then((value) => {
        console.log(value); // "Success!"
    }).catch((error) => {
        console.error(error);
    });
 **[⬆ Back to Top](#table-of-contents)**

5. ### What is the purpose of the async and await keywords in JavaScript?
    async and await provide a way to work with Promises more comfortably. An async function returns a promise, and await can be used to pause the execution of the async function until the promise is resolved.

    ```javascript
    async function fetchData() {
      try {
          let response = await fetch('https://api.example.com/data');
          let data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
      }
    }

    fetchData();
 **[⬆ Back to Top](#table-of-contents)**

 6. ### Explain the concept of 'hoisting' in JavaScript.

    Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. This means that variable and function declarations are processed before any code is executed.

    ```javascript
    console.log(hoistedVar); // undefined
    var hoistedVar = 'This is hoisted';

    hoistedFunction(); // "This function is hoisted"
    function hoistedFunction() {
        console.log('This function is hoisted');
    }
 **[⬆ Back to Top](#table-of-contents)**

7. ### What are JavaScript modules and how do they work?

    JavaScript modules allow you to break up your code into separate files. This makes it easier to maintain the code-base. ES6 modules are the standard way to include and export code from one file to another.

    ```javascript
    // math.js
    export function add(x, y) {
        return x + y;
    }

    // main.js
    import { add } from './math.js';
    console.log(add(2, 3)); // 5
 **[⬆ Back to Top](#table-of-contents)**

8. ### What is a Proxy in JavaScript, and how can it be used?

    A Proxy object allows you to create an object that can define custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation, etc.).

    ```javascript
    const target = {};
    const handler = {
        get: function(obj, prop) {
            return prop in obj ? obj[prop] : 'Property does not exist';
        }
    };

    const proxy = new Proxy(target, handler);
    console.log(proxy.someProperty); // "Property does not exist"
 **[⬆ Back to Top](#table-of-contents)**

9. ### What is the bind() method in JavaScript?

    The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

    ```javascript
    const module = {
    x: 42,
    getX: function() {
        return this.x;
      }
    };

    const unboundGetX = module.getX;
    console.log(unboundGetX()); // undefined

    const boundGetX = unboundGetX.bind(module);
    console.log(boundGetX()); // 42
 **[⬆ Back to Top](#table-of-contents)**

10. ### Explain the concept of "debouncing" in JavaScript.

     Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, thus improving performance. It limits the rate at which a function gets invoked.

     ```javascript
    function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
      };
    }

    const handleResize = debounce(() => {
        console.log('Resized');
    }, 250);

    window.addEventListener('resize', handleResize);
 **[⬆ Back to Top](#table-of-contents)**

11. ### What is the difference between let and var?

    `let` has block scope, while `var` has function scope. `let` also doesn't hoist the same way `var` does.

    ```javascript
    if (true) {
      let blockScope = 'I am block scoped';
      var functionScope = 'I am function scoped';
    }

    console.log(functionScope); // "I am function scoped"
    console.log(blockScope); // ReferenceError: blockScope is not defined
    ```
 **[⬆ Back to Top](#table-of-contents)**

12. ### What is the Symbol type and how is it used?

    Symbol is a primitive data type introduced in ES6. It is used to create unique identifiers.

    ```javascript
    const sym1 = Symbol('description');
    const sym2 = Symbol('description');

    console.log(sym1 === sym2); // false
    ```
 **[⬆ Back to Top](#table-of-contents)**

13. ### Explain the concept of "throttling" in JavaScript.

    Throttling ensures a function is called at most once in a specified period.

    ```javascript
    function throttle(func, limit) {
      let inThrottle;
      return function() {
        const context = this, args = arguments;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    }

    const handleScroll = throttle(() => {
      console.log('Scroll event handler');
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    ```
 **[⬆ Back to Top](#table-of-contents)**

14. ### What is the purpose of the WeakMap in JavaScript?

    WeakMap is a collection of key/value pairs where keys are objects and values can be arbitrary values. The key objects are held weakly, meaning they can be garbage collected if no other references to them exist.

    ```javascript
    let obj = {};
    const weakmap = new WeakMap();
    weakmap.set(obj, 'value');
    obj = null; // Now the object is eligible for garbage collection
    ```
 **[⬆ Back to Top](#table-of-contents)**

15. ### How does prototypal inheritance work in JavaScript?

    Objects in JavaScript can inherit properties from other objects via the prototype chain. Each object has a prototype property that refers to another object.

    ```javascript
    const parent = {
      greet() {
        console.log('Hello');
      }
    };

    const child = Object.create(parent);
    child.greet(); // "Hello"
    ```
 **[⬆ Back to Top](#table-of-contents)**

16. ### What is the difference between call, apply, and bind?

    `call` and `apply` invoke a function immediately with a specified `this` context. `call` accepts arguments one by one, while `apply` accepts arguments as an array. `bind` creates a new function with a specified `this` context and returns it without invoking it immediately.

    ```javascript
    function example(a, b) {
      console.log(this.value, a, b);
    }

    const context = { value: 'Hello' };

    example.call(context, 1, 2); // "Hello 1 2"
    example.apply(context, [1, 2]); // "Hello 1 2"
    const boundExample = example.bind(context, 1);
    boundExample(2); // "Hello 1 2"
    ```
 **[⬆ Back to Top](#table-of-contents)**

17. ### What are Generators in JavaScript?

    Generators are functions that can be paused and resumed. They are denoted by `function*` and use the `yield` keyword to pause execution.

    ```javascript
    function* generatorFunction() {
      yield 'Hello';
      yield 'World';
      return 'Done';
    }

    const generator = generatorFunction();
    console.log(generator.next().value); // "Hello"
    console.log(generator.next().value); // "World"
    console.log(generator.next().value); // "Done"
    ```
 **[⬆ Back to Top](#table-of-contents)**

18. ### Explain the concept of "immutability" in JavaScript.

    Immutability refers to objects whose state cannot be modified after they are created. This is often achieved using techniques like `Object.freeze` or libraries like Immutable.js.

    ```javascript
    const obj = Object.freeze({name: 'John'});
    obj.name = 'Doe'; // This will not change the object
    console.log(obj.name); // "John"
    ```
 **[⬆ Back to Top](#table-of-contents)**

19. ### What is the purpose of the Reflect API in JavaScript?

    The Reflect API provides methods for interceptable JavaScript operations. It is designed to complement Proxies.

    ```javascript
    const obj = { name: 'John' };
    console.log(Reflect.get(obj, 'name')); // "John"
    Reflect.set(obj, 'name', 'Doe');
    console.log(obj.name); // "Doe"
    ```
 **[⬆ Back to Top](#table-of-contents)**

20. ### Explain the concept of "destructuring" in JavaScript.

    Destructuring is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.

    ```javascript
    // Array Destructuring
    const [a, b] = [1, 2];
    console.log(a); // 1
    console.log(b); // 2

    // Object Destructuring
    const { name, age } = { name: 'Alice', age: 25 };
    console.log(name); // Alice
    console.log(age); // 25
    ```
 **[⬆ Back to Top](#table-of-contents)**