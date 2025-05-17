#### Q2. Explain the different between relative, absolute and fixed positioning CSS with code examples.

- **Relative**: Positions element relative to its normal position in document flow.
- **Absolute**: Positions element relative to nearest positioned ancestor.
- **Fixed**: Positions element relative to viewport.

#### Q3. What is z-index? Describe a common real-world use case.

The z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order. z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display:flex elements). If two positioned elements overlap without a z-index specified, the element positioned last in the HTML code will be shown on top.

```css
.wrapper {
  position: relative;
}

.box1 {
  position: relative;
  z-index: 1;
  border: solid;
  height: 100px;
  margin: 50px;
}

.box2 {
  position: absolute;
  z-index: 2;
  background: pink;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 120px;
  opacity: 0.9;
}
```

#### Q5. Explain tha defference between == and === in javascript

**== (Equal to):** This operator checks for equality of value after performing type coercion if necessary. It means that if the operands have different types, JavaScript will attempt to convert them to a common type before making the comparison.

**=== (Strict equal to):** This operator checks for both equality of value and equality of type without performing any type coercion. It means that if the operands have different types, they are considered unequal, regardless of their values.

```js
"use ==";
5 == "5"; // true (string converted to number)
true == 1; // true (boolean converted to number)
null == undefined; // true (special case)

("use ===");
5 === 5; // true
"5" === 5; // false (string vs number)
true === 1; // false (boolean vs number)
null === undefined; // false
```

#### Q6. what are closures? provide a simple example.

A closure in JavaScript is a function's ability to remember and access its surrounding state even after the outer function has finished executing. This means an inner function retains access to the variables of its outer function, even when the outer function is no longer in scope.

```js
function firstFunction(x) {
  function secondFunction(y) {
    return x + y;
  }
  return secondFunction;
}

const addAmount = firstFunction(5); // Creates a closure, add5 remembers x = 5
const result = add5(3); // Accesses x from the closure and returns 5 + 3 = 8
console.log(result); // Output: 8
```

#### Q8. What is the event loop in javascript? explain with a brief example.

The event loop is a mechanism that enables asynchronous operations to be executed in a non-blocking manner. Understanding the event loop is essential for developing web applications because it underpins the asynchronous nature of JavaScript, which is fundamental for building responsive and efficient web applications.
