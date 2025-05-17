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
