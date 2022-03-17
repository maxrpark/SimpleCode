## Params

**_SimpleReview_** have some params so you can to customize the way it look and how it works.

### Styles

**_SimpleReview_** has a defaul value of :

```css
display: flex;
justify-content: center;
align-items: center;
```

If you want to position the container some where else you can target your id in the css or wrap the **_SimpleReview_** div in another div it also recommend.

### Color options

**selectedColor** for the selected stars

**baseSelectedColor** for the unselected stars

### Example

```html
<div class="simpleReview" baseSelectedColor="red" selectedColor="black"></div>
```

### Local Storage

In case you want to store the review value on the local storage you can do so by adding ls="true".

This will save the value of the rating on the localStorage with the name of your id.

The value of the review will be there next time you visit the page or refresh it.

```html
<div class="simpleReview" id="rating1" ls="true"></div>
```

You can also get the value from the local storage by querying the id.:

### Example

```js
const ratingLS = localStorage.getItem('rating1');
```

### View Result

If you want to show the result or specific value in the review you can add resultValue with a number from 1 to 5.

### Example

```html
<div class="simpleReview" resultValue="3"></div>
```

> It will show 3 stars selected out of 5.

resultValue will make the review static, the value can not be updated if you click on it.

### Params table

| Param             | Description                   | Default | Notes         |
| ----------------- | ----------------------------- | ------- | ------------- |
| selectedColor     | Color of the selected stars   | #F5D547 | RGB hex name  |
| baseSelectedColor | Color of the unselected stars | #C0C5C1 | RGB hex name  |
| ls                | Save to localStorage          | false   | true or false |
| resultValue       | Display review resilt         | false   | From 1 to 5   |

### ### Example

```html
<div
  class="simpleReview"
  baseSelectedColor="red"
  selectedColor="black"
  ls="true"
></div>
```
