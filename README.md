# Advanced JavaScript Interview Questions and Answers
My Advanced JavaScript Interview Prep A personal repository of JavaScript interview questions and solutions to help you solidify my understanding of advanced concepts.

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
<button class="symbol-button" onclick="copyToClipboard('#closure-code')">📋 Copy Code</button> <button class="symbol-button" onclick="runCode('#closure-code')">▶️ Run Code</button>

<button class="symbol-button" onclick="scrollToTop()">⬆ Back to Top</button>

<script src="script.js"></script>