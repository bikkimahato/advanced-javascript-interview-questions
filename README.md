# Advanced JavaScript Interview Questions and Answers
My Advanced JavaScript Interview Prep : A personal repository of JavaScript interview questions and solutions to help you solidify my understanding of advanced concepts.

<link rel="stylesheet" href="style.css">

---

### Table of Contents

| No. | Questions |
| --- | --------- |
| 1 | [What is a closure in JavaScript and how is it used?](#what-is-a-closure-in-javascript-and-how-is-it-used) |

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