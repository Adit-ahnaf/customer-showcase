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


const selectedArr = ref([
  {
    name: "item1",
    subarr: [
      { img: "https://swiperjs.com/demos/images/nature-1.jpg" },
      { img: "https://swiperjs.com/demos/images/nature-2.jpg" },
      { img: "https://swiperjs.com/demos/images/nature-3.jpg" },
    ],
  },
]);

const swiperOptions = ref({
  breakpoints:{
    768: {       
         slidesPerView: 1,
         spaceBetween: 10     
      },
  }
});
const top = ref(0);

function slideRight(event) {
  console.log("event", event.target.getAttribute("src"));

  let selectImg = event.target.getAttribute("src");
  let fnd = arr.find((item) => {
    return item.subarr[0].img == selectImg;
  });

  selectedArr.value = fnd;
  window.scrollTo(0, top);
  console.log("fnd", fnd);
}

let arr = [
  {
    name: "item1",
    subarr: [
      {
        img: "https://swiperjs.com/demos/images/nature-1.jpg",
      },
      {
        img: "https://swiperjs.com/demos/images/nature-2.jpg",
      },
      {
        img: "https://swiperjs.com/demos/images/nature-3.jpg",
      },
    ],
  },

  {
    name: "item2",
    subarr: [
      {
        img: "https://swiperjs.com/demos/images/nature-3.jpg",
      },
      {
        img: "https://swiperjs.com/demos/images/nature-4.jpg",
      },
      {
        img: "https://swiperjs.com/demos/images/nature-5.jpg",
      },
    ],
  },
];

var sswiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  breakpoints:{
    768: {
      slidesPerView:2,
      spaceBetween: 10,
    }
  },
  navigation: {
    nextEl: "#js-prev1",
  },
  thumbs: {
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
  <h1 class="cstmshw-title page-width">Customer Showcase</h1>
  <div class="sldcont1">
    <swiper-container
      style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
      class="mySwiper"
      thumbs-swiper=".mySwiper2"
      space-between="10"
      navigation="true"
    >
      <swiper-slide v-for="(item, index) in selectedArr.subarr" :key="index">
        <img class="sliderimg_1" :src="`${item.img}`" />
      </swiper-slide>
    </swiper-container>
  </div>
  <div class="page-width">
    <swiper-container
      class="mySwiper2"
      space-between="10"
      slides-per-view="2"
      free-mode="true"
      watch-slides-progress="true"
      :breakpoints="{480:{slidesPerView:2}, 900:{slidesPerView:3}, 1367:{slidesPerView:4}}"
    >
      <swiper-slide
        v-for="(item, index) in selectedArr.subarr"
        :key="index"
        class="thumbs-cell"
      >
        <img class="slide_img2" :src="`${item.img}`" />
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

    <p class="cstmshw-morecarcase">more showcase car photos</p>
    <swiper-container
      class="mySwiper3"
      space-between="30"
      slides-per-view="1"
      free-mode="false"
      watch-slides-progress="true"
      :navigation="true"
      :breakpoints="{480:{slidesPerView:2, navigation: true}, 900:{slidesPerView:3}, 1367:{slidesPerView:4}}"
      @click="slideRight"
    >
      <swiper-slide
        v-for="(item, index) in arr"
        :key="index"
        class="thumbs-cell"
      >
        <img class="thumbs-img" :src="`${item.subarr[0].img}`" />
      </swiper-slide>
    </swiper-container>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

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


<style>


.mySwiper3 [class^="swiper-button-"]::after{
    color: red !important;
}

.swiper-button-next,
.swiper-container-rtl .swiper-button-prev,
.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: none;
}

.thumbs-img {
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: pointer;
}

.thumbs-img:hover {
  transform: scale(1.1);
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

.sliderimg_1 {
  display: block;
  width: 100%;
  height: 500px ;
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

swiper-slide .swiper-button-next {
  display: none;
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
  margin: 35px 0px 8px;
}

.cstmshw-sbmby-des {
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 40px;
}

.shw-car_form {
  padding: 24px 32px 32px;
  background: #fafafa;
  border: 1px solid #a7a7a7;
  border-radius: 16px;
  width: 70%;
  margin: 60px 0px 80px;
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
  margin-bottom: 12px;
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
  margin: 0 auto;
  padding: 0 3.5rem;
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

.cstmshw-morecarcase {
  font-size: 25px;
  font-weight: 700;
  color: #ea0029;
  margin: 0px 0px 8px;
}

@media screen and (max-width: 900px) {
  .sldcont1 {
    margin: 0;
    padding: 0;
  }
}

@media screen and (max-width: 768px) {

  .cstmshw-title{
    font-size: 25px;
    margin-bottom: 20px;
  }
  .page-width {
    padding: 0 2.5rem;
  }
  .cstmshw-destitle{
    font-size: 18px;
    margin: 27px 0px 12px;
  }
  .cstmshw-des{
    font-size: 16px;
  }
  .cstmshw-sbmby{
    font-size: 18px;
    margin: 27px 0px 8px;
  }
  .cstmshw-sbmby-des{
    margin-bottom: 25px;
    font-size: 16px;
  }

  .cstmshw-morecarcase{
    font-size: 18px;
  }
  .cstmshw-morecarcase {
    margin-bottom: 20px;
  }
  .shw-car_form {
    width: 100%;
    margin: 55px 0px 65px;
  }
  .shw-car_inputfield{
    width: 100%;
    margin-bottom: 27px;
  }
  .shw-car_form_head {
    font-size: 18px;
  }
  .search_input_label {
    font-size: 16px;
  }
  .shw-car_form_head {
    margin-bottom: 11px;
  }
  .search_input_btn{
    width: 100%;
    padding: 9px 48px;
  }
  .slide_img2{
    height: 140px;
  }
  .mySwiper2 {
    padding: 0px;
  }
  .mySwiper {
    margin-bottom: 0px;
  }
  .cstmshw-destitle {
    margin-top: 10px;
  }

  .sliderimg_1 {
    height: 250px;
  }

}

@media screen and (max-width: 480px) {
  .cstmshw-destitle {
    margin-top: 0px !important;
  }
  .slide_img2 {
    height: 125px;
  }
  .page-width{
    padding: 0 1.5rem;
  }

  .cstmshw-title {
    font-size: 22px;
  }

  .cstmshw-title {
    margin-bottom: 25px;
  }
  .cstmshw-destitle {
    margin: 21px 0px 12px;
    font-size: 16px;
  }
  .cstmshw-des {
    font-size: 14px;
  }
  .cstmshw-sbmby {
    font-size: 16px;
    margin-top: 25px;
  }
  .cstmshw-sbmby-des {
    font-size: 14px;
    margin-bottom: 30px;
  }
  .cstmshw-morecarcase {
    font-size: 18px;
  }

  .shw-car_form {
    width: 100%;
  }

  .shw-car_form_head {
    font-size: 18px;
  }
  .search_input_label {
    font-size: 14px;
    margin-bottom: 20px;
  }
  .shw-car_form_head{
    margin-bottom: 10px;
  }
  .shw-car_inputfield {
    width: 100%;
  }
  .shw-car_form{
    margin: 51px 0px 63px;;
  }
  .search_input_btn{
    width: 100%;
    padding: 9px 48px;
  }
  .swiper-button-next {
    display: none;
  }
  
}
</style>
