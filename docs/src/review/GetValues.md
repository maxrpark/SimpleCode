---
tags:
  - review
---

# Get values

## Getting review values

If you want to get the value of the review you can access it by selecting the element and getting the attributes.totalrating.value.

### Example

```js
const reviewOne = document.querySelector('#review1');
```

```js
let value = reviewOne.attributes.totalrating.value;
```

You can attach a click event to the review container or get the value after clicking on a buttom

### click event on the review container

```js
reviewOne.addEventListener('click', () => {
  let value = ratingOne.attributes.totalrating.value;
  console.log(value);
});
```

### click event on a buttom

```js
const btn = document.querySelector('#btn1');

ratingOne.addEventListener('click', () => {
  let value = ratingOne.attributes.totalrating.value;
  console.log(+value);
});
```
