<script setup>
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Swiper from "swiper";
import { ref } from "vue";

var productSlider = new Swiper('.product-slider', {
  spaceBetween: 0,
			centeredSlides: false,
			loop:true,
			direction: 'horizontal',
			loopedSlides: 5,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			resizeObserver:true,
		});

    var productThumbs = new Swiper('.product-thumbs', {
			spaceBetween: 0,
			centeredSlides: true,
			loop: true,
			slideToClickedSlide: true,
			direction: 'horizontal',
			slidesPerView: 5,
			loopedSlides: 5,
		});
		productSlider.controller.control = productThumbs;
		productThumbs.controller.control = productSlider;

</script>

<template>
  <div class="page-width">
    <h1 class="cstmshw-title">Customer Showcase</h1>
    <swiper-container class="product-slider">
      <swiper-slide>
        <img class="slider_image" src="../assets/images/image 49.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img
          class="slider_image"
          src="../assets/images/kelly-sikkema-Hl3LUdyKRic-unsplash.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide
        ><img
          class="slider_image"
          src="../assets/images/marcos-rocha-AypGmsgckaU-unsplash.jpg"
          alt=""
      /></swiper-slide>
    </swiper-container>

    <swiper-container class="product-thumbs">
      <swiper-slide>
        <img class="slider_image" src="../assets/images/image 49.png" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img
          class="slider_image"
          src="../assets/images/kelly-sikkema-Hl3LUdyKRic-unsplash.jpg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide
        ><img
          class="slider_image"
          src="../assets/images/marcos-rocha-AypGmsgckaU-unsplash.jpg"
          alt=""
      /></swiper-slide>
    </swiper-container>
  </div>
</template>
<style scoped>
.cstmshw-title {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #ea0029;
  margin: 50px 0px;
}

.slider_image {
  width: 100%;
  height: 500px;
  object-fit: contain;
}
</style>
