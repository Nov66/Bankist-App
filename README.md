# Table of Contents <!-- omit in toc -->

- [JavaScript Fundamental](#javascript-fundamental)
  - [Part 1](#part-1)
  - [Part 2](#part-2)
- [Developer Skill](#developer-skill)
- [DOM & Event](#dom--event)
- [How JavaScript works behind the scenes](#how-javascript-works-behind-the-scenes)
  - [JS Engine](#js-engine)
  - [JS Runtime](#js-runtime)
  - [Execution Context](#execution-context)
  - [The CALL STACK](#the-call-stack)
  - [Scope and Scope Chain](#scope-and-scope-chain)
  - [Hoisting & TDZ in JS](#hoisting--tdz-in-js)
  - ['this' keyword](#this-keyword)
  - [Primitives VS. Objects](#primitives-vs-objects)
- [Data Structure](#data-structure)
- [Close Look at Functions](#close-look-at-functions)
  - [First-class Functions (concept)](#first-class-functions-concept)
  - [High-order Functions (practice)](#high-order-functions-practice)
  - [Closure](#closure)
- [Working with Arrays](#working-with-arrays)
  - [Data Transformations with Map, Filter, Reduce](#data-transformations-with-map-filter-reduce)
    - [Map](#map)
  - [Filter](#filter)
  - [Reduce](#reduce)
  - [Summary Array Method](#summary-array-method)
- [Advanced DOM and Events](#advanced-dom-and-events)
  - [Types of DOM Objects](#types-of-dom-objects)
    - [Inheritance](#inheritance)
  - [Smooth Scrolling](#smooth-scrolling)
  - [Event Propagation](#event-propagation)
    - [Bubbling and Capturing](#bubbling-and-capturing)
  - [Intersection Observer API (Sticky Navigation)](#intersection-observer-api-sticky-navigation)
  - [Lifecycle DOM Events](#lifecycle-dom-events)
  - [Efficient Script Loading: Defer and Async](#efficient-script-loading-defer-and-async)

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

### JS Runtime

Container including all the things that we need to use JS (in this case in the **browser**) -> JS Engine + WEB APIs + CALLBACK QUEUE

- Heart of the JS Runtime is **JS Engine**: _HEAP + CALL STACK_
- Besides JS Engine, we also need to access to **WEB APIs**

  1. WEB APIs: DOM, Timers, Fetch API ... -> Functionalities provide to the engine, not part of JS -> Accessible on window object

- **CALLBACK QUEUE**: Data structure contains all callback functions that are ready to be executed

  1. Example: callback function from DOM event listener (attack addEventListener to a DOM element like 'button')
  2. callback function (click) is put in the CALLBACK QUEUE (onClick). Then when CALL STACK is empty, the callback function is passed to the stack so that can be executed -> **EVENT LOOP**
  3. **Event Loop**: takes callback functions from callback queue, and put them to the call stack so that they can be executed -> Essential for non-blocking concurrency model

### Execution Context

Environment in which a piece of JS is executed. Stores all the necessary information for some code to be executed (e.g. local variable, arguments passed into a function ,)

1. Creation of **Global execution context** (for top-level code -> code not inside a function)

   ```javascript
   const name = 'nov66' // Top-level code -> executed on the global context

   const first = () => {
      let a = 1;
      a = a + b;
      return a
   }

   function () {
      var c = 2;
      return c; // function body only executed when called
   }
   ```

   1. **Only one global execution context (EC)**: default context, created for code that is not inside any function (top-level)

2. Execution of **top-level code** (inside global EC)
3. Execution of **functions** and waiting for **callbacks** (Example: click event callback)

   1. For each and every function call, a new execution context will be created containing all the necessary information to run that function
   2. One execution context per function (all together make the call stack)

4. When all functions are done executing, the engine will basically keep waiting callback function that to arrive

> What is inside execution context:

![executionContext](NotesImages/executionContext.png)

1. Variable Environment
   1. let, const and var declarations
   2. Functions
   3. arguments object
2. Scope chain -> consists of references to variable that are located outside of the current function
3. **this** keyword

**Note**: **_Arrow function_** do not have **arguments object** and **this** keyword, but it can use arguments object and this keyword from the closet regular function parent

```javascript
const name = 'nov66'; // Top-level code -> executed on the global context

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

function second(x, y) {
  var c = 2;
  return c; // function body only executed when called
}

const x = first();
```

Global:

```
name = 'nov66'
first = <function>
second = <function>
x = <unknown> -> need to run first() first
```

first():

```
a = 1
b = <unknown> -> need to run second() first
```

second():

```
c = 2
arguments = [7, 9] // Array of passed arguments. Available in all 'regular' functions (not arrow functions)
```

### The CALL STACK

Place where execution contexts get stacked on top of each other, to keep track of where we are in the execution

### Scope and Scope Chain

> **Scoping**: How our program's variable are **organized** and **accessed** (is influenced by where we write functions and code blocks

> **Lexical scoping**: scoping is controlled by **placement** of functions and blocks in the code (a function write inside a function can access the variables of the parent function)

> **Scope**: Space or environment in which a certain variable is **declared** (variable environment in case of functions). There is **global scope**, **function scope**, and **block scope**

- Global Scope:
  - outside of any function or block
  - Variables declared in global score are accessible everywhere
  ```javascript
  const me = 'nov66';
  const job = 'developer';
  ```
- Function Scope:
  - Variables are accessible only **inside function**. NOT OUTSIDE
  - Also called **Local Scope**
  ```javascript
  function calcAge(birthYear) {
    const now = 2037;
    const age = now - birthYear;
    return age;
  }
  console.log(now); // Reference Error
  ```
- Block Scope (ES6):

  - Variables are accessible only **inside block** (curly braces)
  - However, this only applies to **let** and **const** variables
  - Functions are also block scoped (only in strict mode)

  ```javascript
  if (year >= 1981 && year <= 1996>) {
     const millennial = true;
     const food  = 'Avocado toast';
  } // if block, for loop block, etc.

  console.log(millenial); // Reference error
  ```

> **Scope of a variable**: Region of our code where a certain variable can be **accessed**

- Variables can only **look up** in scope chain, not look down. (parent not child)
- **let** and **const** are **block-scoped**, var is **function-scoped**
  ![scopeChian](NotesImages/scopeChain.png)

> Scope Chain VS. CALL STACK

- Scope Chain -> **Order** in which **functions are written** in the code -> has **nothing** to do with order in which functions were called

- CALL STACK -> **Order** in which **functions were called**

> Summary

- Scoping asks the question “Where do variables live?” or “Where can we access a certain variable, and where not?”;
- There are 3 types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks;
- Only let and const variables are block-scoped. Variables declared with var end up in the closest function scope;
- In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written;
- Every scope always has access to all the variables from all its outer scopes. This is the scope chain!
- When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it’s looking for. This is called variable lookup;
- The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope;
- The scope chain in a certain scope is equal to adding together all the variable environments of the all parent scopes;
- The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!

### Hoisting & TDZ in JS

**Hoisting**: Makes some types of variables accessible/usable in the code before they are actually declared. “Variables lifted to the top of their scope”.

-> **Behind the Scenes**: **Before execution**, code is scanned for variable declarations, and for each variable, a new property is created in the **variable environment object**.

We can use Function declarations before they are declared because Hoisting
![hoisting](NotesImages/Hoisting.png)

> Reason:
> v

- Using functions before actual declaration; -> important for mutual recursion
- var hoisting is just a byproduct.

**Temporal Dead Zone (TDZ)**: each and every let and const variables get their own TDZ that starts at the beginning of the scope **until the line where it is defined**. The variables are only safe to use after TDZ.

> Reason:

- **Makes it easier to avoid and catch errors**: accessing variables before declaration is bad practice and should be avoided;
- **Makes const variables actually work** -> const should never to be reassigned

### 'this' keyword

> **this keyword/variable**: Special variable that is created for every execution context (every function). Takes the value of (**points to**) the “owner” of the function in which the this keyword is used.

> this is **NOT static** (not the same). It depends on **how the function is called**, and its value is only assigned when the function **is actually called**.

> this does **NOT point to** the function itself, and also **NOT the its variable environment**!

![thisKeyword](NotesImages/thisKeyword.png)

1. Call function as a method -> as a function attacked to an object
2. Arrow Functions do not get their own 'this' keyword

### Primitives VS. Objects

![PrimitiveVsObject](NotesImages/PrimitiveObjectiveTypes.png)

**Primitives**: Number, String, Boolean, Undefined,Null, Symbol, BigInt -> **Primitive Types**

- Stored in Execution context -> CALL STACK
- Identifier actually points to the memory address

**Objects**: Object literal, Arrays, Functions -> **Reference Types**

![primitiveVsReference](NotesImages/PrimitivesVsReference.png)

- When create a new object same as object, it points to the same object (memory address)

## Data Structure

When to use them
![dataStructure](NotesImages/dataStructure.png)

How to use them

> Array VS. Sets

![arrayVsSets](NotesImages/arrayVsSets.png)

> Objects VS. Maps

![objectsVsMaps](NotesImages/objectsVsMaps.png)

## Close Look at Functions

- JS treats functions as **First-class Citizens**
- This means that functions are **simply values**
- Functions are just another **'type' of object**

### First-class Functions (concept)

1. Store functions in **variables** or **properties**

   ![storeFunction](NotesImages/storeFunction.png)

2. Pass functions as arguments to **OTHER functions**

   ![passFunction](NotesImages/passFunction.png)

3. Return functions **FROM functions**
4. **Call methods** on functions

   ![callMethod](NotesImages/callMethod.png)

### High-order Functions (practice)

- A function that **receives** another function as an argument, that **returns** a new functions or **Both**

1. Function that **receives** another function

   ![functionReceive](NotesImages/functionReceiveFunction.png)

   - addEventListener -> High-order function because of -> Receive another function as **input**
   - A function **passed in** is the **Callback function** -> because it will be **Called later** by the **high-order function**
   - In this case, addEventListener will Call greet later as soon as the click event happens.

2. Function that **returns** new function

![functionReturn](NotesImages/functionReturnFunction.png)

- function count() is High-order function -> because it **Returned** a new function

- This is only possible because of first-class functions

### Closure

```javascript
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();
```

![createClosure](NotesImages/createClosure.png)

> How to access passengerCount when it is not in the Scope Chain

- Any function always has access to the variable environment of the Execution Context in which the function was created
- booker was born in a Execution Context of secureBooking which was pop off the Stack previously

1. A function has access to the variable environment (VE) of the execution context in which it was created
2. **Closure**: VE attached to the function, exactly as it was at the time and place the function was created

![closureUnderstanding](NotesImages/closureUnderstanding.png)

- Closure has **priority** over Scope Chain

**Summary**
![closureSummary](NotesImages/closureSummary.png)

- Closed-over Variable Environment of the execution context

## Working with Arrays

### Data Transformations with Map, Filter, Reduce

#### Map

- Similarly to **forEach method**, but **create a brand NEW array** based on the original array
- Loop over the array, and in each iteration -> **apply a CALLBACK function** that we specify in our code to the current array element

![transformationMap](NotesImages/transformationMap.png)

- Useful than forEach method because forEach only allows us to do some works with each array elements

### Filter

- Use to Filter elements in the original array which **satisfies certain conditions**
- Elements for which the condition is true will be included in a **NEW array** that filter method returns
- All other elements will get filter out

![transformationFilter](NotesImages/transformationFilter.png)

### Reduce

- Use to boil down all the elements of the original array into **one single value**
- Snowball Effect

![transformationReduce](NotesImages/transformationReduce.png)

### Summary Array Method

![arrayMethodSummary](NotesImages/arrayMethodSummary.png)

## Advanced DOM and Events

- DOM is the **Interface** between JS code and Browser
- Allows us to make JavaScript interact with the browser;
- We can write JavaScript to create, modify and delete HTML elements; set styles, classes and attributes; and listen and respond to events;
- DOM tree is generated from an HTML document, which we can then interact with;
- DOM is a very complex API (Application Programming Interface) that contains lots of methods and properties to interact with the DOM tree

```javascript
.querySelector() / .addEventListener() / .createElement() /
.innerHTML / .textContent / .children / etc...
```

### Types of DOM Objects

![DOMAPIBehindScenes](NotesImages/DOMAPI.png)

#### Inheritance

- Inheritance means all the child types will also get access to the methods and properties of all their parent Node types
- _Example_: Any HTMLElement will have access to .addEventListener(), .cloneNode() or .closest() methods.

### Smooth Scrolling

![smoothScrolling](NotesImages/smoothScrolling.png)

### Event Propagation

#### Bubbling and Capturing

![bubbling](NotesImages/bubbling.png)
![bubbling2](NotesImages/bubblingJS.png)

### Intersection Observer API (Sticky Navigation)

First we created an observer which receives two arguments

1. a callback function

2. object (options of object)

```javascript
const observer = new IntersectionObserver(callback, options);
```

Now, this observer will observe a target element _i.e. section1_ in our case

```javascript
observer.observe(section1);
```

Now, we need an intersecting element i.e. root property, which is inside the options object.

```javascript
const options = {
  root: null, // default case or viewport
  threshold: 0.2,
};
```

Now, this **threshold** property holds the **array value** even it has single value. Here, 0.2 means when the target element (section1) is **20% visible on our viewport**(intersecting element), call this callback function. That's why **isIntersecting value** is true (isIntersecting: true).

If target element is (section1) less than 20% visible in our viewport (intersecting element), the value of isIntersecting value will get false (insIntersecting: false)

```javascript
const callback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};
```

### Lifecycle DOM Events

- Lifecycle means from the moment that the page is first accessed until User leave it

1. DOM Content Loaded

   - Fired as soon as the HTML is completely parsed -> which means HTML has been downloaded and converted to the DOM Tree

2. Load Event

   - Fired by the **Window**. As soon as not only the HTML is parsed, but also all the images and external resources like CSS files are also loaded.

   - When the complete page has finished loading is when this event gets fired

3. Before Unload Event

   - Fired by **Window**.

   - Created **immediately** **before** a user is about to **leave a page**.

   - After clicking close button in the browser tab.

   - We can basically use this event to ask users if they are 100% sure that they want to leave the page.

### Efficient Script Loading: Defer and Async

![deferAsync](NotesImages/deferAsync.png)

![deferVsAsync](NotesImages/deferVSasync.png)
