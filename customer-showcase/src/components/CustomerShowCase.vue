<script setup>
import { FreeMode, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Swiper from "swiper";
import { onMounted, ref } from "vue";
import arwleft from "../components/icons/arwleft.vue";
import arwright from "../components/icons/arwright.vue";



function slideRight() {

  const buttonEl = document.getElementById('btnrght');
  console.log('buttonEl', buttonEl)
  buttonEl.addEventListener('click', () => {

    sswiper.slideNext();


  });

}


var sswiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,

});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: "#js-prev1",
    // prevEl: ".swiper-button-prev",
  },
  thumbs: {
    // swiper: swiper,
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  navigation: true,
  watchSlidesProgress: true,
});


</script>

<template>
  <div class="page-width">
    <h1 class="cstmshw-title">Customer Showcase</h1>
    <div class="sldcont1">
      <swiper-container
        style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
        class="mySwiper"
        thumbs-swiper=".mySwiper2"
        space-between="10"
        navigation="true"
      >
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </swiper-slide>
      </swiper-container>

    </div>

    <swiper-container
      class="mySwiper2"
      space-between="10"
      slides-per-view="4"
      free-mode="true"
      watch-slides-progress="true"
    >
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-1.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-2.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-3.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-4.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-5.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-7.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-8.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-9.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-10.jpg"
        />
      </swiper-slide>
    </swiper-container>

    <h4 class="cstmshw-destitle">Description</h4>
    <p class="cstmshw-des">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget porttitor
      urna. In gravida, orci vel pretium lobortis, lorem purus auctor mauris, in
      sollicitudin orci enim vel enim. Integer consequat ex id tortor molestie
      accumsan. Quisque egestas, mi sed porta auctor, turpis sapien dignissim
      purus, et volutpat urna lorem blandit lectus. Nunc id risus vitae nisi
      hendrerit accumsan vel viverra mauris. Nullam sit amet magna sit amet
      risus accumsan sagittis id vitae neque. Morbi a odio vehicula, iaculis
      ligula ut, consectetur orci. Etiam accumsan consequat tellus ut feugiat.
    </p>
    <p class="cstmshw-sbmby">Submitted By</p>
    <p class="cstmshw-sbmby-des">James Smith</p>

    <swiper-container
      class="mySwiper3"
      space-between="10"
      slides-per-view="4"
      free-mode="true"
      watch-slides-progress="true"
      :navigation="true" 
    >
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-1.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-2.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-3.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-4.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-5.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-7.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-8.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-9.jpg"
        />
      </swiper-slide>
      <swiper-slide class="thumbs-cell">
        <img
          class="thumbs-img"
          src="https://swiperjs.com/demos/images/nature-10.jpg"
        />
      </swiper-slide>
    </swiper-container>

    <div class="shw-car_form">
      <h4 class="shw-car_form_head">Search Car Photos</h4>
      <label class="search_input_label" for="search_input"
        >Enter keyword (enter "ONE" word to search by. Make, model, last name,
        etc.)</label
      >
      <input name="search_input" class="shw-car_inputfield" type="text" />
      <button class="search_input_btn">Search</button>
    </div>
  </div>
</template>
<style >
.thumbs-img {
  /* height: 200px !important; */
}

.swiper-button-next,
.swiper-container-rtl .swiper-button-prev,
.swiper-button-prev, 
.swiper-container-rtl .swiper-button-next{
    background-image: none;
}


.thumbs-cell {
  height: 200px !important;
}
swiper-container {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper {
  height: 80%;
  width: 100%;
  margin-bottom: 20px;
}

.mySwiper2 {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper2 swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper2 .swiper-slide-thumb-active {
  opacity: 1;
}

swiper-slide img {
  display: block;
  width: 100%;
  height: 500px !important;
  object-fit: cover;
}

swiper-container {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.page-width {
  margin: 0 auto;
  padding: 0 3.5rem;
}

.img-cont {
  position: relative;
  height: 0;
  padding-bottom: 70.25%;
  overflow: hidden;
}
.cstmshw-title {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #ea0029;
  margin: 30px 0px 50px;
}

.slider_image {
  width: 100%;
  height: 500px;
  object-fit: contain;
}

.slider2_image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.slide2_cell {
  height: 150px !important;
}

.cstmshw-destitle {
  font-size: 25px;
  font-weight: 700;
  color: #464646;
  margin: 50px 0px 12px;
}

.cstmshw-des {
  font-size: 16px;
  font-weight: 300;
}

.cstmshw-sbmby {
  font-size: 25px;
  font-weight: 700;
  color: #464646;
  margin: 50px 0px 12px;
}

.cstmshw-sbmby-des {
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 25px;
}

.shw-car_form {
  padding: 24px 32px 32px;
  background: #fafafa;
  border: 1px solid #a7a7a7;
  border-radius: 16px;
  width: 70%;
}

.shw-car_form_head {
  font-size: 25px;
  font-weight: 700;
  color: #ea0029;
  margin-bottom: 30px;
}

.shw-car_inputfield {
  width: 50%;
  display: block;
  background: #ffffff;
  border: 1px solid #d2d2d2;
  padding: 8px;
  margin-bottom: 32px;
}

.search_input_label {
  color: #464646;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  display: block;
  margin-bottom: 8px;
}

.shw-car_form {
  margin: 50px 0px;
}

.search_input_btn {
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  line-height: 27px;
  padding: 10px 48px;
  border: none;
  background: #ea0029;
  border-radius: 8px;
}

.sldcont1 {
  position: relative;
}

.sld1_arrwleft {
  position: absolute;
  border-radius: 8px;
  background-color: #fff;
  left: 16%;
  top: 45%;
  padding: 15px;
  box-shadow: 0 24px 50px #0000004d;
  border: none;
  cursor: pointer;
  z-index: 5;
}

.sld1_arrwright {
  position: absolute;
  border-radius: 8px;
  background-color: #fff;
  right: 16%;
  top: 45%;
  padding: 15px;
  box-shadow: 0 24px 50px #0000004d;
  border: none;
  cursor: pointer;
  z-index: 5;
}

.sld1_arrwleft:hover {
  background: #ea0029;
}

.sld1_arrwright:hover {
  background: #ea0029;
}

.sld1_arrwright:hover .icn-slide {
  fill: white !important;
}

.sld1_arrwleft:hover .icn-slide {
  fill: white !important;
}
</style>
