---
tags:
  - slider
  - installation
---

# Getting Started

<code-group>
<code-block title="NPM">
```bash
npm i @maxcoding/simpleslider
```
</code-block>
</code-group>

## Usage

### Register the package

```js
import simpleSlider from '@maxcoding/simpleslider';
```

or

```js
import simpleslider from './node_modules/@maxcoding/simpleslider/index.js';
```

#### Javascript

After registering the package inside your javascript file you just run the slider function:

```js
simpleslider();
```

::: warning Don't forget
Your javascript file must be type="module".
:::

#### Vue

```js
  mounted() {
    simpleSlider();
  },
```

## Template

All you need to do is to create a section or div tag with the class slidesContainer and inside it place as many div tags as you want your slides-show or carousel to have. This div needs to have the slide class to work.

```html
<section height="80vh" class="sliderContainer">
  <div class="slide">
    <img src="img1" alt="img1" />
  </div>
  <div class="slide">
    <img src="img2" alt="img2" />
  </div>
  <div class="slide">
    <img src="img3" alt="img3" />
  </div>
</section>
```
