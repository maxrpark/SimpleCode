---
tags:
  - review
  - installation
---

# Getting Started

To use it, open up your terminal in the desired directory and run the following command:

<code-group>
<code-block title="NPM">
```bash
npm i simplereview
```
</code-block>
</code-group>

## Usage

### Register the packeget

```js
import simplereview from 'simplereview';
```

or

```js
import simplereview from './node_modules/simplereview/index.js';
```

#### Javascript

After registering the package inside your javascript file you just need to initiate the package this:

```js
simplereview();
```

##### Don't forget

Your javascript file must be type="module".

<!-- #### Vue

```js
  mounted() {
    simplereview();;
  },
```-->

## Template

### Simple use

Create a Div or Section tag with a class of simpleReview

```html
<div class="simpleReview"></div>
```

You don't need to add anything else to display the stars but it is recommended that you also add a unique id, especially if you are going to have more than one review per page.

Also adding an id will give to the change interact with the review.

```html
<div class="simpleReview" id="review1"></div>
```

> **Note:** For more options see **_Params section_** at the bottom.
