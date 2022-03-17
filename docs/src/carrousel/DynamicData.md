---
tags:
  - slider
---

## Dynamic data

To use Simple Slider with dynamic data, you need to initiate the package after you get the data. For example in plain javascript you need to do this:

1. Select the container
2. Fetch the data
3. After you get the data, you can map over it and create the slides
4. Initiate the package

## Code

```js
const sliderContainer = document.querySelector('.sliderContainer'); // Select the container
const fetchProjects = async () => {
  // your function
  try {
    const resp = await fetch(
      // Fetch the data
      'https://my-portfolio-blog-website.netlify.app/api/myProjects'
    );
    const data = await resp.json();
    const projectImg = data // Map over it and create the slides
      .map((project) => {
        return `
      <a class="slide" href="${project.pageUrl}" target="_blank"
        >visit
        <img src="${project.url}" alt="cateria" />
      </a>
        `;
      })
      .join('');
    sliderContainer.innerHTML = projectImg;
    simpleslider(); // Initiate the package
  } catch (error) {
    console.log(error);
  }
};

fetchProjects(); // Run your function
```

### Example

::: tip Try it out
Play around with code on [codepen](https://codepen.io/maxrpark/pen/popjqxG)
:::

<p class="codepen" data-height="600" data-default-tab="result" data-slug-hash="popjqxG" data-user="maxrpark" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/maxrpark/pen/popjqxG">
  Untitled</a> by Maxi Ruti Park (<a href="https://codepen.io/maxrpark">@maxrpark</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
