# Table of Contents <!-- omit in toc -->

- [JavaScript Fundamental](#javascript-fundamental)
  - [Part 1](#part-1)
  - [Part 2](#part-2)
- [Developer Skill](#developer-skill)
- [DOM & Event](#dom--event)
- [How JavaScript works behind the scenes](#how-javascript-works-behind-the-scenes)
  - [JS Engine](#js-engine)

## JavaScript Fundamental

### Part 1

### Part 2

## Developer Skill

## DOM & Event

DOM -> document object model: a connection point between HTML and JavaScript.

Allow JavaScript to access HTML elements and styles to manipulate them

## How JavaScript works behind the scenes

1. High Level

   Do not need to manage resources, everything happens automatically

2. Garbage-collected

   Automatically removes all unused objects from the computer memory

3. Interpreted or just-in-time complied: compiling = convert to machine code
4. Multi-paradigm:
   1. Procedural programming
   2. Object-oriented programming (OOP)
   3. Functional programming (FP)
5. Prototype-based object-oriented (OOP nature of JS): Prototypal inheritance
6. First-class functions

   1. Functions are simply treated as variables, we can pass them into other functions, and return them from functions
   2. Passing a function into another function as an argument: **First-class function**

   ```javascript
   const closeModal = () => {
     modal.classList.add('hidden');
     overlay.classList.add('hidden');
   };

   overlay.addEventListener('click', closeModal);
   ```

7. Dynamic
   - Dynamic-typed language
   - Nod data type definitions. Types become known at runtime
   - Data type of variable is automatically changed

```javascript
let x = 23;
x = 'nov66';
```

8. Single-threaded
   1. Concurrency model: how the JS engine handles multiple tasks happening at the same time
   2. JS runs in one single thread, so it can only do one thing at a time
9. Non-blocking event loop
   1. For long-running task -> non-blocking behavior
   2. Using an event loop: takes long running tasks, executes them in the 'bakcground', and puts them back in the main thread once they are finished

### JS Engine

- Program that executes JS code: V8 engine
- **CALL STACK**: Execution context -> Where our code is executed
- **HEAP**: Object in memory -> Where objects are stored
- **Jut-in-time(JIT) compilation**: Entire code is converted into machine code at once, them executed immediately
