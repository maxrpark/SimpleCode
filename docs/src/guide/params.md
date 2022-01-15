---
tags:
  - params
  - example
  - slider
---

# Params

## Params

SimpelSlider has some basic params so you can start using it right away. But can customize some of them you fulfill your needs.

| Param       | Description                       | Default | Notes        |
| ----------- | --------------------------------- | ------- | ------------ |
| height      | Control height of sliderContainer | 100%    | px, vh or %  |
| width       | Control width of sliderContainer  | 600px   | Use px or vh |
| color       | Change color of arrows            | black   | RGB hex name |
| arrowSize   | Size of arrows                    | 2       | From 1 to 5  |
| arrowWeight | Size of weight                    | 5       | From 1 to 10 |

## Example

::: tip Try it out
Play around with code on [codepen](https://codepen.io/maxrpark/pen/ExwXRPb)
:::

<p class="codepen" data-height="600" data-default-tab="result" data-slug-hash="BawMWGR" data-user="maxrpark" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/maxrpark/pen/BawMWGR">
  Simple Slider Params</a> by Maxi Ruti Park (<a href="https://codepen.io/maxrpark">@maxrpark</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Code

```html
<section height="80vh" color="orange" arrowWeight="10" class="sliderContainer">
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
