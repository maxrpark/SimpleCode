<template>
  <div>
    <h2>sliderContainer</h2>
    <div>
      <div class="sliderContainer" autoSlide="false" color="black">
        <div class="slide">
          <img :src="img1" alt="" />
        </div>
        <div class="slide">
          <img :src="img2" alt="" />
        </div>
        <div class="slide">
          <img :src="img3" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import simpleSlider from '@maxcoding/simpleslider';
export default {
  mounted() {
    simpleSlider();
  },
  data() {
    return {
      img1: require('../public/image/cat1.jpg'),
      img2: require('../public/image/cat2.jpg'),
      img3: require('../public/image/cat3.jpg'),
    };
  },
};
</script>

<style></style>
